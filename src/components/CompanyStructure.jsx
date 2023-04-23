import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
const CompanyStructure = ({ step, setStep }) => {


    const move = () => {
        setStep(step + 1)
    }
    return (
        <div>
            <div className="container">
                <div className='fhfu'>Company structure</div>
                <div className='answer'>Choose the legal entity that is right for your business</div>


                <div className='mt-5'>
                    <div className='d-flex align-items-center mb-5'>
                        <div className="container climb" onClick={move}>
                            <div className='row'>
                                <div className='col-lg-11'>
                                    <div className='seem'>SARL</div>
                                    <div className='grate'>A great choice for small businesses and more flexible</div>
                                </div>
                                <div className='col-lg-1 d-flex align-items-center' >
                                    <div>
                                        <MdKeyboardArrowRight className='riun' />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='d-flex align-items-center mb-5'>
                        <div className="container climb" onClick={move}>
                            <div className='row'>
                                <div className='col-lg-11'>
                                    <div className='seem'>S.A</div>
                                    <div className='grate'>Great for startups fundraising from investors </div>
                                </div>
                                <div className='col-lg-1 d-flex align-items-center' >
                                    <div>
                                        <MdKeyboardArrowRight className='riun' />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='d-flex align-items-center mb-5'>
                        <div className="container climb" onClick={move}>
                            <div className='row'>
                                <div className='col-lg-11'>
                                    <div className='seem'>ETS</div>
                                    <div className='grate'>Sole proprietorship</div>
                                </div>
                                <div className='col-lg-1 d-flex align-items-center' >
                                    <div>
                                        <MdKeyboardArrowRight className='riun' />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='d-flex align-items-center mb-5'>
                        <div className="container climb" onClick={move}>
                            <div className='row'>
                                <div className='col-lg-11'>
                                    <div className='seem'>SAAS</div>
                                    <div className='grate'>Simplified public limited company</div>
                                </div>
                                <div className='col-lg-1 d-flex align-items-center' >
                                    <div>
                                        <MdKeyboardArrowRight className='riun' />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default CompanyStructure