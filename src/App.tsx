import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import HowItWorks from './components/HowItWorks'
import KeyFeatures from './components/KeyFeatures'
import CompetitorSnapshot from './components/CompetitorSnapshot'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <KeyFeatures />
      <CompetitorSnapshot />
      <Footer />
    </div>
  )
}

export default App

