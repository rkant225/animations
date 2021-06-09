import React, { useRef } from 'react';
import catSound from '../../assets/cat.wav'
import './Cat.css';

const Cat = () => {

    const catAudioControl = useRef();

    const handleCatClick = ()=>{
        const catAudioCtrl = catAudioControl.current;
        catAudioCtrl.play()
    }
    
    return (
        <div className="cat-page-container">
            <div className="cat-container" onClick={handleCatClick}>

                <div className="cat-ear-1">
                    <div className="cat-inner-ear-1"></div>
                </div>

                <div className="cat-ear-2">
                    <div className="cat-inner-ear-2"></div>
                </div>

                <div className="cat-face">

                    <div className="cat-eye-1">
                        <div className="cat-eye-ball"></div>
                    </div>

                    <div className="cat-eye-2">
                        <div className="cat-eye-ball"></div>
                    </div>

                    <div className="cat-nose">
                        <div className="cat-nose-hair-1"></div>
                        <div className="cat-nose-hair-2"></div>
                    </div>

                </div>

                <div className="cat-body"></div>
                <div className="cat-leg-1"></div>
                <div className="cat-leg-2"></div>
                <div className="cat-tail"></div>
            </div>

            <audio ref={catAudioControl} id="cat-audio">
                <source src={catSound}/>
            </audio>

        </div>
    )
}

export default Cat;
