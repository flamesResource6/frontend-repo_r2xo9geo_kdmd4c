import { motion } from "framer-motion";

export default function Navbar() {
  const links = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#features" },
    { name: "Showcase", href: "#showcase" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto w-full max-w-7xl px-6 py-4">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl shadow-blue-500/10 flex items-center justify-between px-5 py-3">
          <motion.a
            href="#"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white font-semibold tracking-tight text-xl"
          >
            NEON<span className="text-blue-400">NET</span>
          </motion.a>
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                className="relative text-sm text-white/80 hover:text-white transition group"
              >
                <span>{l.name}</span>
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-gradient-to-r from-violet-400 to-blue-400 group-hover:w-full transition-all" />
              </a>
            ))}
          </nav>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/20"
          >
            Get Early Access
          </motion.a>
        </div>
      </div>
    </div>
  );
}
