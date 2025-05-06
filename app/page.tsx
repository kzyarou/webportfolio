import { motion } from "framer-motion";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-retro-cream/80 backdrop-blur-sm z-50 border-b border-retro-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-2xl font-bold text-retro-brown">Your Name</div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-retro-dark-gray hover:text-retro-brown transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-retro-dark-gray hover:text-retro-brown transition-colors"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-retro-dark-gray hover:text-retro-brown transition-colors"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-retro-dark-gray hover:text-retro-brown transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-retro-brown mb-6">
              Hello, I&apos;m <span className="text-retro-gold">Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl text-retro-dark-gray mb-8">
              A passionate developer crafting digital experiences
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-retro-brown text-retro-cream px-8 py-3 rounded-full text-lg font-medium hover:bg-retro-light-brown transition-colors"
            >
              View My Work
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
