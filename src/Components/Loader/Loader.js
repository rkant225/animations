import React, { useEffect, useState } from 'react'
import './Loader.css'

const Loader = (props) => {
    // let {color} = props;
    // color = color || "white";

    const [color, setColor] = useState("white");

    
    const changeColor = ()=>{
        const colors = ['red', '#00ffff', 'yellow', 'white', 'blue', '#80ff00', '#ff00ff', '#00b6cc', '#ff7000'];
        const index = Math.floor(Math.random() * 10);
        const color = colors[index];
        setColor(color);
    }
    
    useEffect(()=>{
        setInterval(changeColor, 5000);
    },[])

    return (
        <div className="loader-page" onClick={changeColor}>
            <div className="loader-container">
                <div className="loader" title="Color will change in 5 seconds or Click anywhere to change color manualy.">
                    <div className="before-loader" style={{backgroundImage: `linear-gradient(to top, transparent, ${color})`}}></div>
                    <span></span>
                    <div className="after-loader" style={{backgroundColor : color, boxShadow : `0 0 10px 0px ${color}, 0 0 20px 0px ${color}, 0 0 30px 0px ${color}, 0 0 40px 0px ${color}, 0 0 50px 0px ${color}, 0 0 60px 0px ${color}, 0 0 70px 10px ${color}`}}></div>
                </div>
            </div>
        </div>
    )
}

export default Loader;
