import React, { useState } from 'react'

const Second = ({ setStep, step, setFormData, formData }) => {

    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')

    const move = () => {
        setStep(step + 1)
        setFormData({ ...formData, country, city, state });
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
                                        <select className='flerf' value={country} onChange={(e) => setCountry(e.target.value)} >
                                            <option value="">Select your country</option>
                                            <option value="usa">USA</option>
                                            <option value="canada">Canada</option>
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
                                        <input type="text" className='flerf' placeholder='Enter Your City' value={city} onChange={(e) => setCity(e.target.value)} />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='d-flex align-items-center mb-5'>
                            <div className="container " >
                                <div className='row'>
                                    <div className='lello'>State</div>
                                    <div>
                                        <input type="text" className='flerf' placeholder='Enter Your State' value={state} onChange={(e) => setState(e.target.value)} />
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