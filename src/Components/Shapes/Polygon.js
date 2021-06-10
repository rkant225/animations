import React, { useEffect, useState } from 'react';

const Polygon = () => {
    const[CLIP_PATH, setCLIP_PATH] = useState('');
    const[Height, setHeight] = useState(20);
    const[Width, setWidth] = useState(20);

    const[Radius, setRadius] = useState(100);
    const[Points, setPoints] = useState(3);

    const updateFinalClipPathInConsole = (final_clip_path)=>{
        console.clear();
        console.log(`clip-path: polygon(${final_clip_path})`)
    }

    const updateCLIP_PATH =()=>{
        let final_points = [];
        const ANGLE_STEP = (Math.PI * 2) / Points;
        const targetDiv = document.getElementById('shape-polygon');

        if(targetDiv){
            //Center of targetDiv
            let center_X = targetDiv.clientWidth / 2;
            let center_Y = targetDiv.clientHeight / 2;

            for(let i=1; i<=Points; i++){
                const x = center_X + Math.cos(i * ANGLE_STEP) * Radius;
                const y = center_Y + Math.sin(i * ANGLE_STEP) * Radius;
                final_points.push({ x:  Math.round(x), y : Math.round(y)});
            }
        }

        const final_clip_path = final_points.map((point)=>{
            return `${point.x}px ${point.y}px`;
        }).join(',');
        

        updateFinalClipPathInConsole(final_clip_path);
        setCLIP_PATH(final_clip_path)
    }
    

    useEffect(()=>{
        updateCLIP_PATH();
    }, [Height, Width, Points, Radius]);

    return (
        <div className="shape-container" style={{display : 'flex', justifyContent : 'center', alignItems : 'center', flexWrap : 'wrap', color : 'white'}}>

            <div className="info" title="You can change the number of points to change the shape of polygon. As the number of points become more then clip-path value will become larger so copy it from Console. Open Console by 'Ctrl + Shift + i'">i</div>


            {/* Actual Shape */}
            <div id="shape-polygon" className="shape shape-polygon" style={{'--CLIP_PATH' : CLIP_PATH, '--Height' : `${Height}rem`, '--Width' : `${Width}rem`}}></div>

            {/* Controls */}
            <div>
                Height(rem) : <input type="number" value={Height} onChange={(e)=>{setHeight(e.target.value)}}/> 
                {`(${Height * 16}px)`}
                <br/>
                Height(rem) : <input type="number" value={Width} onChange={(e)=>{setWidth(e.target.value)}}/>
                {`(${Width * 16}px)`}
                <br/>
                Radius(px) : <input type="number" value={Radius} onChange={(e)=>{setRadius(e.target.value)}}/>
                <br/>
                Points(rem) : <input type="number" value={Points} onChange={(e)=>{setPoints(e.target.value)}}/>
            </div>

            <pre className="final-css">
                {`
                    .polygon{
                        height: ${Height};
                        width: ${Width};
                        background-color: red;
                        clip-path: COPY FROM CONSOLE(Open console by "Ctrl + Shift + i");
                    }
                `}
            </pre>

        </div>
    )
}

export default Polygon
