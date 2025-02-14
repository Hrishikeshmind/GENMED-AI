import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { HowItWorks } from './components/HowItWorks'
import { Testimonials } from './components/Testimonials'
import { FAQ } from './components/FAQ'

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <Testimonials />
      <FAQ />
    </div>
  )
}

export default App
