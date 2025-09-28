import Header from "./header";
import Hero from "./hero";
import MatrixRain from "./Matrix";

export default function App() {

  return (
    <>
    <MatrixRain/>
    <main className="w-full\ min-h-screen bg-[hsla(0,0%,0%,0.5)] ">
      {/* Header */}
      <Header/> 
      <Hero/>
    </main>
    </>
  )
}

