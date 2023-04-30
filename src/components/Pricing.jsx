import React from 'react'
import { BsFillCheckSquareFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
const Pricing = () => {
    return (
        <div className='ppp' id="priciing">
            <div className="container">
                <div className="allin">All Inclusive Pricing </div>
                <div className="row mt-5">
                    <div className="col-12 col-lg-6 mb-5 who">
                        <div>
                            <div className='pay'>Pay once </div>
                            <div className='ots'>One time setup fee</div>
                            <div className='shakes' ><span className='ajee'>$599</span>/one time set up fee</div>
                            <div>
                                <Link to='/start' style={{ textDecoration: 'none' }}>
                                    <button className='lfu2'>START YOUR COMPANY</button>
                                </Link>

                                <div className='mt-4'>
                                    <BsFillCheckSquareFill className='aff' />  <span className='gvt mx-3'>Government fees, filings & everything in between</span>
                                </div>
                                <div className='mt-4'>
                                    <BsFillCheckSquareFill className='aff' />  <span className='gvt mx-3'>Name check and clearance</span>
                                </div>
                                <div className='mt-4'>
                                    <BsFillCheckSquareFill className='aff' />  <span className='gvt mx-3'>Registered agent</span>
                                </div>
                                <div className='mt-4'>
                                    <BsFillCheckSquareFill className='aff' />  <span className='gvt mx-3'>Unique Identification number</span>
                                </div>
                                <div className='mt-4'>
                                    <BsFillCheckSquareFill className='aff' />  <span className='gvt mx-3'>National Social Security Fund Registration </span>
                                </div>
                                <div className='mt-4'>
                                    <BsFillCheckSquareFill className='aff' />  <span className='gvt mx-3'>Business Certificate</span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 swet">
                        <div>
                            <div className='pay'>Pay monthly</div>
                            <div className='ots'>Monthly Plan</div>
                            <div className='shakes' ><span className='ajee'>$1100</span>/month</div>
                            <div>
                                <Link to='/start' style={{ textDecoration: 'none' }}>
                                    <button className='lfu2'>START YOUR COMPANY</button>
                                </Link>
                                <div className='mt-4'>
                                    <BsFillCheckSquareFill className='aff' />  <span className='gvt mx-3'>Includes all agent fees to keep your business moving</span>
                                </div>
                                <div className='mt-4'>
                                    <BsFillCheckSquareFill className='aff' />  <span className='gvt mx-3'>Accounting and reporting </span>
                                </div>
                                <div className='mt-4'>
                                    <BsFillCheckSquareFill className='aff' />  <span className='gvt mx-3'>Taxes </span>
                                </div>
                                <div className='mt-4'>
                                    <BsFillCheckSquareFill className='aff' />  <span className='gvt mx-3'>Compliance </span>
                                </div>
                                <div className='mt-4'>
                                    <BsFillCheckSquareFill className='aff' />  <span className='gvt mx-3'>Payroll and employee management </span>
                                </div>
                                <div className='mt-4'>
                                    <BsFillCheckSquareFill className='aff' />  <span className='gvt mx-3'>Trademarks , IP</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing