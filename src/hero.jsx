import MatrixRain from "./Matrix";

export default function Hero() {

  return (

    <section className="relative w-full h-screen text-center flex flex-col items-center z-10 justify-center-safe">
        <MatrixRain/>
        <div className="h-full absolute w-full bg-black/35 -z-1"/>
        <h1 className="font-orbitron text-5xl md:text-7xl leading-tight  text-white">
          <span className="inline-block text-primary">Decode</span> the
          Future.
        </h1>

        <p className="mt-4 text-lg md:text-xl text-text-light font-space-grotesk">
          Master cybersecurity from the core —{" "}
          <span className="text-primary-light">Learn</span>
          <span className="mx-2">•</span>
          <span className="text-primary-light">Hack</span>
          <span className="mx-2">•</span>
          <span className="text-primary-light">Defend</span>
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#get-started"
            className="inline-flex button1 hover:scale-[1.02] transition transform"
          >
            Get Started
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M5 12h14M13 5l7 7-7 7"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a
            href="#courses"
            className="button2"
          >
            Explore Courses
          </a>
        </div>

        {/* small binary watermark line */}
        <div className="hidden md:inline-block mt-6 text-xs tracking-widest text-text-muted  select-none">
          01000011·01001001·01010000·01001000·01000101·01010010
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#000]" />

    </section>
  );
}
