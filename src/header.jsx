export default function Header() {
  const links = ["Home", "Courses", "About", "Contact"];

  return (
    <header className="w-full h-fit fixed top-0 right-0 px-8 md:px-16 flex items-center justify-between py-8 bg-transparent z-15">
      <h1 className="text-2xl font-bold tracking-widest">CIPHER</h1>

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

      <button className="button1">
        Get Started
      </button>
    </header>
  );
}
