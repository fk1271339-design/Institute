import { useEffect, useRef, useState, useCallback } from 'react';
import { Film, Play, Pause, ChevronDown, Sparkles, Layers } from 'lucide-react';

const TOTAL_FRAMES = 39;

// Generate 001 to 039 frame image paths
const FRAME_PATHS = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
  const num = String(i + 1).padStart(3, '0');
  return `/frames/ezgif-frame-${num}.png`;
});

export default function MotionCanvas({ currentFrame, onFrameChange, totalScrollProgress }) {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const playIntervalRef = useRef(null);

  // Preload all 39 frame images into memory
  useEffect(() => {
    let isSubscribed = true;
    let count = 0;
    const loadedImages = [];

    FRAME_PATHS.forEach((src, idx) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        if (!isSubscribed) return;
        count += 1;
        setLoadedCount(count);
        if (count === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };
      img.onerror = () => {
        if (!isSubscribed) return;
        count += 1;
        setLoadedCount(count);
        if (count === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };
      loadedImages[idx] = img;
    });

    imagesRef.current = loadedImages;

    return () => {
      isSubscribed = false;
    };
  }, []);

  // Canvas render function
  const renderFrame = useCallback((frameIdx) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[frameIdx];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    // High DPI scaling
    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    // Calculate aspect ratio cover
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;
    const imgRatio = imgWidth / imgHeight;
    const canvasRatio = width / height;

    let renderWidth, renderHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      renderWidth = width;
      renderHeight = width / imgRatio;
      offsetX = 0;
      offsetY = (height - renderHeight) / 2;
    } else {
      renderWidth = height * imgRatio;
      renderHeight = height;
      offsetX = (width - renderWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);

    // Subtle dark gradient vignette for readable floating text overlay
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, 'rgba(4, 16, 26, 0.72)');
    gradient.addColorStop(0.35, 'rgba(4, 16, 26, 0.45)');
    gradient.addColorStop(0.65, 'rgba(4, 16, 26, 0.45)');
    gradient.addColorStop(1, 'rgba(4, 16, 26, 0.88)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    ctx.restore();
  }, []);

  // Render canvas on frame change or window resize
  useEffect(() => {
    if (isLoaded) {
      renderFrame(currentFrame);
    }
  }, [currentFrame, isLoaded, renderFrame]);

  useEffect(() => {
    const handleResize = () => {
      if (isLoaded) {
        renderFrame(currentFrame);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentFrame, isLoaded, renderFrame]);

  // Toggle Auto-play frame sequence feature
  const togglePlay = () => {
    if (isPlaying) {
      clearInterval(playIntervalRef.current);
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      playIntervalRef.current = setInterval(() => {
        onFrameChange((prev) => {
          const next = (prev + 1) % TOTAL_FRAMES;
          return next;
        });
      }, 90);
    }
  };

  useEffect(() => {
    return () => {
      if (playIntervalRef.current) clearInterval(playIntervalRef.current);
    };
  }, []);

  const progressPercent = Math.round(((currentFrame + 1) / TOTAL_FRAMES) * 100);

  return (
    <>
      {/* Preloader overlay while loading frames */}
      {!isLoaded && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#04101A] text-white p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#087F78] to-[#16A394] flex items-center justify-center animate-pulse">
              <Film className="w-5 h-5 text-white" />
            </div>
            <span className="font-heading text-xl font-extrabold tracking-tight">Nexora Motion Engine</span>
          </div>

          <div className="w-64 sm:w-80 h-2 bg-white/10 rounded-full overflow-hidden mb-3">
            <div
              className="h-full bg-gradient-to-r from-[#087F78] via-[#16A394] to-[#F2B84B] transition-all duration-150 ease-out"
              style={{ width: `${(loadedCount / TOTAL_FRAMES) * 100}%` }}
            />
          </div>

          <div className="flex items-center justify-between w-64 sm:w-80 text-xs font-mono-tech text-teal-300">
            <span>Loading Motion Sequence...</span>
            <span className="font-bold">{loadedCount} / {TOTAL_FRAMES}</span>
          </div>
        </div>
      )}

      {/* Main Fullscreen Canvas Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#04101A]">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: isLoaded ? 1 : 0 }}
        />
      </div>

      {/* Floating HUD: Real-time Frame Counter & Motion Controller */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-[#04101A]/85 backdrop-blur-xl border border-[#16A394]/40 p-2.5 px-4 rounded-full shadow-2xl text-white font-mono-tech text-xs select-none">
        <button
          type="button"
          onClick={togglePlay}
          className="p-1.5 rounded-full bg-white/10 hover:bg-[#16A394]/30 text-teal-300 transition-colors cursor-pointer"
          title={isPlaying ? "Pause Motion Sequence" : "Auto-play Motion Frames"}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>

        <div className="flex items-center gap-2 border-l border-white/15 pl-3">
          <span className="w-2 h-2 rounded-full bg-[#16A394] animate-ping" />
          <span className="font-extrabold text-teal-200 tracking-wider">
            FRAME <span className="text-[#F2B84B] text-sm font-bold">{String(currentFrame + 1).padStart(2, '0')}</span> / {TOTAL_FRAMES}
          </span>
        </div>

        {/* Dynamic Frame Scrubber Bar */}
        <div className="hidden sm:flex items-center gap-2 border-l border-white/15 pl-3">
          <div className="w-24 h-1.5 bg-white/15 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#087F78] to-[#F2B84B] transition-all duration-75"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-[10px] text-slate-300 font-semibold">{progressPercent}%</span>
        </div>
      </div>

      {/* Scroll Hint Floating Bar */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-2.5 bg-[#04101A]/80 backdrop-blur-xl border border-white/10 py-2 px-3.5 rounded-full text-xs text-slate-300 font-mono-tech">
        <Layers className="w-3.5 h-3.5 text-[#16A394]" />
        <span>Scroll to animate 39 motion frames</span>
        <ChevronDown className="w-3.5 h-3.5 text-[#F2B84B] animate-bounce ml-1" />
      </div>
    </>
  );
}
