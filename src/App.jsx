import Header from './components/Header'
import Navbar from './components/Navbar'
import './App.css'
import Home from './pages/Home'
import {Routes , Route} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Appointments from './pages/Appointments'
import Services from './components/Services'
function App() {

  return (
    <div>
          <Header/>
          <Navbar/>
      <Routes>
  
        <Route  path='/' element={<Home/>} />
        <Route  path='/about' element={<About/>} />
        <Route  path='/contact' element={<Contact/>} />
        <Route  path='/services' element={<Services/>} />

        
        <Route  path='/book-appointment' element={<Appointments/>} />




    </Routes>
    <Footer/>
    </div>
  )
}

export default App