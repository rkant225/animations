import React from 'react'
import './Text.css';

const Text = () => {
    return (
        <div className="text-page-container">
           <div className="text-card" style={{'--displayColor' : '#03a9f4'}}>
                <span className="text-1-main">Water</span>
                <span className="text-1-secondary">Water</span>
           </div>
           <div className="text-card wooden-text" style={{'--displayColor' : '#ffff00'}}>
                <h1 className="text-2-main">Wooden Text</h1>
                <h1 className="text-2-secondary">Wooden Text</h1>
           </div>
           <div className="text-card star-text">
                <span className="text-4-main">Star Text</span>
                <span className="text-4-secondary">Star Text</span>
           </div>
           <div className="text-card" style={{'--displayColor' : '#00f500'}}>
                <span className="text-1-main">ReactJS</span>
                <span className="text-1-secondary">ReactJS</span>
           </div>
           <div className="text-card" style={{'--displayColor' : '#ff0040'}}>
                <span className="text-1-main">HTML</span>
                <span className="text-1-secondary">HTML</span>
           </div>
           <div className="text-card brick-text" style={{'--displayColor' : '#ffff00'}}>
                <h1 className="text-3-main">Brick Text</h1>
                <h1 className="text-3-secondary">Brick Text</h1>
           </div>
           
        </div>
    )
}

export default Text;