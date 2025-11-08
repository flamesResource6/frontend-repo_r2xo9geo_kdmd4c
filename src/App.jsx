import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Showcase from "./components/Showcase";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white selection:bg-blue-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
      </main>
      <Footer />
    </div>
  );
}
