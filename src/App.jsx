import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
import MainHeader from './common/MainHeader'
import MainFooter from './common/MainFooter'
import Home from './sections/home/Home'
import MainNav from './common/MainNav'

import { BASE_ROUTE } from './config.js';


function App() {

  return (
    <>
      <BrowserRouter>
        <MainHeader />
        <MainNav />
        <main>
          <Routes>
            <Route path={BASE_ROUTE} element={<Home />} />

          </Routes>

        </main>


        <MainFooter />
      </BrowserRouter>
    </>
  )
}

export default App
