export default function CTA() {

  return (
    <section
      id="cta"
      className="w-full    py-32 px-6 md:px-16 bg-bg-main text-text-main flex flex-col items-center justify-center text-center relative"
    >
      {/* Optional subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none"></div>

      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Ready to Level Up Your Cyber Skills?
      </h2>
      <p className="text-text-muted text-lg mb-10 max-w-2xl">
        Join Cypher today and start your journey through hands-on missions, ranked progression, and real-world labs.
      </p>

      <div className="flex flex-col sm:flex-row gap-6">
        <button className="button1">Get Started</button>
        <button className="button2">Learn More</button>
      </div>
    </section>
  );
}
