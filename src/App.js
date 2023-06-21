import './App.css';
import React , {Component} from 'react';
import {BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import { Home} from './Home'
import {About} from './About';
import {Contact} from './Contact';
import {ErrorPage} from './ErrorPage';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path='/' Component={Home}/>
            <Route exact path='/about' Component={About}/>
            <Route exact path="/contact" Component={Contact}/>

          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
export default App;
