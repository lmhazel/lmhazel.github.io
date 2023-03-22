import React from "react"
import { Routes, Route } from "react-router-dom"
import { BrowserRouter } from 'react-router-dom'
import "./App.css"

import Footer from "./component/Footer"

import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

const App = () => {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
