import { Github, Twitter, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-bg-secondary text-text-main py-12 px-6 md:px-16 border-t border-primary/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Tagline */}
        <div>
          <h1 className="text-2xl font-bold tracking-widest mb-2">CIPHER</h1>
          <p className="text-text-muted text-sm">
            Master cybersecurity through missions, labs, and community challenges.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-text-muted text-sm">
            <li><a href="#hero" className="hover:text-primary transition-colors">Home</a></li>
            <li><a href="#paths" className="hover:text-primary transition-colors">Paths</a></li>
            <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
            <li><a href="#testimonials" className="hover:text-primary transition-colors">Community</a></li>
          </ul>
        </div>

        {/* Resources / Social */}
        <div>
          <h3 className="font-semibold mb-3">Connect</h3>
          <div className="flex gap-4 text-primary">
            <a href="#" className="hover:text-primary-light transition-colors"><Github /></a>
            <a href="#" className="hover:text-primary-light transition-colors"><Twitter /></a>
            <a href="#" className="hover:text-primary-light transition-colors"><MessageCircle /></a>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-text-muted text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-text-muted text-sm">
        &copy; {new Date().getFullYear()} Cipher. All rights reserved.
      </div>
    </footer>
  );
}
