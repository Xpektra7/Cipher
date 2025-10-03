export default function Paths() {
  const paths = [
    {
      icon: "🛡️",
      rank: "Recruit",
      desc: "Start your journey. Learn the basics of cybersecurity, networking, and ethical hacking foundations.",
    },
    {
      icon: "🕵️‍♂️",  
      rank: "Operative",
      desc: "Dive deeper into reconnaissance, scanning, and system vulnerabilities. Begin your first real missions.",
    },
    {
      icon: "🔐",
      rank: "Agent",
      desc: "Handle advanced exploits, reverse engineering, and digital forensics. Operate like a pro.",
    },
    {
      icon: "🧑🏻‍💻",
      rank: "Specialist",
      desc: "Master defense and offense—network security, malware analysis, and penetration testing tactics.",
    },
    {
      icon: "♾️",
      rank: "Cipher Master",
      desc: "Lead operations, automate attacks, and mentor new recruits. You’ve reached elite status.",
    },
  ];

  return (
    <section id="paths" className="w-full relative py-24 px-6 md:px-16 bg-black text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl relative inline-block md:text-4xl font-bold mb-3">
            Choose Your Path
            <span className="absolute -bottom-2 left-1/2 w-2/3 h-[3px] bg-primary -translate-x-1/2"></span>
        </h2>
        <p className="text-text-muted mt-2 text-lg">
          Progress through ranks as you master new cyber disciplines.
        </p>
      </div>

      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide">
        {paths.map((path) => (
          <div
            key={path.rank}
            className="min-w-[280px] md:min-w-[320px] snap-start card1"
          >
            <div>
              <div className="text-3xl mb-4">{path.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 ">{path.rank}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{path.desc}</p>
            </div>
            <button className="button1 mt-6 w-fit">Explore Path</button>
          </div>
        ))}
      </div>
    </section>
  );
}
