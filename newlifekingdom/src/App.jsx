import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Header from './components/Header/Header'
import Nav from './components/nav/Nav'

const App = () => {
  return (
    <div>
        <Header/>
        <Nav/>
        <About/>
        <Contact/>

    </div>
    
  )
}

export default App