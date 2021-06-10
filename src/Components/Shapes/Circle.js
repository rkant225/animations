import React, { useState } from 'react';
import './Shape.css';


const Circle = () => {
    


    const [Diameter_X, setDiameter_X] = useState(10);
    const [Diameter_Y, setDiameter_Y] = useState(10);
    const [Circle_Rotate_By, setCircle_Rotate_By] = useState(0);


    

    return (
        <div className="shape-page-container">

            {/* CIRCLE */}
            <div className="shape-container" style={{display : 'flex', justifyContent : 'center', alignItems : 'center', flexWrap : 'wrap', color : 'white'}}>

                <div className="info" title="If you want to make CIRCLE then keep height and width same. For elipse you need to set height different that width.">i</div>

                {/* Actual Shape */}
                <div className="shape shape-circle" style={{'--Diameter_Y' : `${Diameter_Y}rem`, '--Diameter_X' : `${Diameter_X}rem`, '--Circle_Rotate_By' : `${Circle_Rotate_By}deg` }}></div>
                
    
                {/* Controls */}
                <div className="triangle-controls">
                    height(rem) : <input type="number" value={Diameter_Y} onChange={(e)=>{setDiameter_Y(e.target.value)}}/>
                    <br/>
                    width(rem) : <input type="number" value={Diameter_X} onChange={(e)=>{setDiameter_X(e.target.value)}}/>
                    <br/>
                    rotate(deg) : <input type="number" value={Circle_Rotate_By} onChange={(e)=>{setCircle_Rotate_By(e.target.value)}}/>
                </div>

                <pre className="final-css">
                    {`
                        .circle{
                            height: ${Diameter_Y}rem;
                            width: ${Diameter_X}rem;
                            background-color: blueviolet;
                            border-radius: 50%;
                            transform: rotate(${Circle_Rotate_By});
                        }
                    `}
                </pre>
            </div>

        </div>
    )
}

export default Circle;