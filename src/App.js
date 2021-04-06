import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation';
import {Route, Switch } from 'react-router-dom';
import Contact from './components/Contact';
import Services from './components/Services';
import LoginPage from './components/LoginPage';
import Home from './components/Home';
import Sell from './components/Sell';
import Buy from './components/Buy';
import SignUp from './components/SignUp';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <Navigation/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/sell' component={Sell}/>
          <Route exact path='/buy' component={Buy}/>
          <Route exact path='/signup' component={SignUp}/>
          <Route exact path='/cart' component={Cart}/>
        </Switch>
      
    </>
  );
}

export default App;
