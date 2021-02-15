import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Components/pages/Home'
import Page2 from './Components/pages/Page2'

function App() {
  return (
    <>  
    <Router>
      <Navbar /> 
      <Switch>
        <Route path='/' exact component={Home}/>
      </Switch>
      <Switch>
        <Route path='/services' exact component={Page2}/>
      </Switch>
    </Router> 
    </>
  );
}

export default App;
