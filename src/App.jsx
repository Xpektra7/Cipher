import Courses from "./Courses";
import CTA from "./CTA";
import Features from "./Features";
import Footer from "./Footer";
import Header from "./header";
import Hero from "./hero";
import Testimonials from "./Testimonials";

export default function App() {

  return (
    <>
      <Header/> 
    <main className="w-full min-h-screen bg-[hsl(0,0%,0%)] ">
      {/* Header */}
      <Hero/>
      <Courses/>
      <Features/>
      <Testimonials/>
      <CTA/>
    </main>
    <Footer/>
    </>
  )
}

