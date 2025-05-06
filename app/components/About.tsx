import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-retro-gray/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold text-retro-brown mb-6">
              About Me
            </h2>
            <p className="text-retro-dark-gray mb-4">
              I&apos;m a passionate developer with a keen eye for design and a
              love for creating beautiful, functional web experiences. My
              journey in web development started with a curiosity about how
              things work on the internet, and it has evolved into a
              professional pursuit of crafting digital solutions.
            </p>
            <p className="text-retro-dark-gray mb-6">
              When I&apos;m not coding, you can find me exploring new
              technologies, contributing to open-source projects, or sharing my
              knowledge with the developer community.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="bg-retro-brown text-retro-cream px-6 py-2 rounded-full text-sm font-medium hover:bg-retro-light-brown transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="border-2 border-retro-brown text-retro-brown px-6 py-2 rounded-full text-sm font-medium hover:bg-retro-brown hover:text-retro-cream transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-retro-brown/10 rounded-lg p-8">
              <div className="h-full w-full border-2 border-retro-brown/20 rounded-lg flex items-center justify-center">
                <span className="text-retro-brown text-lg">
                  Your Photo Here
                </span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-retro-gold/20 rounded-lg -z-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
