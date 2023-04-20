import React from 'react'
import f1 from './images/flag-1.png'
import f2 from './images/flag-2.png'
import f3 from './images/flag-3.png'
import f4 from './images/flag-4.png'
import f5 from './images/flag-5.png'
import f6 from './images/flag-6.png'
import f7 from './images/flag-7.png'
const Hero = () => {
    return (
        <div className='dide pt-4'>
            <div className='container '>
                <div className='startbh'>Start and manage your business in any French-speaking African Country in under 10 minutes </div>
                <div className='moves mt-3'>Lexfast moves all middlemen, making it easy for you to launch and start your business. One dashboard for your incorporation, accounting payroll, compliance and tax needs</div>
                <div className="dfdf">
                    <div className='flag-holder row'>
                        <div className='col-12 col-lg-1 mb-4 memb'>
                            <img src={f1} alt="" className='caders' />
                        </div>
                        <div className='col-12 col-lg-1 mb-4 memb'>
                            <img src={f2} alt="" className='caders' />
                        </div>
                        <div className='col-12 col-lg-1 mb-4 memb'>
                            <img src={f3} alt="" className='caders' />
                        </div>
                        <div className='col-12 col-lg-1 mb-4 memb'>
                            <img src={f4} alt="" className='caders' />
                        </div>
                        <div className='col-12 col-lg-1 mb-4 memb'>
                            <img src={f5} alt="" className='caders' />
                        </div>
                        <div className='col-12 col-lg-1 mb-4 memb'>
                            <img src={f6} alt="" className='caders' />
                        </div>
                        <div className='col-12 col-lg-1 mb-4 memb'>
                            <img src={f7} alt="" className='caders' />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero