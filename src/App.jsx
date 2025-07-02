import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Navbar from './components/HomePage/Navbar'
import Services from './pages/Services'
import Footer from './components/HomePage/Footer'
import AboutUs from './pages/AboutUs'
import EcommercePortofolio from './pages/Porofolio-pages/E-commerce'
import VideoEditingPortfolio from './pages/Porofolio-pages/VideoEditingPortfolio'
import ContactPage from './pages/ContactPage'

const App = () => {
  return (
    <div className='overflow-hidden'>
      <BrowserRouter>
      <Navbar/> 
       <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/services' Component={Services}/>
         <Route path='/about' Component={AboutUs}/>
         <Route path='/Ecommerce-portofolio' Component={EcommercePortofolio}/>
         <Route path='/VideoEditing-portfolio'Component={VideoEditingPortfolio}/>
         <Route path='/contact-us'Component={ContactPage}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App