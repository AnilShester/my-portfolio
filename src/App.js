import './App.css'
import Resume from './components/Resume'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  return (
    <main className="">
      <Navbar />
      <Home />
      <Resume />
      <Portfolio />
      <Contact />
    </main>
  )
}

export default App
