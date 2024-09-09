import React from 'react'
import './Home.css'
import Profile from './Profile'
import Contact from './Contact'
import Interests from './Interests'

function Home() {
    return (
        <section className="container-fluid canvas">
            <div className="container section-container">
                <Profile />
                <hr />
                <Contact />
                <hr />
                <Interests />
            </div>
        </section >
    )
}

export default Home