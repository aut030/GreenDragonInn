import React from 'react';
import './SideScroll.css';

function Job({closeJob}){   
    return (
        <div className='job-background'>
            <div className='job-container'>
                <div className='title-close-button'>
                    <button onClick={() => closeJob(false)}>X</button>
                </div>
                <div className='title'>
                    <h1>Quest</h1>
                </div>
                <div className='body'>
                    <p>Click Join to Connect with this group of Adventerurs!</p>
                </div>
                <div className='footer'>
                    <button onClick={() => closeJob(false)} id='cancel-button'>Cancel</button>
                    <button onClick={() => closeJob(false)}>Join!</button>
                </div>
            </div>
        </div>
    )
}

export default Job;