import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-black py-16 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold"
          >
            Ready to build something cinematic?
          </motion.h3>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/20"
          >
            Contact Us
          </motion.a>
          <p className="text-xs text-white/50">© {new Date().getFullYear()} NeonNet. Crafted with motion.</p>
        </div>
      </div>
    </footer>
  );
}
