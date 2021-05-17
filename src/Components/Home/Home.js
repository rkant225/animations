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
            </div>

            <div style={{color : 'white', position : 'absolute', bottom : '0px', left : '46%', fontSize : '.6rem' }}>More will be added soon...!!!</div>
        </>
    )
}

export default Home;