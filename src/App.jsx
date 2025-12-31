import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ExtrasPage from './pages/ExtrasPage';
import PdfPage from './pages/PdfPage';
import IntroVideo from './components/common/IntroVideo';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(() => {
    // 세션에서 이미 인트로를 봤는지 확인
    return sessionStorage.getItem('introWatched') !== 'true';
  });

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-theme">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-theme-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-theme-primary">기우경의 포트폴리오</h2>
          <p className="text-theme-secondary mt-2">로딩 중...</p>
        </div>
      </div>
    );
  }

  // 인트로 영상 표시
  if (showIntro) {
    return <IntroVideo onComplete={() => setShowIntro(false)} />;
  }

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-theme">
          <Routes>
            <Route path="/portfolio/pdf" element={<PdfPage />} />
            <Route path="/" element={
              <>
                <Navbar />
                <main className="pt-16">
                  <HomePage />
                </main>
                <Footer />
              </>
            } />
            <Route path="/about" element={
              <>
                <Navbar />
                <main className="pt-16">
                  <AboutPage />
                </main>
                <Footer />
              </>
            } />
            <Route path="/projects" element={
              <>
                <Navbar />
                <main className="pt-16">
                  <ProjectsPage />
                </main>
                <Footer />
              </>
            } />
            <Route path="/extras" element={
              <>
                <Navbar />
                <main className="pt-16">
                  <ExtrasPage />
                </main>
                <Footer />
              </>
            } />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
