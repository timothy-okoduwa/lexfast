import React, { useState, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import d from './images/done.png';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import TextField from '@mui/material/TextField';

const Fourth = ({ formData }) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleShow2 = () => {
    setShow(false);
    navigate('/');
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_sxjthvf',
        'template_xgpo1wk',
        form.current,
        'DizLTxqJVxiPYUR3f'
      )
      .then(
        (result) => {
          console.log(result.text);
          handleShow();
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div>
        <div className="container">
          <div className="fhfu">Company structure</div>
          <div className="answer">
            Choose the legal entity that is right for your business
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <input type="hidden" name="country" value={formData.country} />
              <input type="hidden" name="city" value={formData.city} />
              <input type="hidden" name="state" value={formData.state} />
              <input
                type="hidden"
                name="company_name"
                value={formData.companyName}
              />
              <input
                type="hidden"
                name="company_type"
                value={formData.companyType}
              />
              <input
                type="hidden"
                name="industry"
                value={formData.companyIndustry}
              />
            </div>
            <div className="mt-5">
              <div className="d-flex align-items-center mb-5">
                <div className="container ">
                  <div className="row">
                    <div className="col-12 col-lg-6">
                      <TextField
                        id="outlined-basic"
                        label="Enter your first name"
                        variant="outlined"
                        name="firstname"
                        style={{ width: '100%', marginTop: '27px' }}
                      />
                    </div>
                    <div className="col-12 col-lg-6">
                      <TextField
                        id="outlined-basic"
                        label="Enter your last name"
                        variant="outlined"
                        name="lastname"
                        style={{ width: '100%', marginTop: '27px' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center mb-5">
                <div className="container ">
                  <div className="row">
                    <div className="col-12 col-lg-6">
                      <TextField
                        id="outlined-basic"
                        label="Example@mail.com"
                        variant="outlined"
                        name="email"
                        style={{ width: '100%', marginTop: '27px' }}
                      />
                    </div>
                    <div className="col-12 col-lg-6">
                      <TextField
                        id="outlined-basic"
                        label="Example@mail.com"
                        variant="outlined"
                        style={{ width: '100%', marginTop: '27px' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center mb-5">
                <div className="container ">
                  <div className="row">
                    <div className="col-12 col-lg-6">
                      <TextField
                        id="outlined-basic"
                        label="+2345678890"
                        variant="outlined"
                        name="phone"
                        style={{ width: '100%', marginTop: '27px' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center mb-5">
                <div className="container ">
                  <div className="row">
                    <div>
                      <button className="flerf2" type="submit" value="Send">
                        SUBMIT
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="container">
            <div className="d-flex justify-content-center">
              <img src={d} alt="" />
            </div>
            <div className="d-flex justify-content-center mt-3">
              <div className="success">Successful!</div>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <div className="yprr">
                Your request has been successfully submitted! We will get back
                to you shortly.
              </div>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <div>
                <button className="cony" onClick={handleShow2}>
                  Continue
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Fourth;
