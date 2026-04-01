import { Link, Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
function App() {

  return (
    <>
    <nav style={{fontSize: '30px', fontWeight: 'bold'}}>
      <Link to='/'>Home</Link>|
      <Link to='/about'>About</Link>|
      <Link to='/contact'>Contact</Link>
    </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
