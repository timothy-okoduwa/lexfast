import React, { useState } from 'react';
import './Start.css';
import Leftee from '../../components/Leftee';
import MultiStep from '../../components/MultiStep';
const Start = () => {
    const [step, setStep] = useState(1);

   
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div>
              <Leftee step={step} setStep={setStep} />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div>
              <MultiStep step={step} setStep={setStep} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
