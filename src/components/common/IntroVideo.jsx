import { useState, useRef, useEffect } from 'react';
import { SkipForward, Volume2, VolumeX } from 'lucide-react';

const IntroVideo = ({ onComplete }) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const percent = (video.currentTime / video.duration) * 100;
      setProgress(percent);
    };

    const handleEnded = () => {
      handleSkip();
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const handleSkip = () => {
    setIsVisible(false);
    // 페이드아웃 후 완료 콜백
    setTimeout(() => {
      sessionStorage.setItem('introWatched', 'true');
      onComplete();
    }, 500);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* 영상 */}
      <video
        ref={videoRef}
        autoPlay
        muted={isMuted}
        playsInline
        className="w-full h-full object-contain"
      >
        <source src="/videos/introduce_portfolio.mp4" type="video/mp4" />
      </video>

      {/* 진행 바 */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800">
        <div
          className="h-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* 컨트롤 버튼들 */}
      <div className="absolute bottom-6 right-6 flex items-center gap-3">
        {/* 음소거 토글 */}
        <button
          onClick={toggleMute}
          className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full transition-all duration-300"
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>

        {/* 스킵 버튼 */}
        <button
          onClick={handleSkip}
          className="flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
        >
          <span>스킵</span>
          <SkipForward size={20} />
        </button>
      </div>

      {/* 타이틀 오버레이 (선택적) */}
      <div className="absolute top-8 left-8 text-white/80">
        <p className="text-sm font-medium tracking-wider uppercase">Portfolio Introduction</p>
      </div>
    </div>
  );
};

export default IntroVideo;

