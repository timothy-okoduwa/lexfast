import React, { useState } from 'react'

const Third = ({ setStep, step, setFormData, formData }) => {
    const [companyName, setCompanyName] = useState('')
    const [companyType, setCompanyType] = useState('')
    const [companyIndustry, setCompanyIndustry] = useState('')
    const move = () => {
        setStep(step + 1)
        setFormData({ ...formData, companyName, companyType, companyIndustry });
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
                                    <div className='lello'>Company name</div>
                                    <div>
                                        <input type="text" className='flerf' placeholder='Balaride' value={companyName} onChange={(e) => setCompanyName(e.target.value)} />


                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='d-flex align-items-center mb-5'>
                            <div className="container " >
                                <div className='row'>
                                    <div className='lello'>Company type</div>
                                    <div>
                                        <select className='flerf' value={companyType} onChange={(e) => setCompanyType(e.target.value)} >
                                            <option value="">Select your country</option>
                                            <option value="music">music</option>
                                            <option value="drugs">drugs</option>
                                        </select>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='d-flex align-items-center mb-5'>
                            <div className="container " >
                                <div className='row'>
                                    <div className='lello'>Company Industry</div>
                                    <div>
                                        <select className='flerf' value={companyIndustry} onChange={(e) => setCompanyIndustry(e.target.value)}>
                                            <option value="">Select your country</option>
                                            <option value="ent">ent</option>
                                            <option value="ball">ball</option>
                                        </select>
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

export default Third