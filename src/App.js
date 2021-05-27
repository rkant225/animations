import { Switch,Route,Link} from "react-router-dom";
import './App.css';
import Cup from './Components/Cup/Cup';
import CircularRings from './Components/Rings/Rings';
import Loader from './Components/Loader/Loader';
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Smiley from "./Components/Smiley/Smiley";
import Grid from "./Components/Grid/Grid";
import NeonButton from "./Components/NeonButton/NeonButton";

function App() {
  return (
    <>
      <div className="home-button" onClick={()=>{window.location.href = '/animations'}}></div>
      <Switch>
        
        <Route path="/cup" render={(props)=>{return <Cup {...props}/>}}/>
        <Route path="/rings" render={(props)=>{return <CircularRings {...props}/>}}/>
        <Route path="/loader" render={(props)=>{return <Loader {...props}/>}}/>
        <Route path="/smiley" render={(props)=>{return <Smiley {...props}/>}}/>
        <Route path="/grid" render={(props)=>{return <Grid {...props}/>}}/>
        <Route path="/neon-button" render={(props)=>{return <NeonButton {...props}/>}}/>

        <Route path="/" render={(props)=>{return <Home {...props}/>}}/>
        <Route path="/animations" render={(props)=>{return <Home {...props}/>}}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
