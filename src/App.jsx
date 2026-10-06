
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Html from './html'
import Javascript from './javascript'
import Css from './css'
import Nav from './nav'
import Home from './Home'
import HtmlForms from './htmlforms'
import HtmlIntro from './HtmlIntro'
import HtmlTags from './htmltags'
import Re from './re'
import "./App.css"

const App = () => {
  return (
   <>
   <BrowserRouter>
   <Nav/>
   <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/html' element={<Html/>}/>
    <Route path='/js' element={<Javascript/>}/>
    <Route path='/css' element={<Css/>}/>
    <Route path='/re' element={<Re/>}/>
    <Route path='/htmltags' element={<HtmlTags/>}/>
    <Route path='/htmlintro' element={<HtmlIntro/>}/>
    <Route path='/htmlforms' element={<HtmlForms/>}/>
   

   </Routes>
   
   </BrowserRouter>
   </>
  )
}

export default App
