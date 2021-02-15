import './App.css';
import Navbar from './Components/Navbar';
import {Switch, Route} from 'react-router-dom'
import Home from './Components/pages/Home'
import Page2 from './Components/pages/Page2'

function App() {
  return (
    <>  
      <Navbar /> 
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
      <Switch>
        <Route exact path='/services' component={Page2}/>
      </Switch>
    </>
  );
}

export default App;
