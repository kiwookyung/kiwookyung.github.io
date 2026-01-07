import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

// 페이지 lazy loading - 코드 스플리팅
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ExtrasPage = lazy(() => import('./pages/ExtrasPage'));
const PdfPage = lazy(() => import('./pages/PdfPage'));

// 페이지 로딩 컴포넌트
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-theme">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-theme-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-theme-secondary">페이지 로딩 중...</p>
    </div>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-theme">
          <Suspense fallback={<PageLoader />}>
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
          </Suspense>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
