import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Problem from './components/Problem'
import Solution from './components/Solution'
import HowItWorks from './components/HowItWorks'
import KeyFeatures from './components/KeyFeatures'
import CompetitorSnapshot from './components/CompetitorSnapshot'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app min-h-screen">
      <Hero />
      <TrustBar />
      <Problem />
      <Solution />
      <HowItWorks />
      <KeyFeatures />
      <CompetitorSnapshot />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App
