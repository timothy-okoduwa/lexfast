import React from 'react'
import { Link } from 'react-router-dom'

const GetStarted = () => {
    return (
        <div className='get-started'>
            <div className="container">
                <div className='withs'>Get started with LEXFAST</div>
                <div className="cost">Start, manage and run your business in 26+ countries </div>
                <div className='propella'>
                    <div className='dunno'>
                        <Link to='/start' style={{ textDecoration: 'none' }}>
                            <button className='stmybu'>Start my business</button>
                        </Link>

                        <button className='stmybu2'>ALREADY INCORPORATED?</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default GetStarted