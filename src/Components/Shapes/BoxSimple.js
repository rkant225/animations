import React, { useState } from 'react';
import './Shape.css';


const BoxSimple = () => {
    const [BoxHeight_simple , setBoxHeight_simple ] = useState(10);
    const [BoxWidth_simple , setBoxWidth_simple ] = useState(10);
    const [Radius_top_left_simple , setRadius_top_left_simple ] = useState(0);
    const [Radius_top_right_simple , setRadius_top_right_simple ] = useState(0);
    const [Radius_bottom_left_simple , setRadius_bottom_left_simple ] = useState(0);
    const [Radius_bottom_right_simple , setRadius_bottom_right_simple ] = useState(0);
    const [Box_Simple_Rotate_By , setBox_Simple_Rotate_By ] = useState(0);


    

    return (
        <div className="shape-page-container">

            

            {/* Square Rectandle Border Shapes (SIMPLE) */}
            <div className="shape-container" style={{display : 'flex', justifyContent : 'center', alignItems : 'center', flexWrap : 'wrap', color : 'white'}}>
            
                <div className="info" title="Adjust the radius of all 4 corners to get the different shapes.">i</div>
                {/* Actual Shape */}
                <div className="shape shape-curvey-box-simple" style={
                    {
                        '--BoxHeight_simple' : `${BoxHeight_simple}rem`,
                        '--BoxWidth_simple' : `${BoxWidth_simple}rem`,
                        '--Radius_top_left_simple' : `${Radius_top_left_simple}rem`,
                        '--Radius_top_right_simple' : `${Radius_top_right_simple}rem`,
                        '--Radius_bottom_left_simple' : `${Radius_bottom_left_simple}rem`,
                        '--Radius_bottom_right_simple' : `${Radius_bottom_right_simple}rem`,
                        '--Box_Simple_Rotate_By' : `${Box_Simple_Rotate_By}deg`
                    }
                }>
                    {/* No Content */}
                </div>

                {/* Controls */}
                <div className="triangle-controls">
                        height(rem) : <input type="number" value={BoxHeight_simple} onChange={(e)=>{setBoxHeight_simple(e.target.value)}}/>
                        <br/>
                        width(rem) : <input type="number" value={BoxWidth_simple} onChange={(e)=>{setBoxWidth_simple(e.target.value)}}/>
                        <br/>
                        Radius_top_left(rem) : <input type="number" value={Radius_top_left_simple} onChange={(e)=>{setRadius_top_left_simple(e.target.value)}}/>
                        <br/>
                        Radius_top_right(rem) : <input type="number" value={Radius_top_right_simple} onChange={(e)=>{setRadius_top_right_simple(e.target.value)}}/>
                        <br/>
                        Radius_bottom_left(rem) : <input type="number" value={Radius_bottom_left_simple} onChange={(e)=>{setRadius_bottom_left_simple(e.target.value)}}/>
                        <br/>
                        Radius_bottom_right(rem) : <input type="number" value={Radius_bottom_right_simple} onChange={(e)=>{setRadius_bottom_right_simple(e.target.value)}}/>
                        <br/>
                        rotate(deg) : <input type="number" value={Box_Simple_Rotate_By} onChange={(e)=>{setBox_Simple_Rotate_By(e.target.value)}}/>
                </div>

                <pre className="final-css">
                    {`
                        .curved-box{
                            height: ${BoxHeight_simple}rem;
                            width: ${BoxWidth_simple}rem;
                            background-color: deepskyblue;
                            border: 1px solid white;
                            border-top-left-radius: ${Radius_top_left_simple}rem;
                            border-top-right-radius: ${Radius_top_right_simple}rem;
                            border-bottom-left-radius: ${Radius_bottom_left_simple}rem;
                            border-bottom-right-radius: ${Radius_bottom_right_simple}rem;
                            transform: rotate(${Box_Simple_Rotate_By});
                        }
                    `}
                </pre>
            </div>

        </div>
    )
}

export default BoxSimple;