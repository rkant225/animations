import React from 'react'
import './Tubelight.css';

const Tubelight = () => {
    return (
        <div className="tubelight-page-container">
           <div className="text-card tubelight-card">
                <div className="tubelight">
                    Tubelight
                </div>

                <div className="tube">
                     <div className="tube-holder-left">
                         <div className="left-pin-up"></div>
                         <div className="left-pin-down"></div>
                     </div>
                     <div className="tube-holder-right">
                         <div className="right-pin-up"></div>
                         <div className="right-pin-down"></div>
                     </div>
                </div>
           </div>
        </div>
    )
}

export default Tubelight;