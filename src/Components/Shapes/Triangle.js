import React, { useState } from 'react';
import './Shape.css';


const Triangle = () => {



   
    const [Height, setHeight] = useState(5);
    const [Width, setWidth] = useState(5);
    const [BorderTop, setBorderTop] = useState(5);
    const [BorderRight, setBorderRight] = useState(5);
    const [BorderLeft, setBorderLeft] = useState(5);
    const [BorderBottom, setBorderBottom] = useState(5);
    const [Triangle_Rotate_By, setTriangle_Rotate_By] = useState(0);

    return (
        <div className="shape-page-container">

            {/* SQUARE, RECTANGLE, TRIANGLE And TRAPAZOID */}
            <div className="shape-container" style={{display : 'flex', justifyContent : 'center', alignItems : 'center', flexWrap : 'wrap', color : 'white'}}>

                <div className="info" title="To make a triangle you need to make height and width to 0px and give TOP border as 'top-border : 3rem solid red' And make LEFT and RIGHT border of same height(3rem) but keep them TRANSPARENT. Finaly make opposite (BOTTOM) border of 0rem">i</div>

                {/* Actual Shape */}
                <div className="shape shape-triangle" style={{'--Height' : `${Height}rem`, '--Width' : `${Width}rem`, '--BorderTop' : `${BorderTop}rem`, '--BorderRight' : `${BorderRight}rem`, '--BorderLeft' : `${BorderLeft}rem`, '--BorderBottom' : `${BorderBottom}rem`, '--Triangle_Rotate_By' : `${Triangle_Rotate_By}deg`}}>
                    {/* No content */}
                </div>

                {/* Controls */}
                <div className="triangle-controls">
                    height(rem) : <input type="number" value={Height} onChange={(e)=>{setHeight(e.target.value)}}/>
                    <br/>
                    width(rem) : <input type="number" value={Width} onChange={(e)=>{setWidth(e.target.value)}}/>
                    <br/>
                    border-top(rem) : <input type="number" value={BorderTop} onChange={(e)=>{setBorderTop(e.target.value)}}/>
                    <br/>
                    border-right(rem) : <input type="number" value={BorderRight} onChange={(e)=>{setBorderRight(e.target.value)}}/>
                    <br/>
                    border-left(rem) : <input type="number" value={BorderLeft} onChange={(e)=>{setBorderLeft(e.target.value)}}/>
                    <br/>
                    border-bottom(rem) : <input type="number" value={BorderBottom} onChange={(e)=>{setBorderBottom(e.target.value)}}/>
                    <br/>
                    rotate(deg) : <input type="number" value={Triangle_Rotate_By} onChange={(e)=>{setTriangle_Rotate_By(e.target.value)}}/>
                </div>

                <pre className="final-css">
                    {`
                        .different-other-shapes{
                            height: ${Height}rem;
                            width: ${Width}rem;
                            background-color: sienna;
                            border-top: ${BorderTop}rem solid blueviolet;
                            border-right: ${BorderRight}rem solid tomato;
                            border-left: ${BorderLeft}rem solid yellow;
                            border-bottom: ${BorderBottom}rem solid springgreen;
                            transform: rotate(${Triangle_Rotate_By});
                        }
                    `}
                </pre>

            </div>

        </div>
    )
}

export default Triangle;