import Navbar from '../../components/elements/navbar/Navbar'
import Hero from '../../components/page-sections/hero-section/Hero'
import FractalsCatalog from '../../components/page-sections/fractals-section/FractalsCatalog'
import './Home.css'

export default function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <FractalsCatalog />
    </>
  )
}
