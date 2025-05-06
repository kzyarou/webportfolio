import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-retro-brown mb-4">
            Get in Touch
          </h2>
          <p className="text-retro-dark-gray max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear
            from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-retro-cream rounded-lg p-8 shadow-lg"
          >
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-retro-brown font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border-2 border-retro-gray/20 rounded-lg focus:outline-none focus:border-retro-brown bg-retro-cream"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-retro-brown font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border-2 border-retro-gray/20 rounded-lg focus:outline-none focus:border-retro-brown bg-retro-cream"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-retro-brown font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border-2 border-retro-gray/20 rounded-lg focus:outline-none focus:border-retro-brown bg-retro-cream"
                  placeholder="Your message"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-retro-brown text-retro-cream px-6 py-3 rounded-lg text-lg font-medium hover:bg-retro-light-brown transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-retro-brown mb-4">
                Contact Information
              </h3>
              <p className="text-retro-dark-gray">
                Feel free to reach out through any of these channels. I&apos;ll
                get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-retro-brown/10 rounded-full flex items-center justify-center">
                  <span className="text-retro-brown">📧</span>
                </div>
                <div>
                  <h4 className="text-retro-brown font-medium">Email</h4>
                  <a
                    href="mailto:your@email.com"
                    className="text-retro-dark-gray hover:text-retro-brown"
                  >
                    your@email.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-retro-brown/10 rounded-full flex items-center justify-center">
                  <span className="text-retro-brown">📱</span>
                </div>
                <div>
                  <h4 className="text-retro-brown font-medium">Phone</h4>
                  <a
                    href="tel:+1234567890"
                    className="text-retro-dark-gray hover:text-retro-brown"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-retro-brown/10 rounded-full flex items-center justify-center">
                  <span className="text-retro-brown">📍</span>
                </div>
                <div>
                  <h4 className="text-retro-brown font-medium">Location</h4>
                  <p className="text-retro-dark-gray">Your City, Country</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-retro-brown mb-4">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-retro-brown/10 rounded-full flex items-center justify-center hover:bg-retro-brown hover:text-retro-cream transition-colors"
                >
                  <span className="text-retro-brown">🐦</span>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-retro-brown/10 rounded-full flex items-center justify-center hover:bg-retro-brown hover:text-retro-cream transition-colors"
                >
                  <span className="text-retro-brown">💼</span>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-retro-brown/10 rounded-full flex items-center justify-center hover:bg-retro-brown hover:text-retro-cream transition-colors"
                >
                  <span className="text-retro-brown">📸</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
