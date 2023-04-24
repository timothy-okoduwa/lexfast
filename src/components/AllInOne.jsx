import React from 'react'
import r from './images/reg.png'
import t from './images/tm.png'
import c from './images/comp.png'
import ca from './images/calc.png'
import p from './images/pay.png'
import b from './images/bag.png'
import d from './images/dashboard.png'
const AllInOne = () => {
    return (
        <>
            <div className='hkhk'>
                <div className="container">
                    <div className='ann'>
                        An All-in-one platform to manage the back office of your business
                    </div>
                    <div className="smalll">
                        Lexfast moves all middlemen, making it easy for you to launch and start your business. One dashboard for your incorporation, accounting payroll, compliance and tax needs
                    </div>

                    <div className='nene'>
                        <div className="row">
                            <div className="col-12 col-lg-4  d-flex justify-content-center mb-5">
                                <div className='wooo2'>
                                    <div>
                                        <div className='eclips'>
                                            <img src={r} alt="" />
                                        </div>
                                    </div>
                                    <div className='regg'>Register</div>
                                    <div className='wee'>We handle & manage  ETS, SARL, or SAS registration documents.</div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4  d-flex justify-content-center mb-5">
                                <div className='wooo2'>
                                    <div>
                                        <div className='eclips'>
                                            <img src={t} alt="" />
                                        </div>
                                    </div>
                                    <div className='regg'>Trademark IP</div>
                                    <div className='wee'>We search and protect your IP, trademark service or product, brand patent etc</div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4  d-flex justify-content-center mb-5">
                                <div className='wooo2'>
                                    <div>
                                        <div className='eclips'>
                                            <img src={c} alt="" />
                                        </div>
                                    </div>
                                    <div className='regg'>Compliance</div>
                                    <div className='wee'>Focus on your business while we handle regulatory, tax, registration  & declaration</div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4  d-flex justify-content-center mb-5">
                                <div className='wooo2'>
                                    <div>
                                        <div className='eclips'>
                                            <img src={ca} alt="" />
                                        </div>
                                    </div>
                                    <div className='regg'>Accounting </div>
                                    <div className='wee'>Our Agent will assist you with financial reporting for business & tax purposes </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4  d-flex justify-content-center mb-5">
                                <div className='wooo2'>
                                    <div>
                                        <div className='eclips'>
                                            <img src={p} alt="" />
                                        </div>
                                    </div>
                                    <div className='regg'>Payroll</div>
                                    <div className='wee'>Handle employer payroll pension and taxes all from our dashboard </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4  d-flex justify-content-center mb-5">
                                <div className='wooo2'>
                                    <div>
                                        <div className='eclips'>
                                            <img src={b} alt="" />
                                        </div>
                                    </div>
                                    <div className='regg'>On-going business</div>
                                    <div className='wee'>Additional services like fundraising contracts litigation & general advice </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-4">
                <div className="row">
                    <div className="col-12 col-lg-6 mb-4">
                        <div >
                            <div className='onee'>One Dashboard for all your administrative needs</div>
                            <div className='remotee'>
                                Remote unmoderated usability testing lets you test any digital product online without the presence of a moderator. This is accomplished by setting tasks and writing questions beforehand, which participants then complete on their own.
                            </div>
                            <div>
                                <button className='lfu'>Start my business</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div>
                            <img src={d} alt="" style={{ width: '100%' }} />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default AllInOne