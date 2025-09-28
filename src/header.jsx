export default function Header() {
  const links = ["Home", "Courses", "About", "Contact"];

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-8 md:px-16 py-8 bg-transparent z-10">
      <h1 className="text-2xl font-bold tracking-widest">CIPHER</h1>

      <nav className="flex gap-8">
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

      <button className="px-5 py-2 bg-primary hover:bg-primary-dark text-black font-semibold rounded-lg transition">
        Get Started
      </button>
    </header>
  );
}
