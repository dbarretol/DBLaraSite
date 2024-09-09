import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BASE_ROUTE } from './config.js';
// import './App.css'
import MainHeader from './common/MainHeader'
import MainFooter from './common/MainFooter'
import MainNav from './common/MainNav'

import Home from './sections/home/Home'
import Education from './sections/education/Education.jsx'



function App() {

  return (
    <>
      <BrowserRouter>
        <MainHeader />
        <MainNav />
        <main>
          <Routes>
            <Route path={BASE_ROUTE} element={<Home />} />
            <Route path={`${BASE_ROUTE}/Education`} element={<Education />} />

          </Routes>

        </main>


        <MainFooter />
      </BrowserRouter>
    </>
  )
}

export default App
