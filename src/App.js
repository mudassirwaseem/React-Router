import './App.css';
import Home from './Home'
import Weatherapp from './Weatherapp'
import Navbar from './Nav'



import Covid from './Covid'
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
<Route  exact path="/"  component={Home} />
<Route  exact path="/Weatherapp"  component={Weatherapp} />
<Route  exact path="/Covid"  component={Covid} />

    </Switch>
    </>
  );
}

export default App;
