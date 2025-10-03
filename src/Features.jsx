import { Target, Cpu, TrendingUp, Users } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Gamified Learning",
      desc: "Learn through missions and challenges instead of lectures. Each task brings you closer to mastery.",
    },
    {
      icon: <Cpu className="w-8 h-8 text-primary" />,
      title: "Real-world Labs",
      desc: "Experiment in secure, simulated cyber environments that mirror real-world attack and defense scenarios.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Progress Tracking",
      desc: "Earn XP, climb ranks, and showcase your hacker journey through Cypher’s ranking system.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Community Support",
      desc: "Collaborate, compete, and grow with peers and mentors from the global cybersecurity community.",
    },
  ];

  return (
    <section id="features" className="w-full    py-24 px-6 md:px-16 bg-bg-main text-text-main">
      <div className="text-center mb-12">
        <h2 className="text-3xl relative inline-block md:text-4xl font-bold mb-3">
          Why Cypher?
          <span className="absolute -bottom-2 left-1/2 w-2/3 h-[3px] bg-primary -translate-x-1/2"></span>
        </h2>
        <p className="text-text-muted mt-2 text-lg">
          A smarter way to master cybersecurity — built for hackers, not students.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="card1"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mt-4 mb-2 texty">{feature.title}</h3>
            <p className="text-text-muted text-sm leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
