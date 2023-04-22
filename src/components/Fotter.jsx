import React from 'react'
import l from './images/lexlogo.png'
import { useLocation } from 'react-router-dom';
import { AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai'
import { BsFacebook, BsInstagram } from 'react-icons/bs'

const Fotter = () => {

    const location = useLocation();

    const isHiddenPage2 =
        location.pathname === '/start'


    return (

        <>
            {isHiddenPage2 ? null : (
                <div className='gwagwa'>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-5 mb-4">
                                <div>
                                    <img src={l} alt="" />
                                </div>
                            </div>
                            <div className="col-12 col-lg-7">
                                <div className="row d-flex align-items-center h-100">
                                    <div className="col-12 col-lg-2 mb-3 nkoko">Products</div>
                                    <div className="col-12 col-lg-2 mb-3 nkoko">
                                        Pricing
                                    </div>
                                    <div className="col-12 col-lg-2 mb-3 nkoko">Company</div>
                                    <div className="col-12 col-lg-2 mb-3 nkoko">Learn</div>
                                    <div className="col-12 col-lg-2 mb-3 nkoko">Support</div>
                                    <div className="col-12 col-lg-2 mb-3 nkoko">Contact us</div>
                                </div>
                            </div>
                        </div>
                        <div className='overdem' >

                        </div>
                        <div className='row mt-4'>

                            <div className="col-12 col-lg-10 mb-4">
                                <div>
                                    <div className='lexxx'>
                                        © 2023 Lexfast . All rights reserved.
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-2">
                                <div className="row ">
                                    <div className="col-12 col-lg-3 mb-4">
                                        <div>
                                            <AiOutlineTwitter className='nettoyou' />
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-3 mb-4">
                                        <div>
                                            <AiFillLinkedin className='nettoyou' />
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-3 mb-4">
                                        <div>
                                            <BsFacebook className='nettoyou' />
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-3 mb-4">
                                        <div>
                                            <BsInstagram className='nettoyou' />
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}



        </>




    )
}

export default Fotter