"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, motion } from "framer-motion";

const FRAME_COUNT = 192;

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${paddedIndex}_delay-0.041s.png`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setLoaded(true);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (!loaded || !canvasRef.current || images.length === 0) return;
    const renderIndex = Math.floor(latest);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[renderIndex];
    if (!img) return;

    // Draw image object-fit: cover
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  });

  // Resize canvas to fullscreen
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        // High DPI displays
        const scale = window.devicePixelRatio || 1;
        canvasRef.current.width = window.innerWidth * scale;
        canvasRef.current.height = window.innerHeight * scale;
        
        // Context scaling is applied automatically by physical canvas dimensions
        // Initial draw if loaded
        if (loaded && images[0]) {
           const latest = frameIndex.get();
           const ctx = canvasRef.current.getContext("2d");
           if (ctx) {
             const img = images[Math.floor(latest)];
             if (img) {
               const canvasRatio = canvasRef.current.width / canvasRef.current.height;
               const imgRatio = img.width / img.height;
               let drawWidth = canvasRef.current.width;
               let drawHeight = canvasRef.current.height;
               let offsetX = 0;
               let offsetY = 0;
               if (canvasRatio > imgRatio) {
                 drawHeight = canvasRef.current.width / imgRatio;
                 offsetY = (canvasRef.current.height - drawHeight) / 2;
               } else {
                 drawWidth = canvasRef.current.height * imgRatio;
                 offsetX = (canvasRef.current.width - drawWidth) / 2;
               }
               ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
               ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
             }
           }
        }
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [loaded, images, frameIndex]);

  return (
    <div ref={containerRef} className="absolute inset-0 h-[500vh] w-full z-0">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
          style={{ width: "100%", height: "100%" }}
        />
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center text-white/50 text-sm tracking-widest font-mono uppercase bg-[#121212]">
             <motion.div 
               animate={{ opacity: [0.5, 1, 0.5] }} 
               transition={{ duration: 1.5, repeat: Infinity }}
             >
                Loading Sequence...
             </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
