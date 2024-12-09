import Hero from '../components/HeroSection'
import Services from '../components/Services'
import Testoniamls from '../components/Testoniamls'
import About from './About'

function Home() {
  return (
    <div>
        <Hero/>
        <Services/>
        <About/>
        <Testoniamls/>
    </div>
  )
}

export default Home