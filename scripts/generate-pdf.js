import puppeteer from "puppeteer";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { existsSync } from "fs";
import { createServer } from "http";
import { readFileSync } from "fs";
import { extname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distPath = join(__dirname, "..", "dist");
const pdfOutputPath = join(__dirname, "..", "public", "pdfs");

// PDF 출력 디렉토리 생성 함수
async function ensurePdfDirectory() {
  const { mkdir } = await import("fs/promises");
  try {
    await mkdir(pdfOutputPath, { recursive: true });
  } catch (error) {
    // 이미 존재하는 경우 무시
  }
}

// 간단한 정적 파일 서버
function createStaticServer(rootPath, port = 3000) {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let filePath = join(rootPath, req.url === "/" ? "/index.html" : req.url);

      // 파일이 존재하지 않으면 index.html로 폴백 (SPA 라우팅)
      if (
        !existsSync(filePath) ||
        !existsSync(filePath.replace(/\/$/, "/index.html"))
      ) {
        filePath = join(rootPath, "index.html");
      }

      try {
        const content = readFileSync(filePath);
        const ext = extname(filePath);

        let contentType = "text/html";
        if (ext === ".js") contentType = "application/javascript";
        else if (ext === ".css") contentType = "text/css";
        else if (ext === ".png") contentType = "image/png";
        else if (ext === ".jpg" || ext === ".jpeg") contentType = "image/jpeg";
        else if (ext === ".svg") contentType = "image/svg+xml";
        else if (ext === ".json") contentType = "application/json";

        res.writeHead(200, { "Content-Type": contentType });
        res.end(content);
      } catch (error) {
        res.writeHead(404);
        res.end("Not Found");
      }
    });

    server.listen(port, () => {
      console.log(
        `📦 정적 파일 서버가 http://localhost:${port} 에서 실행 중입니다.`
      );
      resolve(server);
    });
  });
}

async function generatePDF() {
  // PDF 출력 디렉토리 생성
  await ensurePdfDirectory();

  // dist 폴더 확인
  if (!existsSync(distPath)) {
    console.error(
      '❌ dist 폴더를 찾을 수 없습니다. 먼저 "npm run build"를 실행해주세요.'
    );
    process.exit(1);
  }

  // 서버 시작
  const server = await createStaticServer(distPath, 3000);

  let browser;
  try {
    console.log("🚀 브라우저를 시작하는 중...");
    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();

    // 뷰포트 설정
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 2,
    });

    // PDF 전용 페이지 생성
    console.log("📄 PDF 생성 중...\n");

    try {
      console.log(`  → PDF 전용 페이지 처리 중...`);

      const url = `http://localhost:3000/portfolio/pdf`;
      await page.goto(url, {
        waitUntil: "networkidle0",
        timeout: 30000,
      });

      // 페이지가 완전히 로드될 때까지 대기 (React 앱 렌더링 대기)
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // PDF 전용 페이지가 로드되었는지 확인
      try {
        await page.waitForSelector(".pdf-page-container", {
          timeout: 5000,
        });
      } catch (e) {
        console.warn(
          "  ⚠ PDF 페이지 선택자를 찾을 수 없습니다. 계속 진행합니다..."
        );
      }

      // PDF 생성 옵션
      const pdfOptions = {
        path: join(pdfOutputPath, `Portfolio.pdf`),
        format: "A4",
        printBackground: true,
        margin: {
          top: "15mm",
          right: "15mm",
          bottom: "15mm",
          left: "15mm",
        },
      };

      await page.pdf(pdfOptions);
      console.log(`  ✓ Portfolio.pdf 생성 완료\n`);
    } catch (error) {
      console.error(`  ✗ PDF 생성 실패:`, error.message);
    }

    console.log("✅ 모든 PDF 생성이 완료되었습니다!");
    console.log(`📁 출력 위치: ${pdfOutputPath}`);
  } catch (error) {
    console.error("❌ PDF 생성 중 오류 발생:", error);
  } finally {
    if (browser) {
      await browser.close();
    }
    server.close();
    console.log("\n🔒 서버가 종료되었습니다.");
  }
}

// 스크립트 실행
generatePDF().catch(console.error);
