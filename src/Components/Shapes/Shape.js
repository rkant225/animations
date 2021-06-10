import React from 'react';
import BoxDetailed from './BoxDetailed';
import BoxSimple from './BoxSimple';
import Triangle from './Triangle';
import Circle from './Circle';
import './Shape.css';
import Polygon from './Polygon';
import StarPolygon from './StarPolygon';


const Shape = () => {

    return (
        <div className="shape-page-container">
            <Circle/>
            <hr/>
            <Triangle/>
            <hr/>
            <BoxSimple/>
            <hr/>
            <BoxDetailed/>
            <hr/>
            <Polygon/>
            <hr/>
            <StarPolygon/>
        </div>
    )
}

export default Shape;