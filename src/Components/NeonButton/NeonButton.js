import React from 'react'
import './NeonButton.css';

const NeonButton = () => {
    const getRandomHexColor = ()=>{
        return `#${Math.floor(Math.random()*16777215).toString(16)}`;
    }
    return (
        <div className="neon-button-page-container">
            <div className="neon-button-1" style={{'--colorButton1' : '#0080ff'}}>
                <span className="border-top-1"></span>
                <span className="border-right-1"></span>
                <span className="border-bottom-1"></span>
                <span className="border-left-1"></span>
                Neon Button (A)
            </div>

            <div className="neon-button-2" style={{'--colorButton2' : '#80ff00'}}>
                <span className="border-top-2"></span>
                <span className="border-right-2"></span>
                <span className="border-bottom-2"></span>
                <span className="border-left-2"></span>
                Neon Button (B)
            </div>

            <div className="neon-button-3" style={{'--colorButton3' : '#ff4000'}}>
                <span className="border-top-3"></span>
                <span className="border-right-3"></span>
                <span className="border-bottom-3"></span>
                <span className="border-left-3"></span>
                Neon Button (C)
            </div>

            <div className="neon-button-message">
                <span className="neon-button-message-border-top"></span>
                <span className="neon-button-message-border-right"></span>
                <span className="neon-button-message-border-bottom"></span>
                <span className="neon-button-message-border-left"></span>
                Hover on these buttons to cool CSS effects.
            </div>
        </div>
    )
}

export default NeonButton
