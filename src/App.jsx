import { useState } from 'react'
// import './App.css'
import MainHeader from './common/MainHeader'
import MainFooter from './common/MainFooter'
import Home from './sections/home/Home'



function App() {

  return (
    <>
      <MainHeader />
      <Home /> 
      <MainFooter />
    </>
  )
}

export default App
