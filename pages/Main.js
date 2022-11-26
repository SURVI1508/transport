import React from 'react'
import Home from './allCOMPONENTS/Home'
import WhyChoose from './allCOMPONENTS/WhyChoose.js'
import Serviceplace from './Serviceplace'
import Unmachedservice from './allCOMPONENTS/Unmachedservice.js'
import Footer from './allCOMPONENTS/Footer.js'
const Main = () => {
    return (
        <div>
            <Home />
            <WhyChoose />
            <Serviceplace />
            <Unmachedservice />
            <Footer/>
        </div>
    )
}

export default Main