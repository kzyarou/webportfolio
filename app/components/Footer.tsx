export default function Footer() {
  return (
    <footer className="bg-retro-brown text-retro-cream py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-retro-cream hover:text-retro-gold transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-retro-cream hover:text-retro-gold transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-retro-cream hover:text-retro-gold transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
