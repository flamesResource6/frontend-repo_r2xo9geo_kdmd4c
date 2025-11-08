import { useRef } from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  const magRef = useRef(null);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Gradient lighting overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/30 blur-3xl" />
        <div className="absolute bottom-0 right-32 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="font-extrabold tracking-tight text-4xl sm:text-6xl md:text-7xl"
          style={{ fontFamily: 'Space Grotesk, Inter, system-ui' }}
        >
          Cinematic Web Experiences
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.1 }}
          className="mt-4 max-w-2xl text-white/70"
        >
          A futuristic playground of motion, depth, and interaction. Scroll to explore.
        </motion.p>

        {/* Magnetic button */}
        <motion.button
          ref={magRef}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="group relative mt-10 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-xl"
          onMouseMove={(e) => {
            const el = magRef.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            el.style.transform = `translate(${x * 0.06}px, ${y * 0.06}px)`;
          }}
          onMouseLeave={() => {
            const el = magRef.current;
            if (!el) return;
            el.style.transform = "translate(0,0)";
          }}
        >
          <span className="absolute inset-0 -z-0 rounded-full bg-gradient-to-r from-violet-500/40 to-blue-500/40 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
          Enter The Future
        </motion.button>
      </div>

      {/* Glass morphism card */}
      <div className="relative z-10 mx-auto mt-10 max-w-5xl px-6 pb-24">
        <div className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl shadow-2xl shadow-blue-500/10">
          <div className="text-left">
            <p className="text-xs uppercase tracking-widest text-white/50">Introducing</p>
            <h3 className="mt-2 text-2xl font-semibold">The living interface</h3>
            <p className="mt-2 text-white/70">
              Built with parallax layers, GSAP-like motion via Framer, and a realtime 3D scene for presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
