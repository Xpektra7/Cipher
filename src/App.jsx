import Courses from "./Courses";
import Features from "./Features";
import HackTerminal from "./HackTerminal";
import Header from "./header";
import Hero from "./hero";
import MatrixRain from "./Matrix";

export default function App() {

  return (
    <>
    <main className="w-full min-h-screen bg-[hsl(0,0%,0%)] ">
      {/* Header */}
      <Header/> 
      <Hero/>
      <Courses/>
      <Features/>
    </main>
    </>
  )
}

