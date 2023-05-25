import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import {BrowserRouter,Route ,Routes} from 'react-router-dom'
import Nav from './component/Nav'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import NotFound from './component/NotFound'
import Quiz from './Quiz'
function App3() {
  return (
    <div>
        <BrowserRouter>
       <Nav/>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/quiz' element={<Quiz/>} />
        <Route path='/*' element={<NotFound/>} />
       </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App3