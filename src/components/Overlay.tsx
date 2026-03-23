"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export default function Overlay() {
  const { scrollYProgress } = useScroll();

  // section 1: My Name. Creative Developer. (Centred, 0-20% scroll)
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // section 2: I build digital experiences. (Left, 30-50%)
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.55], [50, -50]);

  // section 3: Bridging design and engineering. (Right, 60-80%)
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.85], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.85], [50, -50]);

  return (
    <div className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Section 1 */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4 drop-shadow-lg">
            Arjun Sharma
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide drop-shadow-md">
            Turning DSA Logic into Clean C++ Code.
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex flex-col items-start justify-center p-12 md:p-32 text-left"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white max-w-xl drop-shadow-lg leading-tight">
            Building Real-World Web Apps.
          </h2>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex flex-col items-end justify-center p-12 md:p-32 text-right"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white max-w-xl drop-shadow-lg leading-tight">
            C++ • JavaScript <br />
            <span className="text-white/60">HTML5 • CSS3</span>
          </h2>
        </motion.div>

      </div>
    </div>
  );
}
