import React from 'react'

const Second = ({ setStep, step }) => {

    const move = () => {
        setStep(step + 1)
    }
    return (
        <div>
            <div>
                <div className="container">
                    <div className='fhfu'>Company structure</div>
                    <div className='answer'>Choose the legal entity that is right for your business</div>


                    <div className='mt-5'>
                        <div className='d-flex align-items-center mb-5'>
                            <div className="container " >
                                <div className='row'>
                                    <div className='lello'>Country</div>
                                    <div>
                                        {/* <input type="text" className='flerf' /> */}
                                        <select className='flerf'>
                                            <option value="">Select your country</option>
                                            <option value="1">USA</option>
                                            <option value="2">Canada</option>
                                        </select>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='d-flex align-items-center mb-5'>
                            <div className="container " >
                                <div className='row'>
                                    <div className='lello'>City</div>
                                    <div>
                                        <input type="text" className='flerf' placeholder='Enter Your City' />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='d-flex align-items-center mb-5'>
                            <div className="container " >
                                <div className='row'>
                                    <div className='lello'>State</div>
                                    <div>
                                        <input type="text" className='flerf' placeholder='Enter Your State' />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='d-flex align-items-center mb-5'>
                            <div className="container " >
                                <div className='row'>

                                    <div>
                                        <button className='flerf2' onClick={move}>Continue</button>
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

export default Second