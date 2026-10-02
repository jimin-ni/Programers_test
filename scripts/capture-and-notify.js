// capture-and-notify.js
// 커밋 페이지를 캡처해서 Discord 스레드로 전송합니다.
// 봇 이름: 지민이의 프로그래머스 코테봇

const puppeteer = require('puppeteer');
const { execSync } = require('child_process');
const fs = require('fs');

const {
  DISCORD_WEBHOOK_URL,
  THREAD_ID,
  REPO,
  COMMIT_SHA,
} = process.env;

const BOT_NAME = '지민이의 프로그래머스 코테봇';

// ── 1) 커밋 날짜 가져오기 → "✅26.10.02(금) 커밋완료" 포맷 ─────────────
function getCommitMessage() {
  // 커밋의 author 날짜(ISO)를 git에서 읽어옵니다.
  const iso = execSync(`git show -s --format=%aI ${COMMIT_SHA}`).toString().trim();
  const d = new Date(iso);

  // KST(UTC+9) 기준으로 변환 — 커밋한 한국 시간대로 표시
  const kst = new Date(d.getTime() + 9 * 60 * 60 * 1000);

  const yy = String(kst.getUTCFullYear()).slice(2);           // 26
  const mm = String(kst.getUTCMonth() + 1).padStart(2, '0');  // 10
  const dd = String(kst.getUTCDate()).padStart(2, '0');       // 02
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const dow = days[kst.getUTCDay()];                          // 금

  return `✅${yy}.${mm}.${dd}(${dow}) 커밋완료`;
}

// ── 2) 이 커밋이 올라온 폴더 경로 찾기 ──────────────────────────────
function getTargetDir() {
  // 이번 커밋에서 추가/변경된 파일 목록
  const files = execSync(`git show --pretty=format: --name-only ${COMMIT_SHA}`)
    .toString()
    .split('\n')
    .map((s) => s.trim())
    .filter(Boolean);

  // README.md가 있는 폴더를 우선 사용, 없으면 첫 변경 파일의 폴더
  const target = files.find((f) => f.toLowerCase().endsWith('readme.md')) || files[0];
  if (!target || !target.includes('/')) return ''; // 루트

  return target.split('/').slice(0, -1).join('/');
}

// ── 3) README 폴더 뷰 캡처 (height 고정) ────────────────────────────
async function capture() {
  const dir = getTargetDir();
  // 경로 각 조각을 인코딩 (한글/공백/괄호 대응), '/' 는 유지
  const encodedDir = dir.split('/').map(encodeURIComponent).join('/');
  const url = encodedDir
    ? `https://github.com/${REPO}/tree/${COMMIT_SHA}/${encodedDir}`
    : `https://github.com/${REPO}/tree/${COMMIT_SHA}`;
  console.log('캡처 URL:', url);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  // 뷰포트 = 캡처 크기. height를 고정값으로 둡니다.
  await page.setViewport({
    width: 1245,
    height: 1250,          // ← 원하는 세로 높이. 더 길게/짧게 조절 가능
    deviceScaleFactor: 2,  // 2배 선명도(레티나)
  });

  await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

  // 로그인 유도/쿠키 배너 등이 뜰 경우를 대비해 잠깐 대기
  await new Promise((r) => setTimeout(r, 2000));

  const path = 'commit.png';
  // fullPage: false → 뷰포트 크기(=고정 height)만 캡처
  await page.screenshot({ path, fullPage: false });

  await browser.close();
  return path;
}

// ── 4) Discord 스레드로 [이미지 + 메시지] 전송 ──────────────────────
async function send(imagePath, message) {
  // 스레드로 보내려면 webhook URL에 ?thread_id= 를 붙입니다.
  const sep = DISCORD_WEBHOOK_URL.includes('?') ? '&' : '?';
  const url = `${DISCORD_WEBHOOK_URL}${sep}thread_id=${THREAD_ID}`;

  const form = new FormData();
  form.append(
    'payload_json',
    JSON.stringify({
      username: BOT_NAME,
      content: message,
    })
  );

  const buffer = fs.readFileSync(imagePath);
  const blob = new Blob([buffer], { type: 'image/png' });
  form.append('files[0]', blob, 'commit.png');

  const res = await fetch(url, { method: 'POST', body: form });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Discord 전송 실패 (${res.status}): ${text}`);
  }
  console.log('Discord 전송 성공');
}

// ── 실행 ───────────────────────────────────────────────────────────
(async () => {
  try {
    const message = getCommitMessage();
    console.log('메시지:', message);

    const imagePath = await capture();
    console.log('캡처 완료:', imagePath);

    await send(imagePath, message);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
