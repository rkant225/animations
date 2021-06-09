import React from 'react';
import './Toster.css';

const Toster = () => {

    return (
        <div className="toster-page-container">
            <div className="toster-container">

                <div className="toster-tost-1">
                    <div className="toster-tost-head"></div>
                    <div className="toster-tost-body"></div>
                </div>

                <div className="toster-tost-2">
                    <div className="toster-tost-head"></div>
                    <div className="toster-tost-body"></div>
                </div>
                {/* <div className="toster-tost toster-tost-2"></div> */}

                <div className="toster-back-body">

                    <div className="toster-handle-slot-1"></div>
                    <div className="toster-handle-slot-2"></div>

                    <div className="toster-handle">
                        <div className="toster-handle-cover"></div>
                    </div>
                </div>

                <div className="toster-front-body">
                    <div className="toster-shine"></div>
                    <div className="toster-btn-1"></div>
                    <div className="toster-btn-2"></div>
                    <div className="toster-btn-3"></div>
                </div>

                

                <div className="toster-base">
                    <div className="toster-leg-1"></div>
                    <div className="toster-leg-2"></div>
                    <div className="toster-leg-3"></div>
                    <div className="toster-leg-4"></div>
                </div>
                <div className="toster-base-back"></div>
                
            </div>
        </div>
    )
}

export default Toster;
