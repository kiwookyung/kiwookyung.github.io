const projectsArray = [
  {
    id: 1,
    title: "ReeLoom - 영화 추천 기반 커뮤니티 웹 서비스",
    description: "Vue + Django 기반의 영화 추천 및 커뮤니티 통합 웹 서비스",
    longDescription:
      "ReeLoom은 영화 추천과 커뮤니티 기능을 결합한 영화 웹 서비스입니다. Vue 3와 Pinia를 활용한 SPA 구조로 구현했으며, TMDB API와 Django REST API를 연동하여 영화 데이터를 효율적으로 처리했습니다. 사용자 친화적인 인터페이스와 실시간 커뮤니티 기능을 통해 직관적인 영화 추천 경험을 제공합니다.",
    role: "프론트엔드 개발 (Vue 3 SPA 구조 설계, API 연동, UI/UX 구현)",
    tech: [
      "Vue 3",
      "Pinia",
      "Axios",
      "TMDB API",
      "OpenAI GPT-4o",
      "YouTube API",
      "Tailwind CSS",
    ],
    techDetails: [
      {
        name: "Vue 3",
        reason:
          "Composition API를 활용한 컴포넌트 로직 재사용성과 명확한 데이터 흐름을 위해 선택",
      },
      {
        name: "Pinia",
        reason:
          "Vuex보다 더 간단한 API와 TypeScript 지원으로 효율적인 상태 관리 구현",
      },
      {
        name: "Tailwind CSS",
        reason: "빠른 UI 개발과 일관된 디자인 시스템 유지로 개발 생산성 향상",
      },
    ],
    image: "/images/reeloom.png",
    github: "https://github.com/kiwookyung/SSAFY_first_PJT",
    period: "2025.04 - 2025.05",
    teamSize: "2명 (프론트엔드 1, 백엔드 1)",
    achievements: [
      "Vue 3 Composition API와 Pinia를 활용한 상태 관리 구조 설계 및 컴포넌트 로직 재사용성 향상",
      "OpenAI GPT-4o를 활용한 AI 기반 영화 추천 시스템 구현 및 TMDB API 연동으로 영화 상세 정보 제공",
      "Axios 인터셉터를 통한 요청/응답 데이터 변환 로직 구현으로 Django REST API와의 안정적인 통신 구조 구축",
      "가상 스크롤링과 Intersection Observer API 기반 지연 로딩으로 대용량 영화 데이터 렌더링 성능 최적화",
      "Pinia store 캐싱 로직 도입 및 리팩토링을 통해 API 호출 횟수를 약 60% 감소시켜 성능 개선",
    ],
    challenges: [
      "CORS 및 데이터 구조 차이 문제: Vue 프론트엔드와 Django 백엔드 간의 CORS 에러 및 데이터 형식 불일치가 발생했습니다. Django CORS 설정을 조정하고 Axios 인터셉터를 통해 요청/응답 데이터 변환 로직을 구현하여 안정적인 API 통신 구조를 구축했습니다.",
      "Pinia 상태 관리 최적화: 초기 구현 시 불필요한 API 호출이 반복되어 성능 저하가 발생했습니다. Pinia store에 캐싱 로직을 추가하고, 컴포넌트에서 직접 API 호출 대신 store의 액션을 통해 데이터를 관리하도록 리팩토링하여 API 호출 횟수를 약 60% 감소시켰습니다.",
      "대용량 영화 데이터 렌더링 성능 문제: TMDB API에서 받아온 수천 개의 영화 데이터를 한 번에 렌더링하면서 초기 로딩 시간이 5초 이상 소요되는 문제가 발생했습니다. 가상 스크롤링과 페이지네이션을 구현하고, Intersection Observer API를 활용한 지연 로딩을 적용하여 초기 렌더링 시간을 1초 이하로 단축했습니다.",
      "반응형 이미지 최적화: 다양한 디바이스에서 영화 포스터 이미지 로딩이 느리고 레이아웃이 깨지는 문제가 발생했습니다. Tailwind CSS의 반응형 유틸리티와 이미지 lazy loading을 적용하고, TMDB API의 이미지 크기 옵션을 활용하여 디바이스별 최적화된 이미지 로딩을 구현했습니다.",
    ],
  },
  {
    id: 2,
    title: "FloodGuard - 지능형 침수 예방 자동화 시스템",
    description: "AIoT 기반 실시간 침수 감지·예측·자동 제어 대시보드 웹 서비스",
    longDescription:
      "FloodGuard는 AIoT 기반 침수 예방 시스템의 웹 대시보드입니다. React와 MUI를 활용하여 실시간 모니터링 인터페이스를 구현했으며, WebSocket을 통한 실시간 데이터 통신과 Leaflet 지도를 활용한 시각화 기능을 제공합니다. 사용자가 직관적으로 시스템 상태를 파악하고 제어할 수 있는 대시보드를 설계했습니다.",
    role: "프론트엔드 개발 (React 대시보드 구현, 실시간 데이터 시각화, UI/UX 설계)",
    tech: [
      "React",
      "Vite",
      "MUI",
      "Tailwind CSS",
      "Zustand",
      "Recharts",
      "Leaflet (OpenStreetMap)",
      "WebSocket",
      "JWT",
    ],
    techDetails: [
      {
        name: "React",
        reason: "컴포넌트 기반 아키텍처로 재사용 가능한 대시보드 모듈 설계",
      },
      {
        name: "Zustand",
        reason:
          "전역 상태 관리가 필요했지만 Redux의 복잡성을 피하고 경량화된 상태 관리",
      },
      {
        name: "WebSocket",
        reason:
          "실시간 센서 데이터 스트리밍을 위해 HTTP 폴링 대신 양방향 통신 채택",
      },
      {
        name: "Leaflet",
        reason: "경량 오픈소스 라이브러리로 지도 시각화 성능 최적화",
      },
    ],
    image: "/images/floodguard.png",
    github: "https://github.com/kiwookyung/floodguard",
    period: "2025.07 - 2025.08",
    teamSize: "6명 (Frontend 1, Backend 1, AI/IoT 4)",
    achievements: [
      "React와 MUI를 활용한 직관적인 실시간 모니터링 대시보드 구현 및 6명 팀에서 프론트엔드 단독 담당",
      "WebSocket을 통한 실시간 데이터 통신 및 자동 재연결 로직 구현으로 안정적인 실시간 스트리밍 환경 구축",
      "Leaflet 지도를 활용한 지리적 데이터 시각화 및 인터랙티브 UI 구현으로 센서 위치를 직관적으로 표시",
      "Web Worker와 requestAnimationFrame을 활용한 렌더링 최적화로 지도와 차트 동시 업데이트 시에도 60fps 유지",
      "Zustand 상태 관리 최적화, 데이터 버퍼링 및 디바운싱, React.memo를 통한 리렌더링 방지로 초당 30-50개의 센서 데이터도 부드럽게 처리",
    ],
    challenges: [
      "WebSocket 연결 안정성 문제: 실시간 센서 데이터 수신 중 네트워크 불안정 시 연결이 끊어지고 재연결이 되지 않는 문제가 발생했습니다. WebSocket 연결 상태 모니터링 및 자동 재연결 로직을 구현하고, 연결 실패 시 exponential backoff 전략을 적용하여 안정적인 실시간 데이터 스트리밍 환경을 구축했습니다.",
      "대용량 실시간 데이터 렌더링 성능: 초당 30-50개의 센서 데이터가 들어오면서 React 컴포넌트가 과도하게 리렌더링되어 UI가 멈추는 현상이 발생했습니다. Zustand를 활용한 상태 관리 최적화, 데이터 버퍼링 및 디바운싱 적용(500ms), React.memo를 통한 불필요한 리렌더링 방지로 부드러운 실시간 대시보드를 구현했습니다.",
      "JWT 토큰 관리 및 인증 구조: 토큰 만료 시 사용자가 갑자기 로그아웃되고, 만료 전 갱신 로직이 없어 사용자 경험이 저하되는 문제가 발생했습니다. Axios 인터셉터를 활용한 자동 토큰 갱신 로직을 구현하고, refresh token을 통한 seamless 인증 흐름을 설계하여 사용자 경험을 개선했습니다.",
      "Leaflet 지도와 Recharts 차트 성능 병목: 지도와 차트가 동시에 업데이트되면서 메인 스레드가 블로킹되어 애니메이션이 끊기는 문제가 발생했습니다. Web Worker를 활용한 데이터 처리 분리, requestAnimationFrame을 통한 렌더링 최적화, 지도/차트 업데이트를 독립적으로 분리하여 각각 60fps를 유지했습니다.",
    ],
    demo: "https://github.com/user-attachments/assets/872baf68-da39-4601-bd88-3d0801a9079a",
    tags: ["AIoT", "React", "FastAPI", "Real-time", "Team Project"],
  },
  {
    id: 3,
    title: "OrakGarak - 빅데이터 기반 음성 맞춤형 음악 추천 플랫폼",
    description:
      "음성 분석과 데이터 기반으로 맞춤형 노래를 추천하는 AI 음악 플랫폼",
    longDescription:
      "OrakGarak은 음성 분석 기반 음악 추천 플랫폼입니다. React 18과 TypeScript를 활용하여 안전한 컴포넌트 구조를 설계했으며, Web Audio API를 통한 실시간 오디오 처리와 Framer Motion을 활용한 인터랙티브 UI를 구현했습니다. 사용자 친화적인 음성 녹음 인터페이스와 3D 캐러셀을 통한 추천 결과 시각화를 제공합니다.",
    role: "프론트엔드 개발 (React/TypeScript 기반 UI 구현, 오디오 처리, 인터랙티브 UX 설계)",
    tech: [
      "React 18",
      "TypeScript",
      "Vite",
      "TailwindCSS",
      "MUI",
      "Framer Motion",
      "Zustand",
      "TanStack Query",
      "Axios",
      "Web Audio API",
    ],
    techDetails: [
      {
        name: "TypeScript",
        reason:
          "대규모 팀 프로젝트에서 타입 안전성을 확보하고 런타임 에러를 사전에 방지",
      },
      {
        name: "Web Audio API",
        reason:
          "브라우저에서 실시간 음성 녹음 및 오디오 시각화 기능을 네이티브하게 구현",
      },
      {
        name: "Framer Motion",
        reason: "3D 캐러셀과 인터랙티브 애니메이션으로 사용자 경험을 극대화",
      },
      {
        name: "TanStack Query",
        reason: "서버 상태 관리와 자동 캐싱으로 API 호출 최적화 및 UX 개선",
      },
    ],
    image: "/images/orakgarak.png",
    github: "https://github.com/kiwookyung/orakgarak",
    period: "2025.08 - 2025.09",
    teamSize: "6명 (Frontend 2, Backend 3, Data/AI 1, DevOps 1)",
    achievements: [
      "React 18과 TypeScript를 활용한 타입 안전한 컴포넌트 아키텍처 설계 및 팀 프로젝트에서 프론트엔드 2명 중 1명으로 참여",
      "Web Audio API를 통한 실시간 음성 녹음 및 시각화 기능 구현 및 크로스 브라우저 호환성 확보 (Chrome, Safari, iOS Safari)",
      "Framer Motion을 활용한 3D 캐러셀 및 인터랙티브 애니메이션 구현 및 will-change와 transform 속성을 활용한 GPU 가속으로 60fps 유지",
      "Zustand 도메인별 분리 및 TanStack Query를 통한 서버 상태 독립 관리로 복잡한 상태 관리 구조 개선",
      "요청 큐 시스템을 통한 JWT 토큰 갱신 중 동시 요청 처리로 안정적인 인증 흐름 구현",
    ],
    challenges: [
      "Web Audio API 브라우저 호환성 문제: Chrome에서는 정상 작동하지만 Safari에서 음성 녹음이 되지 않고, iOS Safari에서는 권한 요청이 제대로 처리되지 않는 문제가 발생했습니다. 브라우저별 API 차이를 감지하고 폴리필을 적용하며, getUserMedia API의 브라우저별 구현 차이를 처리하는 래퍼 함수를 작성하여 크로스 브라우저 호환성을 확보했습니다.",
      "JWT 토큰 갱신 중 동시 요청 처리: 토큰 만료 시 여러 API 요청이 동시에 발생하면 refresh token API가 중복 호출되어 401 에러가 연쇄적으로 발생하는 문제가 발생했습니다. 요청 큐 시스템을 구현하여 토큰 갱신 중인 요청들을 대기시키고, 갱신 완료 후 일괄 처리하는 방식으로 중복 호출을 방지하고 안정적인 인증 흐름을 구현했습니다.",
      "3D 캐러셀 성능 최적화: Framer Motion으로 구현한 3D 캐러셀에서 많은 음악 카드가 렌더링되면서 스크롤 시 프레임이 떨어지는 문제가 발생했습니다. will-change CSS 속성 적용, GPU 가속을 위한 transform 속성 활용, 가상화를 통한 보이지 않는 카드 렌더링 제거로 60fps를 유지하고 부드러운 애니메이션을 구현했습니다.",
      "복잡한 상태 관리 구조: 음성 녹음, 추천 결과, 플레이리스트 등 여러 도메인의 상태가 얽혀 있어 데이터 동기화가 어려운 문제가 발생했습니다. Zustand를 도메인별로 분리하고, TanStack Query를 통해 서버 상태를 독립적으로 관리하며, 각 store 간의 의존성을 최소화하는 구조로 리팩토링하여 유지보수성을 향상시켰습니다.",
    ],
    demo: "https://www.youtube.com/watch?v=TZXWQVrrv0A",
    tags: [
      "AI",
      "Music",
      "BigData",
      "React",
      "Spring Boot",
      "FastAPI",
      "Team Project",
    ],
  },
  {
    id: 4,
    title: "개인 포트폴리오 웹사이트",
    description: "React + Tailwind CSS로 구축한 인터랙티브 포트폴리오",
    longDescription:
      "React와 Tailwind CSS를 활용하여 제작한 개인 포트폴리오 웹사이트입니다. Intersection Observer API 기반 스크롤 애니메이션, 타이핑 효과, 3D 호버 이펙트 등 다양한 인터랙티브 요소를 구현하여 사용자 경험을 극대화했습니다. 컴포넌트 기반 아키텍처로 설계하여 재사용성과 유지보수성을 높였으며, 완전한 반응형 디자인으로 모든 디바이스에서 최적화된 화면을 제공합니다.",
    role: "프론트엔드 개발 (React 기반 SPA 구현, 컴포넌트 설계, 인터랙티브 UI 개발)",
    tech: [
      "React 19",
      "Vite",
      "React Router v7",
      "Tailwind CSS",
      "PostCSS",
      "Lucide Icons",
      "Intersection Observer API",
      "ESLint",
      "Git",
    ],
    techDetails: [
      {
        name: "React 19",
        reason: "최신 버전의 성능 개선사항을 활용하고 Hooks 기반 아키텍처 채택",
      },
      {
        name: "Vite",
        reason: "빠른 개발 서버와 HMR로 개발 생산성 향상",
      },
      {
        name: "Tailwind CSS",
        reason:
          "유틸리티 퍼스트 방식으로 빠른 스타일링과 일관된 디자인 시스템 구축",
      },
      {
        name: "Intersection Observer API",
        reason: "스크롤 이벤트 대신 성능 최적화된 스크롤 애니메이션 구현",
      },
    ],
    image: null, // TODO: 프로젝트 완성 후 스크린샷 추가 예정
    github: "https://github.com/kiwookyung/Ki_Portfolio",
    period: "2025.09 - 2025.10",
    teamSize: "1명 (개인 프로젝트)",
    achievements: [
      "React 19와 Vite를 활용한 현대적인 프론트엔드 개발 환경 구축 및 HMR(Hot Module Replacement)을 통한 빠른 개발 서버 경험",
      "Intersection Observer API를 활용한 커스텀 훅 구현으로 스크롤 이벤트 리스너 대비 성능 최적화",
      "Tailwind CSS @apply 디렉티브를 활용한 커스텀 컴포넌트 클래스 생성으로 코드 재사용성 및 가독성 향상",
      "JSON 기반의 구조화된 데이터 파일 분리 및 동적 매핑 구조로 확장 가능한 프로젝트 데이터 구조 설계",
      "타이핑 효과, 3D 호버 이펙트 등 인터랙티브 UI 요소 구현으로 사용자 경험 극대화",
    ],
    challenges: [
      "Tailwind CSS 유틸리티 클래스 관리: 긴 클래스명으로 인해 코드 가독성이 떨어지고, 반복되는 스타일 패턴이 여러 컴포넌트에 중복되는 문제가 발생했습니다. @apply 디렉티브를 활용한 커스텀 컴포넌트 클래스를 생성하고, 공통 스타일을 별도 파일로 분리하여 코드 재사용성과 가독성을 개선했습니다.",
      "스크롤 애니메이션 성능 최적화: 초기 구현 시 scroll 이벤트 리스너를 사용하여 스크롤할 때마다 모든 섹션을 체크하면서 성능 저하가 발생했습니다. Intersection Observer API를 활용한 커스텀 훅을 구현하고, 스로틀링을 적용하여 불필요한 리렌더링을 최소화하고 부드러운 스크롤 애니메이션을 구현했습니다.",
      "확장 가능한 프로젝트 데이터 구조: 프로젝트가 추가될 때마다 하드코딩된 데이터 구조로 인해 유지보수가 어려운 문제가 발생했습니다. JSON 기반의 구조화된 데이터 파일로 분리하고, 타입 안전성을 위한 데이터 검증 로직을 추가하며, 컴포넌트에서 데이터를 동적으로 매핑하는 구조로 설계하여 확장성과 유지보수성을 향상시켰습니다.",
    ],
    demo: "https://kiwookyung.github.io/",
    tags: ["Frontend", "React", "Tailwind CSS", "Personal"],
  },
  {
    id: 5,
    title: "ToGather - AI 기반 커플 공유 다이어리 & 일정 관리 앱",
    description:
      "RAG 챗봇과 이미지 분석을 결합한 커플 전용 공유 다이어리 · 일정 관리 모바일 앱",
    longDescription:
      "ToGather는 커플이 함께 사용하는 모바일 공유 다이어리 · 일정 관리 애플리케이션입니다. React Native + Expo 기반으로 개발되었으며, 날짜 기반의 기록, 커플 타임라인, 공유 일정, 펫/아이템 시스템 등 감성적 경험과 실사용 기능을 결합한 모바일 플랫폼입니다. 다이어리/피드/일정/펫 등 핵심 UX 흐름을 중심으로 전체 앱 구조와 화면을 직접 설계·구현했습니다.",
    role: "프론트엔드 개발 (모바일 앱 전체 구조 설계, Expo Router 기반 탭 구조 설계, Zustand + TanStack Query 상태 관리, 핵심 화면 90% 이상 직접 구현)",
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "Expo Router",
      "Zustand",
      "TanStack Query",
      "Axios",
      "React Native Image",
      "React Native FlatList",
      "React Native SafeArea",
      "React Native Animated",
      "JWT",
    ],
    techDetails: [
      {
        name: "React Native + Expo",
        reason:
          "Android/iOS 동시 지원이 필요했고, Expo를 통해 빌드/배포 파이프라인과 개발 생산성을 높이기 위해 선택",
      },
      {
        name: "Expo Router",
        reason:
          "탭 기반 네비게이션 구조(Home / Diary / Feed / Plan / Settings)를 직관적으로 설계하고, 파일 기반 라우팅으로 개발 효율성 향상",
      },
      {
        name: "Zustand + TanStack Query",
        reason:
          "클라이언트 로컬 상태와 서버 상태를 분리해 관리하고, 자동 캐싱 · 리페치로 API 호출 최소화 및 UX 최적화. 다이어리/일정/펫 등 도메인별 독립적인 상태 관리 구조 구축",
      },
      {
        name: "React Native FlatList",
        reason:
          "피드 타임라인의 스크롤 성능 최적화를 위해 lazy load, keyExtractor, layout tuning 등을 적용하여 대량의 이미지 데이터도 부드럽게 렌더링",
      },
    ],
    image: "/images/togather/Logo.png",
    screenshots: [
      "/images/togather/home_togather.jpg", // 홈 화면 - 앱의 첫인상
      "/images/togather/Diary_togather.jpg", // 다이어리 목록 - 핵심 기능
      "/images/togather/Feed_togather.jpg", // 피드 타임라인 - 핵심 기능
      "/images/togather/plan_togather.jpg", // 일정 캘린더 - 핵심 기능
      "/images/togather/Create_Diary_togather.jpg", // 다이어리 작성 - 주요 UX 플로우
      "/images/togather/Pet1_togather.jpg", // 펫 시스템 - 핵심 기능
      "/images/togather/Shop_togather.jpg", // 아이템/상점 - 핵심 기능
    ],
    github: "https://github.com/SSAFY-ToGather/ToGather",
    period: "2025.10 - 2025.11",
    teamSize: "6명 (Frontend 1, Backend, AI/ML, DevOps)",
    achievements: [
      "Expo Router 기반 탭 구조(Home / Diary / Feed / Plan / Settings) 설계 및 전체 앱 네비게이션 플로우 구현",
      "Zustand + TanStack Query 기반 상태 · 서버 데이터 관리 체계 구축으로 도메인별 독립적인 데이터 동기화 구조 설계",
      "다이어리 작성 플로우: 달력 날짜 선택 → 사진/텍스트/위치 정보를 섹션 단위로 구성하는 UI 컴포넌트 설계 및 작성/수정/삭제 기능 구현",
      "피드(Feed) 타임라인: 날짜순 다이어리 피드를 카드 형태로 구성하고, 사진 개수에 따른 자동 그리드 레이아웃 생성 및 FlatList 기반 스크롤 성능 최적화",
      "일정(Plan) 공유 캘린더: 다이어리와 동일한 캘린더 라이브러리를 사용하되 기록 중심과 계획 중심의 UX 맥락에 맞게 화면을 다르게 구성하여 구현",
      "펫 & 아이템 시스템: 커플이 함께 키우는 펫 UI 구성, 상점에서 아이템 구매 → 펫에게 장착하는 흐름 구현 및 장착 정보를 Home 등 주요 화면과 연동",
    ],
    challenges: [
      "SafeArea / KeyboardAvoidingView 관련 UI 깨짐 문제: iOS/Android 기종마다 달력/피드/작성 화면이 노치·홈 버튼·키보드 때문에 밀려 UI가 잘리는 문제가 발생했습니다. React Native의 SafeAreaView와 useSafeAreaInsets 훅을 활용하여 노치와 홈 버튼 영역을 정확히 계산하고, KeyboardAvoidingView의 behavior 속성을 플랫폼별로 분기 처리하여 iOS는 padding, Android는 height로 설정했습니다. 또한 ScrollView와 함께 사용하여 키보드가 올라올 때 컨텐츠가 자연스럽게 스크롤되도록 구현하고, 각 화면의 헤더와 탭바 위치를 safe area와 키보드 높이를 고려하여 재계산하여 모든 기종에서 안정적인 UI를 제공했습니다.",
      "캘린더 데이터 동기화 이슈: 일정과 다이어리가 같은 캘린더 컴포넌트를 사용하면서 데이터 충돌이 발생했습니다. Query key를 도메인별로 분리하고 의존 관계를 명확히 분리하여 다이어리와 일정이 서로 영향을 주지 않는 안정적인 구조로 개선했습니다.",
      "RN 네비게이션 & 상태 사라짐 문제: 상세 화면에서 뒤로가기 시 화면 상태가 초기화되거나 누락되는 문제가 발생했습니다. useFocusEffect로 화면 재진입 시 상태 관리를 분리하고, 전역·로컬 상태의 역할을 정의하여 화면 전환이 자연스럽고 사용자 경험이 안정화되도록 구현했습니다.",
    ],
    // 트러블슈팅 이미지 (각 challenges 항목에 대응하는 이미지 배열)
    troubleshootingImages: [
      // 1. SafeArea / KeyboardAvoidingView 관련 UI 깨짐 문제
      [
        "/images/togather/Create_Diary_togather.jpg", // 키보드 관련 문제 해결 예시
        "/images/togather/Diary_togather.jpg", // 노치/홈버튼 관련 문제 해결 예시
      ],
      // 2. 캘린더 데이터 동기화 이슈
      [
        "/images/togather/Diary_togather.jpg", // 다이어리 캘린더
        "/images/togather/plan_togather.jpg", // 일정 캘린더 (비교용)
      ],
      // 3. RN 네비게이션 & 상태 사라짐 문제
      [
        "/images/togather/Diary_Detail_togather.jpg", // 다이어리 상세 화면
        "/images/togather/Feed_Detail_togather.jpg", // 피드 상세 화면
        "/images/togather/Plan_Detail_togather.jpg", // 일정 상세 화면
      ],
    ],
    demo: null,
    tags: ["Mobile", "React Native", "Expo", "TypeScript", "Team Project"],
  },
];

// id 내림차순으로 정렬 (최신 프로젝트가 먼저 오도록)
export const projects = [...projectsArray].sort((a, b) => b.id - a.id);
