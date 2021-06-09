import React from 'react'
import './Home.css'

const Home = (props) => {
    const {history} = props;
    return (
        <>
            <div className="app-hedding">ANIMATIONS</div>

            

            <hr style={{borderTop : '3px solid white', marginTop : '1rem'}}/>
            <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center', flexWrap : 'wrap', height : '95vh', width : '100%'}}>
                <div className="button" onClick={()=>{history.push('/cup')}}>Cup</div>
                <div className="button" onClick={()=>{history.push('/loader')}}>Loader</div>
                <div className="button" onClick={()=>{history.push('/rings')}}>Rings</div>
                <div className="button" onClick={()=>{history.push('/smiley')}}>Smiley</div>
                <div className="button" onClick={()=>{history.push('/grid')}}>Grid</div>
                <div className="button" onClick={()=>{history.push('/neon-button')}}>Neon-Button</div>
                <div className="button" onClick={()=>{history.push('/text')}}>Text</div>
                <div className="button" onClick={()=>{history.push('/tubelight')}}>Tubelight</div>
                <div className="button" onClick={()=>{history.push('/fan')}}>Fan</div>
                <div className="button" onClick={()=>{history.push('/cat')}}>Cat</div>
            </div>

            <div className="more-items-message">More will be added soon...!!!</div>
        </>
    )
}

export default Home;