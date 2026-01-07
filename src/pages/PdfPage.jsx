import { personalInfo } from "../data/personal";
import { career } from "../data/career";
import { certifications } from "../data/certificates";
import { projects } from "../data/projects";
import { Mail, Phone, Github } from "lucide-react";

const PdfPage = () => {
  // 프로젝트 찾기
  const togatherProject = projects.find((p) => p.id === 5);
  const floodGuardProject = projects.find((p) => p.id === 2);
  const orakGarakProject = projects.find((p) => p.id === 3);

  // 스킬 레벨을 진행 바로 변환 (advanced: 5, intermediate: 4, basic: 3)
  const getSkillLevel = (level) => {
    if (level === "advanced") return 5;
    if (level === "intermediate") return 4;
    return 3;
  };

  // Q&A 내용
  const qaContent = [
    {
      question: "사용자가 계속 쓰고 싶어지는 서비스를 어떻게 만들 수 있을까?",
      answer:
        "저는 ‘사용자가 어떤 상황에서 이 화면을 쓰게 되는지’를 먼저 정의하고, 그 흐름을 끊지 않는 것을 가장 중요하게 생각합니다. FloodGuard에서는 센서 데이터·지도·차트를 한 화면에서 확인할 수 있도록 배치해 사용자가 반복적으로 모니터링하도록 만들었고, ToGather에서는 “홈 → 다이어리 작성 → 피드 타임라인” 흐름을 설계해 기록과 회고가 자연스럽게 이어지도록 했습니다. 이런 경험을 바탕으로, 화면 배치와 인터랙션을 설계할 때 항상 사용자 여정과 반복 사용 동기를 함께 고민하고 있습니다."
    },
    {
      question: "프론트엔드 개발에서 가장 중요하게 생각하는 점은 무엇인가요?",
      answer:
        "저는 ‘일관된 UI와 예측 가능한 상태 관리’가 좋은 사용자 경험을 만든다고 생각합니다. OrakGarak에서는 페이지마다 디자인과 상태 관리 방식이 제각각이어서 유지보수와 협업에 어려움이 있었는데, 공통 컴포넌트와 테마를 정리하고 상태를 도메인별로 분리하면서 화면 전환과 동작이 한눈에 이해되도록 개선했습니다. 이 과정에서 Zustand, Pinia, TanStack Query를 각각 로컬 상태·글로벌 상태·서버 상태에 맞게 역할을 나눠 사용해, 코드 구조와 사용자 경험의 일관성을 함께 가져가고자 했습니다."
    },
    {
      question: "향후 어떤 프론트엔드 개발자로 성장하고 싶나요?",
      answer:
        "웹과 모바일을 모두 이해하는 프론트엔드 아키텍트가 되는 것이 목표입니다. FloodGuard에서는 실시간 대시보드와 데이터 시각화를, ToGather에서는 모바일 네비게이션 구조와 감성적인 UX를 설계했습니다. 앞으로는 성능 최적화와 접근성, 컴포넌트 아키텍처에 더 깊이 투자하여, 다양한 서비스에서 안정적인 사용자 경험을 제공하는 개발자로 성장하고자 합니다.",
    },
  ];

  // 스킬 데이터 정리
  const leftColumnSkills = [
    {
      name: "React",
      description:
        "컴포넌트 재사용 구조 설계 및 Atomic 기반 화면 구성 경험. Zustand·TanStack Query를 활용해 도메인 기반 상태 분리 및 서버 상태 관리 적용. FloodGuard에서 WebSocket 실시간 데이터 연동 및 비동기 UI(Suspense) 구성 경험. 복잡한 UI를 모듈화하여 유지보수성 향상",
      level: "intermediate",
    },
    {
      name: "React Native",
      description:
        "Expo Router 기반 탭/스택 네비게이션 전체 구조 설계. Diary, Feed, Plan 등 핵심 화면 90% 이상 직접 구현. SafeArea, Animated, FlatList 최적화 등 모바일 전용 UX 처리 경험. 이미지/텍스트 혼합 레이아웃 컴포넌트 구조화",
      level: "beginner",
    },
    {
      name: "Vue 3",
      description:
        "Composition API + Pinia 기반 SPA 구조 설계 및 상태 모듈화. 공통 컴포넌트·레이아웃 시스템 구성. REST API 연동 및 페이지 라우팅 최적화 경험. 직관적인 UX 흐름을 위한 UI 구조 재정립",
      level: "intermediate",
    },
    {
      name: "TypeScript / JavaScript",
      description:
        "타입 안전한 API Layer 구축, Axios 비동기 처리 타입 안전성 확보. 컴포넌트/상태/모델 타입 분리로 유지보수성 강화. ES6+ 문법 활용한 로직 단순화 및 구조화. React Native·React·Vue 전반에서 TS 기반 프로젝트 경험",
      level: "intermediate",
    },
    {
      name: "Tailwind CSS & MUI",
      description:
        "Tailwind 기반 반응형 레이아웃 및 UI 토큰 시스템 설계. MUI 컴포넌트 커스터마이징 및 라이트/다크 테마 적용. Figma 디자인 요구사항을 코드로 정확히 재현. 일관된 Design System을 위한 컴포넌트 스타일 가이드 구축",
      level: "beginner",
    },
  ];

  const rightColumnSkills = [
    {
      name: "상태 관리 (Zustand / Pinia / TanStack Query)",
      description:
        "Zustand로 로컬/전역 상태 분리 및 Store 모듈화. TanStack Query 기반 캐싱·리페치·서버 상태 관리 전략 설계. Pinia를 활용한 Vue SPA의 도메인 기반 상태 설계. 공동 작업에서도 유지보수 쉬운 구조로 확장 경험",
      level: "beginner",
    },
    {
      name: "실시간/외부 API 연동",
      description:
        "WebSocket 기반 실시간 스트림(FloodGuard CCTV·센서 데이터) 처리. REST API 인증(JWT), 에러 핸들링, 리퀘스트 인터셉터 구성. AI 이미지/텍스트 분석 API 통합 경험 (오디오 분석, 이미지 분석 등). 비동기 데이터 흐름을 고려한 렌더링 최적화",
      level: "intermediate",
    },
    {
      name: "Git / GitHub",
      description:
        "Git Flow 기반 협업 및 체계적인 브랜치 전략 운영. PR/MR 코드 리뷰, conflict 해결 경험 다수. 릴리즈/태그 관리, 기능 단위 커밋 규칙 정립. 팀 내 코드 품질 일관성을 위한 컨벤션 구축",
      level: "intermediate",
    },
    {
      name: "협업 도구 (Figma, Postman, VS Code)",
      description:
        "Figma 시안을 기반으로 UI/UX 요소를 1:1 수준으로 구현. Postman으로 API 명세 검증·Mock 서버 활용. Prettier/Eslint 기반 코드 스타일 통일. 팀원과의 피드백 루프를 빠르게 돌리기 위한 효율적인 협업 환경 구축",
      level: "beginner",
    },
  ];

  // 2페이지 Project Summary용 데이터
  const projectSummary = [
    {
      name: "ToGather",
      period: "2025.10 - 2025.11",
      summary:
        "커플 전용 공유 다이어리 & 일정 관리 모바일 앱 (React Native + Expo)",
      tags: ["Mobile", "Frontend Lead", "Team Project"],
      pages: "p.4-5",
    },
    {
      name: "OrakGarak",
      period: "2025.08 - 2025.09",
      summary:
        "음성 분석과 데이터 기반 음악 추천 플랫폼 (React 18 + TypeScript)",
      tags: ["Web", "Frontend", "Team Project"],
      pages: "p.8-9",
    },
    {
      name: "FloodGuard",
      period: "2025.07 - 2025.08",
      summary:
        "AIoT 기반 실시간 침수 예방 대시보드 웹 서비스 (React + WebSocket)",
      tags: ["Web", "Frontend", "Real-time Dashboard"],
      pages: "p.6-7",
    },
  ];

  return (
    <>
      <style>{`
        @page {
          size: A4;
          margin: 0;
        }

        body {
          counter-reset: page;
        }

        /* 전체 문서 래퍼 */
        .pdf-document {
          width: 210mm;
          margin: 0 auto;
          background: #f3f4f6;
        }

        .pdf-page-container {
          width: 210mm;
          height: 297mm;
          margin: 0 auto;
          padding: 18mm 22mm;
          background: #ffffff;
          font-family: "Noto Sans KR", "Pretendard", sans-serif;
          color: #333;
          box-sizing: border-box;
          position: relative;
          page-break-after: always;
          counter-increment: page;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        /* 페이지 내용 영역 - 페이지 번호 공간을 제외한 높이 */
        .pdf-page-content {
          flex: 1;
          overflow-y: auto;
          padding-bottom: 15mm; /* 페이지 번호 공간 확보 */
        }

        .pdf-page-container::after {
          content: counter(page);
          position: absolute;
          bottom: 10mm;
          left: 50%;
          transform: translateX(-50%);
          font-size: 10px;
          color: #666;
          z-index: 10;
        }

        .pdf-page-container:last-child {
          page-break-after: auto;
        }

        @media print {
          body {
            margin: 0;
            padding: 0;
            counter-reset: page;
          }

          .pdf-document {
            margin: 0;
          }

          .pdf-page-container {
            width: 210mm;
            height: 297mm;
            page-break-after: always;
            page-break-inside: avoid;
            counter-increment: page;
            overflow: hidden;
            display: flex;
            flex-direction: column;
          }

          /* 페이지 내용 영역 - 페이지 번호 공간을 제외한 높이 */
          .pdf-page-content {
            flex: 1;
            overflow-y: auto;
            padding-bottom: 15mm; /* 페이지 번호 공간 확보 */
          }

          .pdf-page-container::after {
            content: counter(page);
            position: absolute;
            bottom: 10mm;
            left: 50%;
            transform: translateX(-50%);
            font-size: 10px;
            color: #666;
          }

          .pdf-page-container:last-child {
            page-break-after: auto;
          }

          /* 주요 섹션들이 페이지 중간에서 잘리지 않도록 */
          .pdf-profile-section,
          .pdf-skills-section,
          .pdf-section-card,
          .pdf-projects-section,
          .pdf-page-2-content-layout,
          .pdf-page-2-section-group,
          .pdf-projects-section,
          .pdf-page-4-role-features,
          .pdf-page-4-tech-section,
          .pdf-page-4-preview-section {
            page-break-inside: avoid;
          }

          /* Q&A 항목이 페이지 중간에서 잘리지 않도록 */
          .pdf-qa-item {
            page-break-inside: avoid;
          }

          /* 프로젝트 카드가 잘리지 않도록 */
          .pdf-project-card,
          .pdf-education-card,
          .pdf-activity-item {
            page-break-inside: avoid;
          }
        }

        /* ------------- 공통 헤더 (1페이지) ------------- */

        .pdf-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 18px;
          padding-bottom: 10px;
          border-bottom: 2px solid #25cc08;
        }

        .pdf-header-left {
          flex: 1;
        }

        .pdf-name {
          font-size: 26px;
          font-weight: bold;
          color: #25cc08;
          margin-bottom: 6px;
          line-height: 1.2;
        }

        .pdf-name-en {
          font-size: 15px;
          color: #666;
          font-weight: normal;
          margin-left: 8px;
        }

        .pdf-slogan {
          font-size: 13px;
          color: #666;
          margin-top: 6px;
          line-height: 1.4;
        }

        .pdf-contact-box {
          background: #f5f5f5;
          padding: 10px 14px;
          border-radius: 6px;
          min-width: 180px;
        }

        .pdf-contact-title {
          font-size: 11px;
          font-weight: bold;
          color: #25cc08;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }

        .pdf-contact-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: #333;
          margin-bottom: 5px;
        }

        .pdf-contact-item:last-child {
          margin-bottom: 0;
        }

        .pdf-contact-icon {
          width: 14px;
          height: 14px;
          flex-shrink: 0;
          color: #25cc08;
        }

        /* ------------- 1페이지: 프로필 & Q&A ------------- */

        .pdf-profile-section {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
          align-items: flex-start;
        }

        .pdf-profile-image-wrapper {
          width: 120px;
          height: 150px;
          background: #f5f5f5;
          border-radius: 6px;
          border: 2px solid #e5e7eb;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .pdf-profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .pdf-qa-section {
          flex: 1;
        }

        .pdf-qa-item {
          margin-bottom: 16px;
        }

        .pdf-qa-item:last-child {
          margin-bottom: 0;
        }

        .pdf-qa-question {
          font-size: 13px;
          font-weight: bold;
          color: #25cc08;
          margin-bottom: 6px;
          line-height: 1.4;
        }

        .pdf-qa-question::before {
          content: "Q. ";
          margin-right: 4px;
        }

        .pdf-qa-answer {
          font-size: 11px;
          color: #333;
          line-height: 1.7;
          text-align: justify;
        }

        /* ------------- 1페이지: SKILLS ------------- */

        .pdf-skills-section {
          margin-top: 20px;
        }

        .pdf-skills-header {
          padding-top: 10px;
          margin-bottom: 10px;
        }

        .pdf-skills-title {
          font-size: 17px;
          font-weight: bold;
          color: #25cc08;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .pdf-skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .pdf-skills-column {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .pdf-skill-card {
          background: #f5f5f5;
          padding: 8px 10px;
          border-radius: 4px;
          border: 1px solid #e5e7eb;
          page-break-inside: avoid;
        }

        .pdf-skill-name {
          font-size: 12px;
          font-weight: bold;
          color: #333;
          margin-bottom: 4px;
        }

        .pdf-skill-description {
          font-size: 10px;
          color: #666;
          line-height: 1.5;
          margin-bottom: 6px;
        }

        .pdf-skill-bars {
          display: flex;
          gap: 3px;
          align-items: center;
        }

        .pdf-skill-bar {
          width: 11px;
          height: 11px;
          border-radius: 2px;
          border: 1px solid #d1d5db;
          flex-shrink: 0;
        }

        .pdf-skill-bar-filled {
          background: #8b5cf6;
          border-color: #8b5cf6;
        }

        .pdf-skill-bar-empty {
          background: #ffffff;
        }

        /* ------------- 2페이지: 헤더 ------------- */

        .pdf-page-2-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 2px solid #25cc08;
        }

        .pdf-page-2-header-left {
          flex: 1;
        }

        .pdf-page-2-name {
          font-size: 22px;
          font-weight: bold;
          color: #25cc08;
          margin-bottom: 4px;
          line-height: 1.2;
        }

        .pdf-page-2-name-en {
          font-size: 13px;
          color: #666;
          font-weight: normal;
          margin-left: 6px;
        }

        .pdf-page-2-slogan {
          font-size: 12px;
          color: #666;
          margin-top: 4px;
        }

        /* ------------- 2페이지: Education, Awards, Certificates ------------- */

        .pdf-page-2-section-row {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
          align-items: flex-start;
        }

        .pdf-page-2-section-row:last-child {
          margin-bottom: 0;
        }

        .pdf-page-2-two-column-row {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
          padding-bottom: 18px;
          border-bottom: 1px solid #e5e7eb;
        }

        .pdf-page-2-two-column-row:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }

        .pdf-page-2-column-section {
          flex: 1;
          padding-top: 18px;
          border-top: 1px solid #e5e7eb;
        }

        .pdf-page-2-column-section-title {
          font-size: 16px;
          font-weight: bold;
          color: #25cc08;
          text-transform: capitalize;
          line-height: 1.2;
          margin-bottom: 12px;
        }

        .pdf-page-2-section-title-left {
          width: 90px;
          flex-shrink: 0;
          font-size: 16px;
          font-weight: bold;
          color: #25cc08;
          text-transform: capitalize;
          line-height: 1.2;
        }

        .pdf-page-2-section-content-right {
          flex: 1;
        }

        .pdf-page-2-vertical-section {
          flex-direction: column;
        }

        .pdf-page-2-section-title-top {
          font-size: 16px;
          font-weight: bold;
          color: #25cc08;
          text-transform: capitalize;
          line-height: 1.2;
          margin-bottom: 12px;
        }

        .pdf-page-2-section-content-below {
          width: 100%;
        }

        .pdf-education-item {
          margin-bottom: 16px;
        }

        .pdf-education-item:last-child {
          margin-bottom: 0;
        }

        .pdf-education-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 4px;
        }

        .pdf-education-org {
          font-size: 12px;
          font-weight: bold;
          color: #333;
          line-height: 1.4;
        }

        .pdf-education-period {
          font-size: 10px;
          color: #666;
          flex-shrink: 0;
          margin-left: 8px;
        }

        .pdf-education-title {
          font-size: 11px;
          color: #666;
          margin-bottom: 4px;
          line-height: 1.4;
        }

        .pdf-education-desc {
          font-size: 10px;
          color: #333;
          line-height: 1.5;
          margin-bottom: 6px;
        }

        .pdf-education-details {
          list-style: none;
          padding-left: 0;
          margin: 0;
        }

        .pdf-education-details li {
          font-size: 10px;
          color: #666;
          line-height: 1.5;
          margin-bottom: 2px;
          padding-left: 10px;
          position: relative;
        }

        .pdf-education-details li:last-child {
          margin-bottom: 0;
        }

        .pdf-education-details li::before {
          content: "•";
          position: absolute;
          left: 0;
          color: #25cc08;
        }

        /* ------------- 3페이지: Activities ------------- */

        .pdf-activity-item {
          margin-bottom: 16px;
          display: flex;
          gap: 12px;
        }

        .pdf-activity-item:last-child {
          margin-bottom: 0;
        }

        .pdf-activity-period {
          font-size: 10px;
          color: #666;
          width: 80px;
          flex-shrink: 0;
        }

        .pdf-activity-content {
          flex: 1;
        }

        .pdf-activity-org {
          font-size: 11px;
          font-weight: bold;
          color: #333;
          margin-bottom: 2px;
        }

        .pdf-activity-title {
          font-size: 10px;
          color: #666;
          margin-bottom: 4px;
        }

        .pdf-activity-desc {
          font-size: 10px;
          color: #333;
          line-height: 1.5;
          margin-bottom: 6px;
        }

        .pdf-activity-details {
          list-style: none;
          padding-left: 0;
          margin: 0;
        }

        .pdf-activity-details li {
          font-size: 10px;
          color: #666;
          line-height: 1.4;
          margin-bottom: 3px;
          padding-left: 10px;
          position: relative;
        }

        .pdf-activity-details li::before {
          content: "•";
          position: absolute;
          left: 0;
          color: #25cc08;
        }

        /* ------------- 2페이지: Awards & Certificates ------------- */

        .pdf-award-item,
        .pdf-cert-item {
          margin-bottom: 14px;
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .pdf-award-item:last-child,
        .pdf-cert-item:last-child {
          margin-bottom: 0;
        }

        .pdf-award-date,
        .pdf-cert-date {
          font-size: 10px;
          color: #666;
          width: 50px;
          flex-shrink: 0;
          line-height: 1.4;
        }

        .pdf-award-content,
        .pdf-cert-content {
          flex: 1;
        }

        .pdf-award-name,
        .pdf-cert-name {
          font-size: 11px;
          font-weight: bold;
          color: #333;
          margin-bottom: 2px;
          line-height: 1.4;
        }

        .pdf-award-issuer,
        .pdf-cert-issuer {
          font-size: 10px;
          color: #666;
          margin-bottom: 3px;
          line-height: 1.4;
        }

        .pdf-award-desc,
        .pdf-cert-desc {
          font-size: 10px;
          color: #666;
          line-height: 1.5;
        }

        /* ------------- 3페이지: Project Summary ------------- */

        .pdf-projects-section {
          display: flex;
          gap: 16px;
          margin-top: 20px;
          page-break-inside: avoid;
        }

        .pdf-timeline-wrapper {
          width: 60px;
          flex-shrink: 0;
          position: relative;
        }

        .pdf-timeline-line {
          position: absolute;
          left: 20px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #25cc08;
        }

        .pdf-timeline-year {
          position: relative;
          font-size: 13px;
          font-weight: bold;
          color: #25cc08;
          margin-bottom: 24px;
          padding-left: 32px;
        }

        .pdf-timeline-year::before {
          content: '';
          position: absolute;
          left: 13px;
          top: 50%;
          transform: translateY(-50%);
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #25cc08;
          border: 3px solid #ffffff;
          box-shadow: 0 0 0 2px #25cc08;
        }

        .pdf-projects-list {
          flex: 1;
        }

        .pdf-project-card {
          background: #f5f5f5;
          padding: 10px;
          border-radius: 4px;
          border: 1px solid #e5e7eb;
          margin-bottom: 8px;
        }

        .pdf-project-card:last-child {
          margin-bottom: 0;
        }

        .pdf-project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 4px;
        }

        .pdf-project-name {
          font-size: 12px;
          font-weight: bold;
          color: #333;
        }

        .pdf-project-pages {
          font-size: 10px;
          font-weight: normal;
          color: #666;
          margin-left: 4px;
        }

        .pdf-project-period {
          font-size: 10px;
          color: #666;
          text-align: right;
        }

        .pdf-project-summary {
          font-size: 10px;
          color: #333;
          line-height: 1.5;
          margin-bottom: 6px;
        }

        .pdf-project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
        }

        .pdf-project-tag {
          font-size: 10px;
          color: #666;
          background: #ffffff;
          padding: 2px 6px;
          border-radius: 3px;
          border: 1px solid #e5e7eb;
        }

        /* ------------- 4페이지: ToGather 상세 ------------- */

        .pdf-page-4-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 18px;
          padding-bottom: 10px;
          border-bottom: 2px solid #25cc08;
        }

        .pdf-page-4-header-left {
          font-size: 11px;
          color: #666;
          flex-shrink: 0;
        }

        .pdf-page-4-header-center {
          flex: 1;
          text-align: center;
          margin: 0 16px;
        }

        .pdf-page-4-project-name {
          font-size: 22px;
          font-weight: bold;
          color: #25cc08;
          margin-bottom: 4px;
        }

        .pdf-page-4-project-subtitle {
          font-size: 12px;
          color: #666;
        }

        .pdf-page-4-thumbnail {
          width: 180px;
          height: 100px;
          background: #f5f5f5;
          border-radius: 4px;
          border: 1px solid #e5e7eb;
          overflow: hidden;
          flex-shrink: 0;
        }

        .pdf-page-4-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* 프로젝트 두 번째 페이지 이후 헤더 */
        .pdf-page-4-header-simple {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
          padding-bottom: 10px;
          border-bottom: 2px solid #25cc08;
        }

        .pdf-page-4-header-simple-left {
          flex-shrink: 0;
        }

        .pdf-page-4-name {
          font-size: 20px;
          font-weight: bold;
          color: #25cc08;
          line-height: 1.2;
        }

        .pdf-page-4-name-en {
          font-size: 14px;
          color: #666;
          font-weight: normal;
          margin-left: 4px;
        }

        .pdf-page-4-header-simple-right {
          flex-shrink: 0;
        }

        .pdf-page-4-project-name-only {
          font-size: 20px;
          font-weight: bold;
          color: #25cc08;
        }

        .pdf-page-4-info-box {
          background: #f5f5f5;
          padding: 10px 12px;
          border-radius: 4px;
          border: 1px solid #e5e7eb;
          margin-bottom: 16px;
        }

        .pdf-page-4-info-row {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          color: #333;
          margin-bottom: 6px;
          padding-bottom: 6px;
          border-bottom: 1px solid #e5e7eb;
          gap: 8px;
        }

        .pdf-page-4-info-row:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }

        .pdf-page-4-info-label {
          font-weight: bold;
          color: #25cc08;
          margin-right: 4px;
        }

        .pdf-page-4-info-value {
          flex: 1;
          color: #333;
        }

        .pdf-page-4-info-link {
          color: #25cc08;
          text-decoration: none;
          word-break: break-all;
        }

        .pdf-page-4-role-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }

        .pdf-page-4-role-box,
        .pdf-page-4-features-box {
          background: #f5f5f5;
          padding: 10px 12px;
          border-radius: 4px;
          border: 1px solid #e5e7eb;
        }

        .pdf-page-4-role-title,
        .pdf-page-4-features-title {
          font-size: 13px;
          font-weight: bold;
          color: #25cc08;
          margin-bottom: 8px;
        }

        .pdf-page-4-role-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .pdf-page-4-role-list li {
          font-size: 10px;
          color: #333;
          line-height: 1.6;
          margin-bottom: 5px;
          padding-left: 10px;
          position: relative;
        }

        .pdf-page-4-role-list li::before {
          content: "•";
          position: absolute;
          left: 0;
          color: #25cc08;
        }

        .pdf-page-4-features-text {
          font-size: 10px;
          color: #333;
          line-height: 1.7;
        }

        .pdf-page-4-features-text p {
          margin-bottom: 6px;
        }

        .pdf-page-4-features-text p:last-child {
          margin-bottom: 0;
        }

        .pdf-page-4-tech-section {
          margin-bottom: 16px;
        }

        .pdf-page-4-tech-title {
          font-size: 15px;
          font-weight: bold;
          color: #25cc08;
          margin-bottom: 8px;
        }

        .pdf-page-4-tech-category {
          margin-bottom: 6px;
        }

        .pdf-page-4-tech-category-name {
          font-size: 11px;
          font-weight: bold;
          color: #333;
          margin-bottom: 3px;
        }

        .pdf-page-4-tech-category-items {
          font-size: 10px;
          color: #666;
          line-height: 1.5;
        }

        .pdf-page-4-preview-section {
          margin-bottom: 10px;
        }

        .pdf-page-4-preview-title {
          font-size: 15px;
          font-weight: bold;
          color: #25cc08;
          margin-bottom: 8px;
        }

        .pdf-page-4-preview-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin-bottom: 8px;
        }

        .pdf-page-4-preview-grid-with-arrows {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          gap: 8px;
          align-items: center;
          margin-bottom: 8px;
        }

        .pdf-page-4-preview-item {
          text-align: center;
        }

        .pdf-page-4-preview-arrow {
          font-size: 24px;
          color: #25cc08;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        }

        .pdf-page-4-preview-image {
          width: 100%;
          height: 100px;
          object-fit: cover;
          border-radius: 4px;
          border: 1px solid #e5e7eb;
          margin-bottom: 4px;
        }

        .pdf-page-4-preview-caption {
          font-size: 10px;
          color: #666;
          line-height: 1.4;
        }

        .pdf-page-4-preview-grid-2 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }

        .pdf-page-4-footer-message {
          text-align: center;
          font-size: 10px;
          color: #666;
          font-style: italic;
          margin-top: 12px;
          padding-top: 10px;
          border-top: 1px solid #e5e7eb;
          page-break-inside: avoid;
        }

        .pdf-page-4-section-title {
          font-size: 15px;
          font-weight: bold;
          color: #25cc08;
          margin-bottom: 8px;
        }

        .pdf-page-4-achievements-section {
          margin-bottom: 16px;
          /* 섹션 전체는 page-break-inside: avoid를 사용하지 않음 - 내용이 넘치면 자연스럽게 다음 페이지로 */
        }

        .pdf-page-4-achievements-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .pdf-page-4-achievement-item {
          font-size: 10px;
          color: #333;
          line-height: 1.6;
          margin-bottom: 6px;
          padding-left: 12px;
          position: relative;
        }

        .pdf-page-4-achievement-item::before {
          content: "•";
          position: absolute;
          left: 0;
          color: #25cc08;
          font-weight: bold;
        }

        .pdf-page-4-achievement-item:last-child {
          margin-bottom: 0;
        }

        .pdf-page-4-troubleshooting-section {
          margin-bottom: 16px;
          /* 섹션 전체는 page-break-inside: avoid를 사용하지 않음 - 내용이 넘치면 자연스럽게 다음 페이지로 */
        }

        .pdf-page-4-troubleshooting-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .pdf-page-4-troubleshooting-item {
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 4px;
          padding: 10px;
          page-break-inside: avoid;
          /* 각 항목만 잘리지 않도록 보호 */
        }

        .pdf-page-4-troubleshooting-title {
          font-size: 11px;
          font-weight: bold;
          color: #333;
          margin-bottom: 6px;
        }

        .pdf-page-4-troubleshooting-content {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .pdf-page-4-troubleshooting-problem,
        .pdf-page-4-troubleshooting-solution {
          font-size: 10px;
          color: #333;
          line-height: 1.5;
        }

        .pdf-page-4-troubleshooting-label {
          font-weight: bold;
          margin-right: 4px;
        }

        .pdf-page-4-troubleshooting-problem .pdf-page-4-troubleshooting-label {
          color: #dc2626;
        }

        .pdf-page-4-troubleshooting-solution .pdf-page-4-troubleshooting-label {
          color: #25cc08;
        }

        .pdf-page-4-troubleshooting-images {
          display: flex;
          gap: 8px;
          margin-top: 8px;
          flex-wrap: wrap;
        }

        .pdf-page-4-troubleshooting-image {
          max-width: 150px;
          max-height: 100px;
          object-fit: contain;
          border-radius: 4px;
          border: 1px solid #e5e7eb;
        }
      `}</style>

      <div className="pdf-document">
        {/* ---------------- 1페이지 ---------------- */}
        <div className="pdf-page-container page-1">
          {/* 헤더 */}
          <div className="pdf-header">
            <div className="pdf-header-left">
              <div className="pdf-name">
                기우경 | Frontend Developer
              </div>
              <div className="pdf-slogan">{personalInfo.title}</div>
            </div>
            <div className="pdf-contact-box">
              <div className="pdf-contact-title">CONTACT</div>
              <div className="pdf-contact-item">
                <Phone className="pdf-contact-icon" size={14} />
                <span>{personalInfo.profile.phone}</span>
              </div>
              <div className="pdf-contact-item">
                <Mail className="pdf-contact-icon" size={14} />
                <span>{personalInfo.profile.email}</span>
              </div>
              <div className="pdf-contact-item">
                <Github className="pdf-contact-icon" size={14} />
                <a
                  href={personalInfo.profile.github}
                  style={{ color: "#333", textDecoration: "none" }}
                >
                  {personalInfo.profile.github.replace("https://", "")}
                </a>
              </div>
            </div>
          </div>

          {/* 프로필 + Q&A */}
          <div className="pdf-profile-section">
            <div className="pdf-profile-image-wrapper">
              <img
                src="/images/profile.png"
                alt={personalInfo.name}
                className="pdf-profile-image"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
            <div className="pdf-qa-section">
              {qaContent.map((qa, index) => (
                <div key={index} className="pdf-qa-item">
                  <div className="pdf-qa-question">{qa.question}</div>
                  <div className="pdf-qa-answer">{qa.answer}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Summary */}
          <div className="pdf-projects-section">
            {/* 타임라인 */}
            <div className="pdf-timeline-wrapper">
              <div className="pdf-timeline-line" />
              <div className="pdf-timeline-year">2025</div>
            </div>
            {/* 프로젝트 리스트 */}
            <div className="pdf-projects-list">
              <div className="pdf-section-title" style={{ color: "#25cc08" }}>
                Project Summary
              </div>
              {projectSummary.map((project, index) => (
                <div key={index} className="pdf-project-card">
                  <div className="pdf-project-header">
                    <div className="pdf-project-name">
                      {project.name}
                      {project.pages && (
                        <span className="pdf-project-pages"> {project.pages}</span>
                      )}
                    </div>
                    <div className="pdf-project-period">
                      {project.period}
                    </div>
                  </div>
                  <div className="pdf-project-summary">{project.summary}</div>
                  <div className="pdf-project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="pdf-project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ---------------- 2페이지: SKILLS ---------------- */}
        <div className="pdf-page-container page-2">
          {/* 헤더 */}
          <div className="pdf-page-2-header">
            <div className="pdf-page-2-header-left">
              <div className="pdf-page-2-name">
                기우경 | Frontend Developer
              </div>
            </div>
          </div>

          {/* SKILLS */}
          <div className="pdf-skills-section">
            <div className="pdf-skills-header">
              <div className="pdf-skills-title">SKILLS</div>
            </div>
            <div className="pdf-skills-grid">
              {/* 왼쪽 컬럼 */}
              <div className="pdf-skills-column">
                {leftColumnSkills.map((skill, index) => {
                  const level = getSkillLevel(skill.level);
                  return (
                    <div key={index} className="pdf-skill-card">
                      <div className="pdf-skill-name">{skill.name}</div>
                      <div className="pdf-skill-description">
                        {skill.description}
                      </div>
                      <div className="pdf-skill-bars">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`pdf-skill-bar ${i < level
                              ? "pdf-skill-bar-filled"
                              : "pdf-skill-bar-empty"
                              }`}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* 오른쪽 컬럼 */}
              <div className="pdf-skills-column">
                {rightColumnSkills.map((skill, index) => {
                  const level = getSkillLevel(skill.level);
                  return (
                    <div key={index} className="pdf-skill-card">
                      <div className="pdf-skill-name">{skill.name}</div>
                      <div className="pdf-skill-description">
                        {skill.description}
                      </div>
                      <div className="pdf-skill-bars">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`pdf-skill-bar ${i < level
                              ? "pdf-skill-bar-filled"
                              : "pdf-skill-bar-empty"
                              }`}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- 3페이지: Education, Awards, Certificates, Activities ---------------- */}
        <div className="pdf-page-container page-3">
          {/* 헤더 */}
          <div className="pdf-page-2-header">
            <div className="pdf-page-2-header-left">
              <div className="pdf-page-2-name">
                기우경 | Frontend Developer
              </div>
            </div>
          </div>

          {/* Education, Awards, Certificates (각 섹션별로 왼쪽 제목 + 오른쪽 내용) */}
          {/* Education 섹션 */}
          <div className="pdf-page-2-section-row">
            <div className="pdf-page-2-section-title-left">Education</div>
            <div className="pdf-page-2-section-content-right">
              {career
                .filter((item) => item.type === "education")
                .map((edu) => (
                  <div key={edu.id} className="pdf-education-item">
                    <div className="pdf-education-header">
                      <div className="pdf-education-org">{edu.org}</div>
                      <div className="pdf-education-period">
                        {edu.period}
                      </div>
                    </div>
                    <div className="pdf-education-title">{edu.title}</div>
                    <div className="pdf-education-desc">
                      {edu.description}
                    </div>
                    {edu.details && edu.details.length > 0 && (
                      <ul className="pdf-education-details">
                        {edu.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
            </div>
          </div>

          {/* Awards & Certificates 섹션 (한 줄에 두 열) */}
          <div className="pdf-page-2-two-column-row">
            {/* Awards */}
            <div className="pdf-page-2-column-section">
              <div className="pdf-page-2-column-section-title">Awards</div>
              {certifications
                .filter((cert) => cert.type === "award")
                .map((award) => (
                  <div key={award.id} className="pdf-award-item">
                    <div className="pdf-award-date">{award.date}</div>
                    <div className="pdf-award-content">
                      <div className="pdf-award-name">{award.name}</div>
                      <div className="pdf-award-issuer">
                        {award.issuer}
                      </div>
                      <div className="pdf-award-desc">
                        {award.description}
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Certificates */}
            <div className="pdf-page-2-column-section">
              <div className="pdf-page-2-column-section-title">Certificates</div>
              {certifications
                .filter((cert) => cert.type === "certificate")
                .map((cert) => (
                  <div key={cert.id} className="pdf-cert-item">
                    <div className="pdf-cert-date">{cert.date}</div>
                    <div className="pdf-cert-content">
                      <div className="pdf-cert-name">{cert.name}</div>
                      <div className="pdf-cert-issuer">
                        {cert.issuer}
                      </div>
                      <div className="pdf-cert-desc">
                        {cert.description}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Activities 섹션 */}
          <div className="pdf-page-2-section-row pdf-page-2-vertical-section">
            <div className="pdf-page-2-section-title-top">Activities</div>
            <div className="pdf-page-2-section-content-below">
              {career
                .filter((item) => item.type === "activity")
                .map((activity) => (
                  <div key={activity.id} className="pdf-activity-item">
                    <div className="pdf-activity-period">
                      {activity.period}
                    </div>
                    <div className="pdf-activity-content">
                      <div className="pdf-activity-org">
                        {activity.org}
                      </div>
                      <div className="pdf-activity-title">
                        {activity.title}
                      </div>
                      <div className="pdf-activity-desc">
                        {activity.description}
                      </div>
                      {activity.details && (
                        <ul className="pdf-activity-details">
                          {activity.details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* ---------------- 4페이지: ToGather 프로젝트 상세 (첫 페이지) ---------------- */}
        <div className="pdf-page-container page-4">
          {/* 헤더 (첫 페이지) */}
          <div className="pdf-page-4-header">
            <div className="pdf-page-4-header-left">
              기우경 | Frontend Developer
            </div>
            <div className="pdf-page-4-header-center">
              <div className="pdf-page-4-project-name">ToGather</div>
              <div className="pdf-page-4-project-subtitle">
                커플 전용 공유 다이어리 & 일정 관리 모바일 앱
              </div>
            </div>
            <div className="pdf-page-4-thumbnail">
              <img
                src="/images/togather/Logo.png"
                alt="ToGather Logo"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          </div>

          {/* 프로젝트 기본 정보 */}
          <div className="pdf-page-4-info-box">
            <div className="pdf-page-4-info-row">
              <div>
                <span className="pdf-page-4-info-label">기간:</span>
                <span className="pdf-page-4-info-value">
                  2025.10 - 2025.11
                </span>
              </div>
              <div>
                <span className="pdf-page-4-info-label">팀 규모:</span>
                <span className="pdf-page-4-info-value">
                  6명 (Frontend 1, Backend, AI/ML, DevOps)
                </span>
              </div>
            </div>
            <div className="pdf-page-4-info-row">
              <div>
                <span className="pdf-page-4-info-label">역할:</span>
                <span className="pdf-page-4-info-value">
                  프론트엔드 개발 (모바일 앱 전체 구조 설계, Expo Router 기반
                  탭 구조 설계, 핵심 화면 90% 이상 구현)
                </span>
              </div>
            </div>
            <div className="pdf-page-4-info-row">
              <div>
                <span className="pdf-page-4-info-label">GitHub:</span>
                <a
                  href="https://github.com/SSAFY-ToGather/ToGather"
                  className="pdf-page-4-info-link pdf-page-4-info-value"
                >
                  https://github.com/SSAFY-ToGather/ToGather
                </a>
              </div>
            </div>
          </div>

          {/* 역할 & 특징 */}
          <div className="pdf-page-4-role-features">
            <div className="pdf-page-4-role-box">
              <div className="pdf-page-4-role-title">역할</div>
              <ul className="pdf-page-4-role-list">
                <li>
                  Expo Router 기반 탭 구조(Home / Diary / Feed / Plan /
                  Settings) 설계 및 네비게이션 플로우 구현
                </li>
                <li>
                  다이어리, 피드, 일정, 펫 등 핵심 화면 90% 이상 컴포넌트
                  설계 및 개발
                </li>
                <li>
                  Zustand + TanStack Query로 도메인별 상태 관리 구조 설계 및
                  적용
                </li>
              </ul>
            </div>
            <div className="pdf-page-4-features-box">
              <div className="pdf-page-4-features-title">특징</div>
              <div className="pdf-page-4-features-text">
                <p>
                  커플이 함께 쓰는 공유 다이어리 앱으로, 날짜 기반 기록·타임라인·공유
                  일정·펫 시스템을 하나의 흐름으로 묶은 UX 설계
                </p>
                <p>
                  같은 캘린더 컴포넌트를 다이어리와 일정 탭에서 각각 다른 맥락으로
                  활용해, '기록 중심'과 '계획 중심' 화면을 분리해 구현
                </p>
                <p>
                  펫/아이템 시스템을 통해 기록이 누적될수록 캐릭터가 성장하는 경험을
                  제공하여 사용 동기를 설계
                </p>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="pdf-page-4-preview-section">
            <div className="pdf-page-4-preview-title">Preview</div>
            <div className="pdf-page-4-preview-grid">
              <div className="pdf-page-4-preview-item">
                <img
                  src="/images/togather/home_togather.jpg"
                  alt="Home 화면"
                  className="pdf-page-4-preview-image"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <div className="pdf-page-4-preview-caption">
                  Home – 오늘의 다이어리와 일정, 펫 상태를 한 화면에서 확인
                </div>
              </div>
              <div className="pdf-page-4-preview-item">
                <img
                  src="/images/togather/Diary_togather.jpg"
                  alt="Diary 화면"
                  className="pdf-page-4-preview-image"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <div className="pdf-page-4-preview-caption">
                  Diary – 날짜별로 사진·텍스트·위치를 섹션 단위로 기록
                </div>
              </div>
              <div className="pdf-page-4-preview-item">
                <img
                  src="/images/togather/plan_togather.jpg"
                  alt="Plan 화면"
                  className="pdf-page-4-preview-image"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <div className="pdf-page-4-preview-caption">
                  Plan – 공유 일정 관리를 위한 커플 캘린더
                </div>
              </div>
            </div>

            <div className="pdf-page-4-preview-grid-2">
              <div className="pdf-page-4-preview-item">
                <img
                  src="/images/togather/Feed_togather.jpg"
                  alt="Feed 화면"
                  className="pdf-page-4-preview-image"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <div className="pdf-page-4-preview-caption">
                  Feed – 다이어리 기록을 카드 타임라인 형태로 모아보는 피드
                </div>
              </div>
              <div className="pdf-page-4-preview-item">
                <img
                  src="/images/togather/Pet1_togather.jpg"
                  alt="Pet 화면"
                  className="pdf-page-4-preview-image"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <div className="pdf-page-4-preview-caption">
                  Pet – 기록에 따라 성장하는 커플 펫
                </div>
              </div>
              <div className="pdf-page-4-preview-item">
                <img
                  src="/images/togather/Shop_togather.jpg"
                  alt="Shop 화면"
                  className="pdf-page-4-preview-image"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <div className="pdf-page-4-preview-caption">
                  Shop – 펫에게 장착할 아이템을 구매하는 상점 화면
                </div>
              </div>
            </div>
          </div>

          {/* 개발 환경 */}
          <div className="pdf-page-4-tech-section">
            <div className="pdf-page-4-tech-title">개발 환경</div>
            <div className="pdf-page-4-tech-category">
              <div className="pdf-page-4-tech-category-name">Mobile:</div>
              <div className="pdf-page-4-tech-category-items">
                React Native, Expo, TypeScript, Expo Router
              </div>
            </div>
            <div className="pdf-page-4-tech-category">
              <div className="pdf-page-4-tech-category-name">
                State & Data:
              </div>
              <div className="pdf-page-4-tech-category-items">
                Zustand, TanStack Query, Axios, JWT
              </div>
            </div>
            <div className="pdf-page-4-tech-category">
              <div className="pdf-page-4-tech-category-name">UI & UX:</div>
              <div className="pdf-page-4-tech-category-items">
                React Native Image, FlatList, SafeArea, Animated 등으로
                리스트/이미지/전환 애니메이션 최적화
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- 4페이지: ToGather 프로젝트 상세 (두 번째 페이지) ---------------- */}
        <div className="pdf-page-container page-5">
          {/* 헤더 (두 번째 페이지) */}
          <div className="pdf-page-4-header-simple">
            <div className="pdf-page-4-header-simple-left">
              <div className="pdf-page-4-name">
                기우경 | Frontend Developer
              </div>
            </div>
            <div className="pdf-page-4-header-simple-right">
              <div className="pdf-page-4-project-name-only">ToGather</div>
            </div>
          </div>

          {/* 주요 성과 */}
          {togatherProject &&
            togatherProject.achievements &&
            togatherProject.achievements.length > 0 && (
              <div className="pdf-page-4-achievements-section">
                <div className="pdf-page-4-section-title">주요 성과</div>
                <ul className="pdf-page-4-achievements-list">
                  {togatherProject.achievements.map((achievement, idx) => (
                    <li key={idx} className="pdf-page-4-achievement-item">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}

          {/* 트러블슈팅 */}
          {togatherProject &&
            togatherProject.challenges &&
            togatherProject.challenges.length > 0 && (
              <div className="pdf-page-4-troubleshooting-section">
                <div className="pdf-page-4-section-title">트러블슈팅</div>
                <div className="pdf-page-4-troubleshooting-list">
                  {togatherProject.challenges.map((challenge, index) => {
                    // 트러블슈팅 파싱 함수
                    const parseTroubleshooting = (text) => {
                      const colonIndex = text.indexOf(":");
                      if (colonIndex === -1) {
                        return { title: "", problem: text, solution: "" };
                      }

                      const title = text.substring(0, colonIndex).trim();
                      const rest = text.substring(colonIndex + 1).trim();

                      const occurredPattern = /발생했습니다\.?/;
                      const occurredMatch = rest.match(occurredPattern);

                      if (occurredMatch) {
                        const occurredIndex =
                          occurredMatch.index + occurredMatch[0].length;
                        const problem = rest
                          .substring(0, occurredIndex)
                          .trim();
                        let solution = rest.substring(occurredIndex).trim();
                        solution = solution.replace(/^[\s.]+/, "").trim();
                        return { title, problem, solution };
                      }

                      const lastDotIndex = rest.lastIndexOf(".");
                      if (lastDotIndex > 0 && lastDotIndex < rest.length - 1) {
                        const problem = rest
                          .substring(0, lastDotIndex + 1)
                          .trim();
                        let solution = rest.substring(lastDotIndex + 1).trim();
                        if (solution.endsWith(".")) {
                          solution = solution.slice(0, -1).trim();
                        }
                        return { title, problem, solution };
                      }

                      return { title, problem: rest, solution: "" };
                    };

                    const parsed = parseTroubleshooting(challenge);

                    // ToGather 트러블슈팅 이미지 (projects.js에서 가져옴)
                    const troubleshootingImages = togatherProject?.troubleshootingImages || [];

                    return (
                      <div
                        key={index}
                        className="pdf-page-4-troubleshooting-item"
                      >
                        {parsed.title && (
                          <div className="pdf-page-4-troubleshooting-title">
                            {parsed.title}
                          </div>
                        )}
                        <div className="pdf-page-4-troubleshooting-content">
                          <div className="pdf-page-4-troubleshooting-problem">
                            <span className="pdf-page-4-troubleshooting-label">
                              문제:
                            </span>
                            <span>{parsed.problem}</span>
                          </div>
                          {parsed.solution && (
                            <div className="pdf-page-4-troubleshooting-solution">
                              <span className="pdf-page-4-troubleshooting-label">
                                해결:
                              </span>
                              <span>{parsed.solution}</span>
                            </div>
                          )}
                        </div>
                        {troubleshootingImages[index] && troubleshootingImages[index].length > 0 && (
                          <div className="pdf-page-4-troubleshooting-images">
                            {troubleshootingImages[index].map((img, imgIdx) => (
                              <img
                                key={imgIdx}
                                src={img}
                                alt={`ToGather 트러블슈팅 ${index + 1}-${imgIdx + 1}`}
                                className="pdf-page-4-troubleshooting-image"
                                onError={(e) => {
                                  e.target.style.display = "none";
                                }}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}


        </div>

        {/* ---------------- 6페이지: FloodGuard 프로젝트 상세 (첫 페이지) ---------------- */}
        <div className="pdf-page-container page-6">
          {/* 헤더 (첫 페이지) */}
          <div className="pdf-page-4-header">
            <div className="pdf-page-4-header-left">
              기우경 | Frontend Developer
            </div>
            <div className="pdf-page-4-header-center">
              <div className="pdf-page-4-project-name">FloodGuard</div>
              <div className="pdf-page-4-project-subtitle">
                AIoT 기반 실시간 침수 감지·예측·자동 제어 대시보드 웹 서비스
              </div>
            </div>
            <div className="pdf-page-4-thumbnail">
              <img
                src="/images/floodguard/floodguard.png"
                alt="FloodGuard Logo"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          </div>

          {/* 프로젝트 기본 정보 */}
          <div className="pdf-page-4-info-box">
            <div className="pdf-page-4-info-row">
              <div>
                <span className="pdf-page-4-info-label">기간:</span>
                <span className="pdf-page-4-info-value">
                  {floodGuardProject?.period || "2025.07 - 2025.08"}
                </span>
              </div>
              <div>
                <span className="pdf-page-4-info-label">팀 규모:</span>
                <span className="pdf-page-4-info-value">
                  {floodGuardProject?.teamSize || "6명 (Frontend 1, Backend 1, AI/IoT 4)"}
                </span>
              </div>
            </div>
            <div className="pdf-page-4-info-row">
              <div>
                <span className="pdf-page-4-info-label">역할:</span>
                <span className="pdf-page-4-info-value">
                  {floodGuardProject?.role || "프론트엔드 개발 (React 대시보드 구현, 실시간 데이터 시각화, UI/UX 설계)"}
                </span>
              </div>
            </div>
            <div className="pdf-page-4-info-row">
              <div>
                <span className="pdf-page-4-info-label">GitHub:</span>
                <a
                  href={floodGuardProject?.github || "https://github.com/kiwookyung/floodguard"}
                  className="pdf-page-4-info-link pdf-page-4-info-value"
                >
                  {floodGuardProject?.github || "https://github.com/kiwookyung/floodguard"}
                </a>
              </div>
            </div>
          </div>

          {/* 역할 & 특징 */}
          <div className="pdf-page-4-role-features">
            <div className="pdf-page-4-role-box">
              <div className="pdf-page-4-role-title">역할</div>
              <ul className="pdf-page-4-role-list">
                <li>
                  React와 MUI를 활용한 실시간 모니터링 대시보드 구현 및 6명 팀에서 프론트엔드 단독 담당
                </li>
                <li>
                  WebSocket을 통한 실시간 데이터 통신 및 자동 재연결 로직 구현
                </li>
                <li>
                  Leaflet 지도를 활용한 지리적 데이터 시각화 및 인터랙티브 UI 구현
                </li>
              </ul>
            </div>
            <div className="pdf-page-4-features-box">
              <div className="pdf-page-4-features-title">특징</div>
              <div className="pdf-page-4-features-text">
                <p>
                  AIoT 기반 침수 예방 시스템의 웹 대시보드로, 실시간 센서 데이터 모니터링과 자동 제어 기능 제공
                </p>
                <p>
                  WebSocket을 통한 실시간 데이터 스트리밍 및 Leaflet 지도를 활용한 센서 위치 시각화
                </p>
                <p>
                  Web Worker와 requestAnimationFrame을 활용한 렌더링 최적화로 초당 30-50개의 센서 데이터도 부드럽게 처리
                </p>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="pdf-page-4-preview-section">
            <div className="pdf-page-4-preview-title">Preview</div>
            <div className="pdf-page-4-preview-grid pdf-page-4-preview-grid-with-arrows">
              <div className="pdf-page-4-preview-item">
                <img
                  src="/images/floodguard/image_13.png"
                  alt="FloodGuard 센서 감지"
                  className="pdf-page-4-preview-image"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <div className="pdf-page-4-preview-caption">
                  물이 차오를 때 센서가 침수를 감지하는 과정
                </div>
              </div>
              <div className="pdf-page-4-preview-arrow">→</div>
              <div className="pdf-page-4-preview-item">
                <img
                  src="/images/floodguard/image_14.png"
                  alt="FloodGuard 차수막 작동"
                  className="pdf-page-4-preview-image"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <div className="pdf-page-4-preview-caption">
                  센서 신호를 받아 차수막이 자동으로 닫히는 과정
                </div>
              </div>
              <div className="pdf-page-4-preview-arrow">→</div>
              <div className="pdf-page-4-preview-item">
                <img
                  src="/images/floodguard/image_15.png"
                  alt="FloodGuard 차수막 완료"
                  className="pdf-page-4-preview-image"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <div className="pdf-page-4-preview-caption">
                  차수막이 완전히 닫혀 침수를 방지한 최종 상태
                </div>
              </div>
            </div>
          </div>

          {/* 개발 환경 */}
          <div className="pdf-page-4-tech-section">
            <div className="pdf-page-4-tech-title">개발 환경</div>
            <div className="pdf-page-4-tech-category">
              <div className="pdf-page-4-tech-category-name">Frontend:</div>
              <div className="pdf-page-4-tech-category-items">
                React, Vite, MUI, Tailwind CSS
              </div>
            </div>
            <div className="pdf-page-4-tech-category">
              <div className="pdf-page-4-tech-category-name">
                State & Data:
              </div>
              <div className="pdf-page-4-tech-category-items">
                Zustand, Recharts, Leaflet, WebSocket, JWT
              </div>
            </div>
            <div className="pdf-page-4-tech-category">
              <div className="pdf-page-4-tech-category-name">Performance:</div>
              <div className="pdf-page-4-tech-category-items">
                Web Worker, requestAnimationFrame, React.memo를 통한 렌더링 최적화
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- 7페이지: FloodGuard 프로젝트 상세 (두 번째 페이지) ---------------- */}
        <div className="pdf-page-container page-7">
          {/* 헤더 (두 번째 페이지) */}
          <div className="pdf-page-4-header-simple">
            <div className="pdf-page-4-header-simple-left">
              <div className="pdf-page-4-name">
                기우경 | Frontend Developer
              </div>
            </div>
            <div className="pdf-page-4-header-simple-right">
              <div className="pdf-page-4-project-name-only">FloodGuard</div>
            </div>
          </div>

          {/* 주요 성과 */}
          {floodGuardProject &&
            floodGuardProject.achievements &&
            floodGuardProject.achievements.length > 0 && (
              <div className="pdf-page-4-achievements-section">
                <div className="pdf-page-4-section-title">주요 성과</div>
                <ul className="pdf-page-4-achievements-list">
                  {floodGuardProject.achievements.map((achievement, idx) => (
                    <li key={idx} className="pdf-page-4-achievement-item">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}

          {/* 트러블슈팅 */}
          {floodGuardProject &&
            floodGuardProject.challenges &&
            floodGuardProject.challenges.length > 0 && (
              <div className="pdf-page-4-troubleshooting-section">
                <div className="pdf-page-4-section-title">트러블슈팅</div>
                <div className="pdf-page-4-troubleshooting-list">
                  {floodGuardProject.challenges.map((challenge, index) => {
                    const parseTroubleshooting = (text) => {
                      const colonIndex = text.indexOf(":");
                      if (colonIndex === -1) {
                        return { title: "", problem: text, solution: "" };
                      }

                      const title = text.substring(0, colonIndex).trim();
                      const rest = text.substring(colonIndex + 1).trim();

                      const occurredPattern = /발생했습니다\.?/;
                      const occurredMatch = rest.match(occurredPattern);

                      if (occurredMatch) {
                        const occurredIndex =
                          occurredMatch.index + occurredMatch[0].length;
                        const problem = rest
                          .substring(0, occurredIndex)
                          .trim();
                        let solution = rest.substring(occurredIndex).trim();
                        solution = solution.replace(/^[\s.]+/, "").trim();
                        return { title, problem, solution };
                      }

                      const lastDotIndex = rest.lastIndexOf(".");
                      if (lastDotIndex > 0 && lastDotIndex < rest.length - 1) {
                        const problem = rest
                          .substring(0, lastDotIndex + 1)
                          .trim();
                        let solution = rest.substring(lastDotIndex + 1).trim();
                        if (solution.endsWith(".")) {
                          solution = solution.slice(0, -1).trim();
                        }
                        return { title, problem, solution };
                      }

                      return { title, problem: rest, solution: "" };
                    };

                    const parsed = parseTroubleshooting(challenge);

                    return (
                      <div
                        key={index}
                        className="pdf-page-4-troubleshooting-item"
                      >
                        {parsed.title && (
                          <div className="pdf-page-4-troubleshooting-title">
                            {parsed.title}
                          </div>
                        )}
                        <div className="pdf-page-4-troubleshooting-content">
                          <div className="pdf-page-4-troubleshooting-problem">
                            <span className="pdf-page-4-troubleshooting-label">
                              문제:
                            </span>
                            <span>{parsed.problem}</span>
                          </div>
                          {parsed.solution && (
                            <div className="pdf-page-4-troubleshooting-solution">
                              <span className="pdf-page-4-troubleshooting-label">
                                해결:
                              </span>
                              <span>{parsed.solution}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
        </div>

        {/* ---------------- 8페이지: OrakGarak 프로젝트 상세 (첫 페이지) ---------------- */}
        <div className="pdf-page-container page-8">
          {/* 헤더 (첫 페이지) */}
          <div className="pdf-page-4-header">
            <div className="pdf-page-4-header-left">
              기우경 | Frontend Developer
            </div>
            <div className="pdf-page-4-header-center">
              <div className="pdf-page-4-project-name">OrakGarak</div>
              <div className="pdf-page-4-project-subtitle">
                빅데이터 기반 음성 맞춤형 음악 추천 플랫폼
              </div>
            </div>
            <div className="pdf-page-4-thumbnail">
              <img
                src="/images/orakgarak/orakgarak.png"
                alt="OrakGarak Logo"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          </div>

          {/* 프로젝트 기본 정보 */}
          <div className="pdf-page-4-info-box">
            <div className="pdf-page-4-info-row">
              <div>
                <span className="pdf-page-4-info-label">기간:</span>
                <span className="pdf-page-4-info-value">
                  {orakGarakProject?.period || "2025.08 - 2025.09"}
                </span>
              </div>
              <div>
                <span className="pdf-page-4-info-label">팀 규모:</span>
                <span className="pdf-page-4-info-value">
                  {orakGarakProject?.teamSize || "6명 (Frontend 2, Backend 3, Data/AI 1, DevOps 1)"}
                </span>
              </div>
            </div>
            <div className="pdf-page-4-info-row">
              <div>
                <span className="pdf-page-4-info-label">역할:</span>
                <span className="pdf-page-4-info-value">
                  {orakGarakProject?.role || "프론트엔드 개발 (React/TypeScript 기반 UI 구현, 오디오 처리, 인터랙티브 UX 설계)"}
                </span>
              </div>
            </div>
            <div className="pdf-page-4-info-row">
              <div>
                <span className="pdf-page-4-info-label">GitHub:</span>
                <a
                  href={orakGarakProject?.github || "https://github.com/kiwookyung/orakgarak"}
                  className="pdf-page-4-info-link pdf-page-4-info-value"
                >
                  {orakGarakProject?.github || "https://github.com/kiwookyung/orakgarak"}
                </a>
              </div>
            </div>
          </div>

          {/* 역할 & 특징 */}
          <div className="pdf-page-4-role-features">
            <div className="pdf-page-4-role-box">
              <div className="pdf-page-4-role-title">역할</div>
              <ul className="pdf-page-4-role-list">
                <li>
                  React 18과 TypeScript를 활용한 타입 안전한 컴포넌트 아키텍처 설계
                </li>
                <li>
                  Web Audio API를 통한 실시간 음성 녹음 및 시각화 기능 구현
                </li>
                <li>
                  Framer Motion을 활용한 3D 캐러셀 및 인터랙티브 애니메이션 구현
                </li>
              </ul>
            </div>
            <div className="pdf-page-4-features-box">
              <div className="pdf-page-4-features-title">특징</div>
              <div className="pdf-page-4-features-text">
                <p>
                  음성 분석 기반 음악 추천 플랫폼으로, Web Audio API를 통한 실시간 오디오 처리와 Framer Motion을 활용한 인터랙티브 UI 제공
                </p>
                <p>
                  사용자 친화적인 음성 녹음 인터페이스와 3D 캐러셀을 통한 추천 결과 시각화
                </p>
                <p>
                  Zustand 도메인별 분리 및 TanStack Query를 통한 서버 상태 독립 관리로 복잡한 상태 관리 구조 개선
                </p>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="pdf-page-4-preview-section">
            <div className="pdf-page-4-preview-title">Preview</div>
            <div className="pdf-page-4-preview-grid">
              <div className="pdf-page-4-preview-item">
                <img
                  src="/images/orakgarak/recording.png"
                  alt="OrakGarak 음성 녹음"
                  className="pdf-page-4-preview-image"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <div className="pdf-page-4-preview-caption">
                  음성 녹음 – Web Audio API를 활용한 실시간 음성 녹음 및 시각화
                </div>
              </div>
              <div className="pdf-page-4-preview-item">
                <img
                  src="/images/orakgarak/recommend.png"
                  alt="OrakGarak 추천 결과"
                  className="pdf-page-4-preview-image"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <div className="pdf-page-4-preview-caption">
                  추천 결과 – 3D 캐러셀을 통한 음악 추천 결과 시각화
                </div>
              </div>
              <div className="pdf-page-4-preview-item">
                <img
                  src="/images/orakgarak/recommend_detail.png"
                  alt="OrakGarak 추천 상세"
                  className="pdf-page-4-preview-image"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <div className="pdf-page-4-preview-caption">
                  추천 상세 – Framer Motion을 활용한 인터랙티브 애니메이션
                </div>
              </div>
            </div>

            <div className="pdf-page-4-preview-grid-2">
              <div className="pdf-page-4-preview-item">
                <img
                  src="/images/orakgarak/Album.png"
                  alt="OrakGarak 앨범"
                  className="pdf-page-4-preview-image"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <div className="pdf-page-4-preview-caption">
                  앨범 – 사용자별 음악 앨범 관리
                </div>
              </div>
              <div className="pdf-page-4-preview-item">
                <img
                  src="/images/orakgarak/feed.png"
                  alt="OrakGarak 피드"
                  className="pdf-page-4-preview-image"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <div className="pdf-page-4-preview-caption">
                  피드 – 커뮤니티 피드 및 음악 공유
                </div>
              </div>
              <div className="pdf-page-4-preview-item">
                <img
                  src="/images/orakgarak/tracklist.png"
                  alt="OrakGarak 트랙리스트"
                  className="pdf-page-4-preview-image"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <div className="pdf-page-4-preview-caption">
                  트랙리스트 – 플레이리스트 및 재생 목록 관리
                </div>
              </div>
            </div>
          </div>

          {/* 개발 환경 */}
          <div className="pdf-page-4-tech-section">
            <div className="pdf-page-4-tech-title">개발 환경</div>
            <div className="pdf-page-4-tech-category">
              <div className="pdf-page-4-tech-category-name">Frontend:</div>
              <div className="pdf-page-4-tech-category-items">
                React 18, TypeScript, Vite, TailwindCSS, MUI
              </div>
            </div>
            <div className="pdf-page-4-tech-category">
              <div className="pdf-page-4-tech-category-name">
                State & Data:
              </div>
              <div className="pdf-page-4-tech-category-items">
                Zustand, TanStack Query, Axios, JWT
              </div>
            </div>
            <div className="pdf-page-4-tech-category">
              <div className="pdf-page-4-tech-category-name">UI & UX:</div>
              <div className="pdf-page-4-tech-category-items">
                Framer Motion, Web Audio API를 통한 실시간 오디오 처리 및 인터랙티브 애니메이션
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- 9페이지: OrakGarak 프로젝트 상세 (두 번째 페이지) ---------------- */}
        <div className="pdf-page-container page-9">
          {/* 헤더 (두 번째 페이지) */}
          <div className="pdf-page-4-header-simple">
            <div className="pdf-page-4-header-simple-left">
              <div className="pdf-page-4-name">
                기우경 | Frontend Developer
              </div>
            </div>
            <div className="pdf-page-4-header-simple-right">
              <div className="pdf-page-4-project-name-only">OrakGarak</div>
            </div>
          </div>

          {/* 주요 성과 */}
          {orakGarakProject &&
            orakGarakProject.achievements &&
            orakGarakProject.achievements.length > 0 && (
              <div className="pdf-page-4-achievements-section">
                <div className="pdf-page-4-section-title">주요 성과</div>
                <ul className="pdf-page-4-achievements-list">
                  {orakGarakProject.achievements.map((achievement, idx) => (
                    <li key={idx} className="pdf-page-4-achievement-item">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}

          {/* 트러블슈팅 */}
          {orakGarakProject &&
            orakGarakProject.challenges &&
            orakGarakProject.challenges.length > 0 && (
              <div className="pdf-page-4-troubleshooting-section">
                <div className="pdf-page-4-section-title">트러블슈팅</div>
                <div className="pdf-page-4-troubleshooting-list">
                  {orakGarakProject.challenges.map((challenge, index) => {
                    const parseTroubleshooting = (text) => {
                      const colonIndex = text.indexOf(":");
                      if (colonIndex === -1) {
                        return { title: "", problem: text, solution: "" };
                      }

                      const title = text.substring(0, colonIndex).trim();
                      const rest = text.substring(colonIndex + 1).trim();

                      const occurredPattern = /발생했습니다\.?/;
                      const occurredMatch = rest.match(occurredPattern);

                      if (occurredMatch) {
                        const occurredIndex =
                          occurredMatch.index + occurredMatch[0].length;
                        const problem = rest
                          .substring(0, occurredIndex)
                          .trim();
                        let solution = rest.substring(occurredIndex).trim();
                        solution = solution.replace(/^[\s.]+/, "").trim();
                        return { title, problem, solution };
                      }

                      const lastDotIndex = rest.lastIndexOf(".");
                      if (lastDotIndex > 0 && lastDotIndex < rest.length - 1) {
                        const problem = rest
                          .substring(0, lastDotIndex + 1)
                          .trim();
                        let solution = rest.substring(lastDotIndex + 1).trim();
                        if (solution.endsWith(".")) {
                          solution = solution.slice(0, -1).trim();
                        }
                        return { title, problem, solution };
                      }

                      return { title, problem: rest, solution: "" };
                    };

                    const parsed = parseTroubleshooting(challenge);

                    // OrakGarak 트러블슈팅 이미지 매핑
                    const troubleshootingImages = [
                      ["/images/orakgarak/recording.png"], // Web Audio API 브라우저 호환성
                      ["/images/orakgarak/recommend.png"], // JWT 토큰 갱신
                      ["/images/orakgarak/recommend_detail.png"], // 3D 캐러셀 성능 최적화
                      ["/images/orakgarak/Album.png"], // 복잡한 상태 관리 구조
                    ];

                    return (
                      <div
                        key={index}
                        className="pdf-page-4-troubleshooting-item"
                      >
                        {parsed.title && (
                          <div className="pdf-page-4-troubleshooting-title">
                            {parsed.title}
                          </div>
                        )}
                        <div className="pdf-page-4-troubleshooting-content">
                          <div className="pdf-page-4-troubleshooting-problem">
                            <span className="pdf-page-4-troubleshooting-label">
                              문제:
                            </span>
                            <span>{parsed.problem}</span>
                          </div>
                          {parsed.solution && (
                            <div className="pdf-page-4-troubleshooting-solution">
                              <span className="pdf-page-4-troubleshooting-label">
                                해결:
                              </span>
                              <span>{parsed.solution}</span>
                            </div>
                          )}
                        </div>
                        {troubleshootingImages[index] && troubleshootingImages[index].length > 0 && (
                          <div className="pdf-page-4-troubleshooting-images">
                            {troubleshootingImages[index].map((img, imgIdx) => (
                              <img
                                key={imgIdx}
                                src={img}
                                alt={`OrakGarak 트러블슈팅 ${index + 1}-${imgIdx + 1}`}
                                className="pdf-page-4-troubleshooting-image"
                                onError={(e) => {
                                  e.target.style.display = "none";
                                }}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
        </div>
      </div>
    </>
  );
};

export default PdfPage;