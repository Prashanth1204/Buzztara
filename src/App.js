import './App.css';
import {Route,Switch} from "react-router-dom";
import Main from "./components/Main";
import Loggedin from "./components/Loggedin";
import Signup from "./components/Signup";

function App() {
  return (
    
      <Switch>
          <Route exact path="/Buzztara" component={Main}/>
          <Route exact path="/Buzztara/logged" component={Loggedin} />
          <Route exact path="/Buzztara/signup" component={Signup} />
      </Switch>

  );
}

export default App;
