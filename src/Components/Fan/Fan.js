import React, { useRef } from 'react';
import fanSound from '../../assets/fan.mp3';
import './Fan.css';

const Fan = () => {

    const fanAudioControl = useRef();

    const handleFanButtonClick = (e)=>{
        const fanAudioCtrl = fanAudioControl.current;

        const ON = e.target.checked;
        if(ON){
            fanAudioCtrl.play()
        } else {
            fanAudioCtrl.pause()
        }
    }

    return (
        <div className="fan-page-container">
            <div className="fan-container" style={{'--primaryColor' : '#00ffff', '--secondaryColor' : '#0080ff'}}>
                <input type="checkbox" className="fan-button" onClick={handleFanButtonClick}/>
                <div className="motor">
                    <div className="wing wing-1"></div>
                    <div className="wing wing-2"></div>
                    <div className="wing wing-3"></div>
                </div>
                
                <div className="rod"></div>
                <div className="base"></div>

                <audio ref={fanAudioControl} loop id="fan-audio">
                    <source src={fanSound}/>
                </audio>

            </div>
        </div>
    )
}

export default Fan;
