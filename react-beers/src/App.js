import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import AllBeers from './pages/AllBeers'
import NewBeer from './pages/NewBeer'
import Beer from './pages/Beer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/beers" component={AllBeers} />
          <Route exact path="/beers/:id" component={Beer}/>
          <Route path="/random-beer" render={props=> <Beer {...props} isRandom />}/>
          <Route path="/new-beer" component={NewBeer}/>
          <Route render={()=><h1>404</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
