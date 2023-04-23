import React from 'react'
import './Start.css'
import Leftee from '../../components/Leftee'
import MultiStep from '../../components/MultiStep'
const Start = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div>
                            <Leftee />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div>
                            <MultiStep />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Start