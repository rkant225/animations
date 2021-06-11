import React, { useRef } from 'react';
import owlSound from '../../assets/owl.mp3';
import './Owl.css';

const Owl = () => {

    const owlAudioControl = useRef();


    const animateFeathere=()=>{
        const feather_1 = document.getElementById('owl-feather-1');
        const feather_2 = document.getElementById('owl-feather-2');

        feather_1.classList.add("class-animate-owl-feather-1");
        feather_2.classList.add("class-animate-owl-feather-2");

        setTimeout(()=>{
            feather_1.classList.remove("class-animate-owl-feather-1");
            feather_2.classList.remove("class-animate-owl-feather-2");
        }, 800)

        const owlAudioCtrl = owlAudioControl.current;
        owlAudioCtrl.play();
    }

    return (
        <div className="owl-page-container">
            <div className="owl-container" onClick={animateFeathere}>
                <div className="branch-main">
                    <div className="branch-secondary"></div>
                </div>

                <div className="owl-ear-1"></div>
                <div className="owl-ear-2"></div>

                <div className="owl-body">

                    <div className="owl-eye owl-eye-1">
                        <div className="owl-eye-ball owl-eye-ball-1"></div>
                    </div>
                    
                    <div className="owl-eye owl-eye-2">
                        <div className="owl-eye-ball owl-eye-ball-2"></div>
                    </div>

                    <div id="owl-feather-1" className="owl-feather-1"></div>
                    <div id="owl-feather-2" className="owl-feather-2"></div>

                    <div className="owl-nose"></div>

                    <div className="owl-leg-1"></div>
                    <div className="owl-leg-2"></div>

                </div>
            </div>

            <audio ref={owlAudioControl} id="owl-audio">
                <source src={owlSound}/>
            </audio>

        </div>
    )
}

export default Owl;