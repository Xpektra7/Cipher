import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = ["Home", "Paths", "Features", "Contact"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 right-0 contain flex items-center justify-between py-6 px-8 md:px-16 z-50 transition-all duration-400 ${
        scrolled ? "bg-bg-main/40 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <h1 className="text-2xl font-bold tracking-widest">CIPHER</h1>

      {/* Desktop Nav */}
      <nav className="md:flex gap-8 hidden">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="relative text-lg font-medium group"
          >
            {link}
            <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>
        ))}
      </nav>

      <button className="button1 hidden md:block">Get Started</button>

      {/* Hamburger */}
      <div
        className="md:hidden flex flex-col justify-between w-6 h-5 cursor-pointer relative z-50"
        onClick={() => setOpen(!open)}
      >
        <span
          className={`h-[2px] w-full bg-primary rounded transition-all duration-300 ${
            open ? "rotate-45 translate-y-[9px]" : ""
          }`}
        ></span>
        <span
          className={`h-[2px] w-full bg-primary rounded transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`h-[2px] w-full bg-primary rounded transition-all duration-300 ${
            open ? "-rotate-45 -translate-y-[9px]" : ""
          }`}
        ></span>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 right-0 w-screen max-w-[560px] h-screen bg-bg-main text-primary flex flex-col items-center justify-center gap-8 text-xl transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setOpen(false)}
            className="hover:text-primary transition-colors duration-200"
          >
            {link}
          </a>
        ))}
        <button className="button1 text-md" onClick={() => setOpen(false)}>
          Get Started
        </button>
      </div>
    </header>
  );
}
