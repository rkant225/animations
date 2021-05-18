import React, { useEffect, useState } from 'react'
import './Grid.css';

const Grid = (props) => {

    // const [color, setColor] = useState('red');

    // const changeColor = ()=>{
    //     // const colors = ['red', '#00ffff', 'yellow', 'white', 'blue', '#80ff00', '#ff00ff', '#00b6cc', '#ff7000'];
    //     const colors = ['#00ff0a', '#ff4000', '#ffff00', '#40ff00', '#0040ff', '#ff00ff', '#00c5ff', '#00ffff', '#ffffff', '#80ff00'];
    //     const index = Math.floor(Math.random() * 10);
    //     const color = colors[index];
    //     setColor(color);
    // }
    
    // useEffect(()=>{
    //     setInterval(changeColor, 1000);
    // },[])

    useEffect(()=>{
        const color= "yellow";
        const container = document.getElementById('grid-container-id');
        container.innerHTML = "";

        let innerHtmlString = "";
        const singleSpan = `<span class='dot-span' style='--color : ${color};'></span>`;

        const innerHeight = window.innerHeight;
        const innerWidth = window.innerWidth;

        const numberOfSpans_in_width = Math.round(innerWidth/41);
        const numberOfSpans_in_height = Math.round(innerHeight/41);
        
        for(var i=0; i < numberOfSpans_in_height; i++){
            for(var j=0; j < numberOfSpans_in_width; j++){
                innerHtmlString = innerHtmlString + singleSpan;
            }
        }

        container.innerHTML = innerHtmlString;
    }, []);

    return (
        <div id="grid-container-id" className="grid-container">
            
        </div>
    )
}

export default Grid;