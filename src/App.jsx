import Header from "./header";
import Hero from "./hero";
import MatrixRain from "./Matrix";

export default function App() {

  return (
    <>
    <MatrixRain/>
    <main className="w-full px-8 md:px-16 min-h-screen bg-[hsla(0,0%,0%,0.5)] ">
      {/* Header */}
      <Header/> 
      <Hero/>
    </main>
    </>
  )
}

