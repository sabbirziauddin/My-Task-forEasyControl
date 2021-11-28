import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Navigation from './Shared/Navigation/Navigation';
import MyTask from './Components/MyTask/MyTask';


function App() {
  return (
    <div className="App">
      
      <Router>
        <Navigation />
        <Switch>
          <Route path='/myTask' >
            <MyTask></MyTask>
          </Route>
        </Switch>

      </Router>
      
      
    </div>
  );
}

export default App;
