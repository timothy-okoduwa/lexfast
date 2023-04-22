import React from 'react'
import s from '../pages/images/soc.png'
import b from '../pages/images/Group 8725.png'
import o from '../pages/images/orange.png'
import a from '../pages/images/afr.png'
const Trusted = () => {
    return (
        <div>
            <div className="container">
                <div className='trusted'>Trusted by</div>
                <div className="puh-y">
                    <div className="row">
                        <div className="col-12 col-lg-3">
                            <div className='d-flex justify-content-center mb-4'>
                                <img src={s} alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-3">
                            <div className='d-flex justify-content-center mb-4'>
                                <img src={b} alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-3">
                            <div className='d-flex justify-content-center mb-4'>
                                <img src={o} alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-3">
                            <div className='d-flex justify-content-center mb-4'>
                                <img src={a} alt="" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className='hoess'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div>
                                <div className='ready mb-3'>Ready to launch your business in a french-speaking Africa? Start today</div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className='ouas'>
                                <div>
                                    <button className='startnj mb-4'>START your company</button>
                                    <button className='case'>Read our case studies</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trusted