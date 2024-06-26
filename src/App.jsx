import './App.css'
import Navbar from './comp/navbar/Navbar'
import Home from './pages/hero/Hero'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'

import {Route, Routes} from 'react-router-dom'
import SList from './pages/list/SList'
import Login from './pages/login/Login'

function App() {
  return (
    <main>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/list' element={<SList/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </main>
  )
}

export default App
