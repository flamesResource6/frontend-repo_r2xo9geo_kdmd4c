import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Features() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const translateY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  const features = [
    {
      title: "Magnetic Interactions",
      desc: "Buttons and cursors that attract and respond with delightful physics.",
    },
    {
      title: "Parallax Depth",
      desc: "Layers glide at different speeds to create cinematic perspective.",
    },
    {
      title: "Cinematic Scroll",
      desc: "Micro-transitions sync to your scroll for fluid story-like flow.",
    },
  ];

  return (
    <section id="features" ref={ref} className="relative bg-black py-32 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-6">
        <motion.h2
          style={{ y: translateY }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight"
        >
          Designed to feel alive
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-xl shadow-blue-500/10"
            >
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
