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
import Text from "./Components/Text/Text";
import Tubelight from "./Components/Tubelight/Tubelight";
import Fan from "./Components/Fan/Fan";
import Cat from "./Components/Cat/Cat";
import Toster from "./Components/Toster/Toster";
import Shape from "./Components/Shapes/Shape";
import Owl from "./Components/Owl/Owl";

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
        <Route path="/text" render={(props)=>{return <Text {...props}/>}}/>
        <Route path="/tubelight" render={(props)=>{return <Tubelight {...props}/>}}/>
        <Route path="/fan" render={(props)=>{return <Fan {...props}/>}}/>
        <Route path="/cat" render={(props)=>{return <Cat {...props}/>}}/>
        <Route path="/toster" render={(props)=>{return <Toster {...props}/>}}/>
        <Route path="/shapes" render={(props)=>{return <Shape {...props}/>}}/>
        <Route path="/owl" render={(props)=>{return <Owl {...props}/>}}/>

        <Route path="/" render={(props)=>{return <Home {...props}/>}}/>
        <Route path="/animations" render={(props)=>{return <Home {...props}/>}}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
