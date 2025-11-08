import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Showcase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });

  useEffect(() => {
    const onMove = (e) => {
      const layers = document.querySelectorAll("[data-parallax-layer]");
      layers.forEach((layer) => {
        const depth = parseFloat(layer.getAttribute("data-depth"));
        const x = (e.clientX / window.innerWidth - 0.5) * depth * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * depth * 20;
        layer.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="showcase" ref={ref} className="relative bg-black py-32 text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div data-parallax-layer data-depth="1.5" className="absolute left-10 top-10 h-28 w-28 rounded-full bg-blue-500/20 blur-2xl" />
        <div data-parallax-layer data-depth="1.0" className="absolute right-24 bottom-10 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />
        <div data-parallax-layer data-depth="2.0" className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
          >
            Motion as a material
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 max-w-2xl text-white/70"
          >
            Section transitions that zoom, melt and morph with subtle depth cues and reactive particles.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.15),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10">
                <h3 className="text-lg font-semibold">Cinematic Card {i}</h3>
                <p className="mt-2 text-white/70">Liquid morphing hover and depth shadow.</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div style={{ scaleX: progress }} className="mt-12 h-1 w-full origin-left rounded bg-gradient-to-r from-violet-500 to-blue-500" />
      </div>
    </section>
  );
}
