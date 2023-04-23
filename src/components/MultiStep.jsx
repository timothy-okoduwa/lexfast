import React, { useState } from 'react'
import CompanyStructure from './CompanyStructure'
import Second from './Second'
import { MdArrowBack } from 'react-icons/md'
import Third from './Third'
import { useNavigate } from 'react-router-dom'
import Fourth from './Fourth'

const MultiStep = () => {
    const [step, setStep] = useState(1);
    const navigate = useNavigate()

    const renderForm = () => {
        switch (step) {
            case 1:
                return (
                    <CompanyStructure step={step} setStep={setStep} />
                );
            case 2:
                return (
                    <Second step={step} setStep={setStep} />
                );
            case 3:
                return (
                    <Third step={step} setStep={setStep} />
                );
            case 4:
                return (
                    <Fourth step={step} setStep={setStep} />
                );
            default:
                return null;
        }
    };

    const move = () => {
        if (step === 1) {
            navigate('/'); // navigate to home page when on first step
        } else {
            setStep(step - 1); // go back to previous step
        }
    };

    return (
        <div>
            <div className='d-flex justify-content-end' >
                <button className='chstt' onClick={move} > <MdArrowBack /> Back</button>
            </div>
            <div>
                {renderForm()}
            </div>
        </div>
    );
};

export default MultiStep;
