import { motion } from "framer-motion";

const projects = [
  {
    title: "Project One",
    description: "A beautiful web application built with modern technologies.",
    image: "/project1.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Project Two",
    description: "An innovative mobile app that solves real-world problems.",
    image: "/project2.jpg",
    tags: ["React Native", "Firebase", "Redux"],
    link: "#",
  },
  {
    title: "Project Three",
    description: "A full-stack e-commerce platform with advanced features.",
    image: "/project3.jpg",
    tags: ["Next.js", "PostgreSQL", "Stripe"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-retro-brown mb-4">
            My Projects
          </h2>
          <p className="text-retro-dark-gray max-w-2xl mx-auto">
            Here are some of my recent works. Each project is a unique challenge
            that I&apos;ve tackled with passion and creativity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-retro-cream rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video bg-retro-gray/20 relative">
                <div className="absolute inset-0 flex items-center justify-center text-retro-brown">
                  Project Image
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-retro-brown mb-2">
                  {project.title}
                </h3>
                <p className="text-retro-dark-gray mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-retro-gray/20 text-retro-brown rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block bg-retro-brown text-retro-cream px-4 py-2 rounded-full text-sm font-medium hover:bg-retro-light-brown transition-colors"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
