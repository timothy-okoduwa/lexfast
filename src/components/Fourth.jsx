import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import d from './images/done.png'
import { useNavigate } from 'react-router-dom';

const Fourth = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate()
    const handleClose = () => setShow(false);
    const handleShow = () => { setShow(true); };
    const handleShow2 = () => { setShow(false); navigate('/') };
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



                                    <div className="col-12 col-lg-6">
                                        <div className='lello'>First name</div>
                                        <input type="text" className='flerf' placeholder='Enter your first name' />
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <div className='lello'>Last  name</div>
                                        <input type="text" className='flerf' placeholder='Enter your last name' />
                                    </div>


                                </div>

                            </div>
                        </div>
                        <div className='d-flex align-items-center mb-5'>
                            <div className="container " >
                                <div className='row'>



                                    <div className="col-12 col-lg-6">
                                        <div className='lello'>Email</div>
                                        <input type="text" className='flerf' placeholder='Email
example@gmail.com' />
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <div className='lello'>Confirm email</div>
                                        <input type="text" className='flerf' placeholder='example@gmail.com' />
                                    </div>


                                </div>

                            </div>
                        </div>
                        <div className='d-flex align-items-center mb-5'>
                            <div className="container " >
                                <div className='row'>



                                    <div className="col-12 col-lg-6">
                                        <div className='lello'>Phone number</div>
                                        <input type="text" className='flerf' placeholder='+2345678890' />
                                    </div>



                                </div>

                            </div>
                        </div>
                        <div className='d-flex align-items-center mb-5'>
                            <div className="container " >
                                <div className='row'>

                                    <div>
                                        <button className='flerf2' onClick={handleShow}>SUBMIT</button>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>

                <Modal.Body>
                    <div className="container">
                        <div className='d-flex justify-content-center'>
                            <img src={d} alt="" />
                        </div>
                        <div className='d-flex justify-content-center mt-3'>
                            <div className='success'>Successful!</div>
                        </div>
                        <div className='d-flex justify-content-center mt-4'>
                            <div className='yprr'>Your request has been successfully submitted!
                                We will get back to you shortly.</div>
                        </div>
                        <div className='d-flex justify-content-center mt-4'>
                            <div>
                                <button className='cony' onClick={handleShow2}>Continue</button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>

            </Modal>
        </div>
    )
}

export default Fourth