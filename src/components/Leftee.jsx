import React from 'react';
import l from './images/leff.png';
import { MdArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
const Leftee = ({ step, setStep }) => {
      const navigate = useNavigate();
  const move = () => {
    if (step === 1) {
      navigate('/'); // navigate to home page when on first step
    } else {
      setStep(step - 1); // go back to previous step
    }
  };

  return (
    <div style={{ marginTop: '35px' }} className="gigigi">
      <div className="container">
        <div
          className="d-flex justify-content-start"
          style={{ marginTop: '-35px' }}
        >
          <button className="chstt" onClick={move}>
            {' '}
            <MdArrowBack /> Back
          </button>
        </div>
        <div className="fhfu mt-5">Start your company in minutes</div>
        <div className="answer">Answer a few questions to get started</div>
        <div className="mt-5">
          <div className="d-flex align-items-center mb-5">
            <span className={`numberr ${step >= 1 ? 'red' : ''}`}>1</span>{' '}
            <span className="ctype">Company type</span>
          </div>
          <div className="d-flex align-items-center mb-5">
            <span className={`numberr ${step >= 2 ? 'red' : ''}`}>2</span>{' '}
            <span className="ctype">Registration state type</span>
          </div>
          <div className="d-flex align-items-center mb-5">
            <span className={`numberr ${step >= 3 ? 'red' : ''}`}>3</span>{' '}
            <span className="ctype">Company Name</span>
          </div>
          <div className="d-flex align-items-center mb-5">
            <span className={`numberr ${step >= 4 ? 'red' : ''}`}>4</span>{' '}
            <span className="ctype">Submit request</span>
          </div>
          <div className="d-flex align-items-center mb-5">
            <div style={{ marginRight: '60px' }}>
              <img src={l} alt="" style={{ width: '100%' }} />
            </div>
            <button className="chstt">CHAT WITH US</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftee;
