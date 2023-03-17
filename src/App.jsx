import Footer from "./components/Footer"
import Hero from "./components/Hero"
import IconsB from "./components/IconsB"
import LoverAnimal from "./components/LoverAnimal"
import Navbar from "./components/Navbar"
import OurServices from "./components/OurServices"
import Section1 from "./components/Section1"
import Section2 from "./components/Section2"
import Section3 from "./components/Section3"
import Section4 from "./components/Section4"

function App() {
  return (
    <div className="main">
      <Navbar/>
      <Hero/>
      <OurServices/>
      <Section1/>
      <LoverAnimal/>
      <Section2/>
      <Section3/>
      <IconsB/>
      <Section4/>
      <Footer/>
    </div>
  )
}

export default App
