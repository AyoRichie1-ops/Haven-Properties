import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Properties from './pages/Properties'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ErrorPage from './pages/ErrorPage'
function App() {
return ( <BrowserRouter> 
    <ScrollToTop/>
    <Navbar/>
    <div className='pt-20'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  <Footer/>
</BrowserRouter>

)
}

export default App
