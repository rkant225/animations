import React, { useState } from 'react'
import './Smiley.css'

const Smiley = (props) => {


    const handleMouseChange=(e)=>{
        // Current cordinate of cursor
        const x = e.clientX; 
        const y = e.clientY;

        // Center of the screen
        const center_x = window.innerWidth / 2;
        const center_y = window.innerHeight / 2;

        const eye_ball_1 = document.getElementsByClassName('eye-ball-1')[0];
        const eye_ball_2 = document.getElementsByClassName('eye-ball-2')[0];

        const tounge = document.getElementsByClassName('tounge')[0];
        tounge.style['height'] = '3.5rem';

        // Bottom-Left
        if(center_x > x && center_y < y){
            // console.log('Bottom-Left')
            eye_ball_1.style['top'] = '28%';
            eye_ball_1.style['left'] = '18%';

            eye_ball_2.style['top'] = '28%';
            eye_ball_2.style['right'] = '26%';

            tounge.style['height'] = '3.5rem';
        }

        // Bottom-Right
        if(center_x < x && center_y < y){
            // console.log('Bottom-Right')
            eye_ball_1.style['top'] = '28%';
            eye_ball_1.style['left'] = '28%';

            eye_ball_2.style['top'] = '28%';
            eye_ball_2.style['right'] = '17%';

            tounge.style['height'] = '3.2rem';
        }

        // Top-Left
        if(center_x > x && center_y > y){
            // console.log('Top-Left')
            eye_ball_1.style['top'] = '17%';
            eye_ball_1.style['left'] = '17%';

            eye_ball_2.style['top'] = '17%';
            eye_ball_2.style['right'] = '28%';

            tounge.style['height'] = '3.6rem';
        }

        // Top-Right
        if(center_x < x && center_y > y){
            // console.log('Top-Right')
            eye_ball_1.style['top'] = '16%';
            eye_ball_1.style['left'] = '27%';

            eye_ball_2.style['top'] = '16%';
            eye_ball_2.style['right'] = '17%';

            tounge.style['height'] = '3.35rem';
        }
        
    }

    const resetEyes = ()=>{
        const eye_ball_1 = document.getElementsByClassName('eye-ball-1')[0];
        const eye_ball_2 = document.getElementsByClassName('eye-ball-2')[0];

        eye_ball_1.style['top'] = '22%';
        eye_ball_1.style['left'] = '22%';

        eye_ball_2.style['top'] = '22%';
        eye_ball_2.style['right'] = '22%';   

        const tounge = document.getElementsByClassName('tounge')[0];
        tounge.style['height'] = '5rem';
    }


    return (
        <div className="smiley-container">

            <div className="face" onMouseMove={handleMouseChange} onMouseOut={resetEyes}>
                <div className="eye-1"></div>
                <div className="eye-ball-1"></div>
                <div className="eye-2"></div>
                <div className="eye-ball-2"></div>
                <div className="mouth"></div>
                <div className="tounge"></div>
            </div>
        </div>
    )
}

export default Smiley;
