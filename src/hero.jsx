import { useState, useRef, useEffect } from "react";
import HackTerminal from "./HackTerminal";

export default function Hero() {
  const [logs, setLogs] = useState(["> Initializing Cipher shell..."]);
  const containerRef = useRef(null);

  useEffect(() => {
    const fakeLogs = [
      "[OK] Environment loaded.",
      "> Connecting to secure node...",
      "[OK] Connection established.",
      "> Scanning open ports...",
      "[OK] Found 3 vulnerable nodes.",
      "> Deploying encryption layer...",
      "[OK] Cipher shield active.",
      "> sudo cipher enroll --course 'Intro to Pentest'",
      "[OK] Registered.",
      "> ssh-keygen -t ed25519",
      "Saving key...",
      "[OK] Key generated successfully.",
      "> Access granted. Welcome, Operative.",
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < fakeLogs.length) {
        setLogs((prev) => [...prev, fakeLogs[i++]]);
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
      } else clearInterval(interval);
    }, 900);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative w-full min-h-screen flex items-center">
      <div className="w-full px-8 md:px-16 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: copy */}
          <div className="max-w-2xl text-left">
            <h1 className="font-orbitron text-5xl md:text-6xl leading-tight text-white">
              <span className="inline-block text-green-400">Decode</span> the
              Future.
            </h1>

            <p className="mt-4 text-lg md:text-xl text-slate-200 font-space-grotesk">
              Master cybersecurity from the core —{" "}
              <span className="text-green-300">Learn</span>.
              <span className="mx-2">•</span>
              <span className="text-green-300">Hack</span>.
              <span className="mx-2">•</span>
              <span className="text-green-300">Defend</span>.
            </p>

            <button className="mt-8 flex gap-4 items-center">
              <a
                href="#get-started"
                className="inline-flex items-center gap-3 bg-gradient-to-br from-primary to-primary-light px-6 py-3 rounded-lg font-semibold shadow-2xl hover:scale-[1.02] transition transform"
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
                className="inline-flex items-center gap-3 border border-slate-600 text-slate-200 px-5 py-3 rounded-lg font-medium hover:border-green-400 transition"
              >
                Explore Courses
              </a>
            </button>

            {/* small binary watermark line */}
            <div className="mt-6 text-xs text-slate-400 font-mono select-none">
              01000011·01001001·01010000·01001000·01000101·01010010
            </div>
          </div>
          {/* Right: interactive hack console */}
          <div className="flex items-center justify-center">
            <HackTerminal/>
          </div>
        </div>
      </div>
    </section>
  );
}
