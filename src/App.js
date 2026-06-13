import useDarkMode from "./useDarkMode"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ThemeContext from './ThemeContext'

function App() {
    const[darkMode, setdarkMode] = useDarkMode()
      
  return (
     <BrowserRouter>

      <ThemeContext.Provider value={{darkMode, setdarkMode}}>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>

      <Footer/>
      </ThemeContext.Provider>

      
    </BrowserRouter>
  )
}

export default App