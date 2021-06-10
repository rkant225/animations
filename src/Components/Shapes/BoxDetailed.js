import React, { useState } from 'react';
import './Shape.css';


const BoxDetailed = () => {
    
    const [BoxHeight, setBoxHeight] = useState(10);
    const [BoxWidth, setBoxWidth] = useState(10);
    const [Unit, setUnit] = useState('rem');
    const [HZ_Radius_top_left, setHZ_Radius_top_left] = useState(0);
    const [VR_Radius_top_left, setVR_Radius_top_left] = useState(0);
    const [HZ_Radius_top_right, setHZ_Radius_top_right] = useState(0);
    const [VR_Radius_top_right, setVR_Radius_top_right] = useState(0);
    const [HZ_Radius_bottom_left, setHZ_Radius_bottom_left] = useState(0);
    const [VR_Radius_bottom_left, setVR_Radius_bottom_left] = useState(0);
    const [HZ_Radius_bottom_right, setHZ_Radius_bottom_right] = useState(0);
    const [VR_Radius_bottom_right, setVR_Radius_bottom_right] = useState(0);
    const [Box_Detailed_Rotate_By, setBox_Detailed_Rotate_By] = useState(0);

    const toggleUnit=()=>{
        if(Unit == 'rem'){
            setUnit('%')
        } else {
            setUnit('rem')
        }
    }

    return (
        <div className="shape-page-container">

            {/* Square Rectandle Border Shapes (DETAILED) */}
            <div className="shape-container" style={{display : 'flex', justifyContent : 'center', alignItems : 'center', flexWrap : 'wrap', color : 'white'}}>

                <div className="info" title="'border-top-left-radius' The property takes in one or two values that define the radii of a quarter ellipse that defines the shape of the corner of the outer border edge. The first value is the horizontal radius, the second the vertical radius. If the second value is omitted it is copied from the first. If either length is zero, the corner is square, not rounded. Percentages for the horizontal radius refer to the width of the border box, whereas percentages for the vertical radius refer to the height of the border box. Negative values are not allowed.">i</div>

                {/* Actual Shape */}
                <div className="shape shape-curvey-box-detailed" style={
                    {
                        '--BoxHeight' : `${BoxHeight}rem`,
                        '--BoxWidth' : `${BoxWidth}rem`,
                        '--HZ_Radius_top_left' : `${HZ_Radius_top_left}${Unit}`,
                        '--VR_Radius_top_left' : `${VR_Radius_top_left}${Unit}`,
                        '--HZ_Radius_top_right' : `${HZ_Radius_top_right}${Unit}`,
                        '--VR_Radius_top_right' : `${VR_Radius_top_right}${Unit}`,
                        '--HZ_Radius_bottom_right' : `${HZ_Radius_bottom_right}${Unit}`,
                        '--VR_Radius_bottom_right' : `${VR_Radius_bottom_right}${Unit}`,
                        '--HZ_Radius_bottom_left' : `${HZ_Radius_bottom_left}${Unit}`,
                        '--VR_Radius_bottom_left' : `${VR_Radius_bottom_left}${Unit}`,
                        '--Box_Detailed_Rotate_By' : `${Box_Detailed_Rotate_By}deg`
                    }
                }>
                    {/* No Content */}
                </div>


                {/* Controls */}
                <div className="triangle-controls">
                        height(rem) : <input type="number" value={BoxHeight} onChange={(e)=>{setBoxHeight(e.target.value)}}/>
                        <br/>
                        width(rem) : <input type="number" value={BoxWidth} onChange={(e)=>{setBoxWidth(e.target.value)}}/>
                        <br/>
                        HZ_Radius_top_left({Unit}) : <input type="number" value={HZ_Radius_top_left} onChange={(e)=>{setHZ_Radius_top_left(e.target.value)}}/>
                        VR_Radius_top_left({Unit}) : <input type="number" value={VR_Radius_top_left} onChange={(e)=>{setVR_Radius_top_left(e.target.value)}}/>
                        <br/>
                        HZ_Radius_top_right({Unit}) : <input type="number" value={HZ_Radius_top_right} onChange={(e)=>{setHZ_Radius_top_right(e.target.value)}}/>
                        VR_Radius_top_right({Unit}) : <input type="number" value={VR_Radius_top_right} onChange={(e)=>{setVR_Radius_top_right(e.target.value)}}/>
                        <br/>
                        HZ_Radius_bottom_right({Unit}) : <input type="number" value={HZ_Radius_bottom_right} onChange={(e)=>{setHZ_Radius_bottom_right(e.target.value)}}/>
                        VR_Radius_bottom_right({Unit}) : <input type="number" value={VR_Radius_bottom_right} onChange={(e)=>{setVR_Radius_bottom_right(e.target.value)}}/>
                        <br/>
                        HZ_Radius_bottom_left({Unit}) : <input type="number" value={HZ_Radius_bottom_left} onChange={(e)=>{setHZ_Radius_bottom_left(e.target.value)}}/>
                        VR_Radius_bottom_left({Unit}) : <input type="number" value={VR_Radius_bottom_left} onChange={(e)=>{setVR_Radius_bottom_left(e.target.value)}}/>
                        <br/>
                        rotate(deg) : <input type="number" value={Box_Detailed_Rotate_By} onChange={(e)=>{setBox_Detailed_Rotate_By(e.target.value)}}/>
                        <br/>
                        <button onClick={()=>{toggleUnit()}}>Change Unit</button>
                </div>

                <pre className="final-css">
                    {`
                        .curved-box{
                            height: ${BoxHeight}rem;
                            width: ${BoxWidth}rem;
                            background-color: transparent;
                            border: 5px solid white;
                            border-top-left-radius: ${HZ_Radius_top_left}${Unit} ${VR_Radius_top_left}${Unit};
                            border-top-right-radius: ${HZ_Radius_top_right}${Unit} ${VR_Radius_top_right}${Unit};
                            border-bottom-left-radius: ${HZ_Radius_bottom_left}${Unit} ${VR_Radius_bottom_left}${Unit};
                            border-bottom-right-radius: ${HZ_Radius_bottom_right}${Unit} ${VR_Radius_bottom_right}${Unit};
                            transform: rotate(${Box_Detailed_Rotate_By});
                        }
                    `}
                </pre>
            </div>



        </div>
    )
}

export default BoxDetailed;