import { useState, useEffect } from "react";
import { Slack, Github, Linkedin, Twitter } from "lucide-react";export default function Testimonials() {
  const testimonials = [
    { user: "@n3tghost", text: "Cypher turned learning into missions. I actually *wanted* to study." },
    { user: "@Cypherrookie", text: "The labs feel real. I broke into my first simulated system today 🔥" },
    { user: "@himuratakezo", text: "Finally, a cybersecurity platform that doesn’t feel boring or academic." },
    { user: "@0xshadow", text: "This feels like training for the field — not just watching videos." },
    { user: "@pentestpilot", text: "Cypher made me confident enough to start real CTFs. Worth it." },
  ];

  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let current = 0;
    const fullText = `[${testimonials[index].user}] $ ${testimonials[index].text}`;
    const interval = setInterval(() => {
      setDisplayed(fullText.slice(0, current++));
      if (current > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % testimonials.length);
          setDisplayed("");
        }, 2000);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section id="community" className="w-full    py-24 px-6 md:px-16 bg-bg-main text-text-main">
      <div className="text-center mb-12">
        <h2 className="text-3xl relative inline-block md:text-4xl font-bold mb-3">
            From the Community
            <span className="absolute -bottom-2 left-1/2 w-2/3 h-[3px] bg-primary -translate-x-1/2"></span>
        </h2>
        <p className="text-text-muted text-lg">Real hackers. Real stories. Real progress.</p>
      </div>

      <div className="w-full max-w-3xl mx-auto bg-bg-secondary border border-primary/20 rounded-lg p-6 text-white relative">
        {/* Mac-style dots */}
        <div className="flex gap-2 mb-4">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>

        <p className="whitespace-pre-wrap text-base tracking-wide">
          <span className="text-primary">{displayed.split("] $ ")[0]}]</span> {/* username */}
          <span className="text-text-main"> $ {displayed.split("] $ ")[1]}</span> {/* testimonial */}
          <span className="animate-pulse text-text-muted">▌</span>
        </p>
      </div>

      {/* Community links */}
        <div className="flex justify-center gap-6 mt-6">
          <a href="#" className="text-primary hover:text-primary-light transition-colors"><Slack /></a>
          <a href="#" className="text-primary hover:text-primary-light transition-colors"><Linkedin /></a>
          <a href="#" className="text-primary hover:text-primary-light transition-colors"><Github /></a>
          <a href="#" className="text-primary hover:text-primary-light transition-colors"><Twitter /></a>
        </div>
    </section>
  );
}
