import React from 'react'
import './LandingP.css'
import Hero from '../../components/Hero'
import Trusted from '../../components/Trusted'
import AllInOne from '../../components/AllInOne'
import Focus from '../../components/Focus'
import Pricing from '../../components/Pricing'
import Brings from '../../components/Brings'
import GetStarted from '../../components/GetStarted'
const LandingP = () => {
    return (
        <div>
            <Hero />
            <Trusted />
            <AllInOne />
            <Focus />
            <Pricing />
            <Brings />
            <GetStarted />
        </div>
    )
}

export default LandingP