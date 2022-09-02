import React from 'react'
import PropTypes from 'prop-types'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Experience from './components/experiece/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'

const App = props => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experiences/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

App.propTypes = {}

export default App