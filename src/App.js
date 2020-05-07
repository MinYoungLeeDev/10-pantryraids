import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import {BrowserRouter as BRouter, Switch, Route} from 'react-router-dom';

import {Navi, Cards, About} from './components';


import './App.css';

class App extends React.Component{

  render(){
    return(
      <BRouter>
        <div className="App">
          <Navi />
          <Switch>
            <Route path="/" exact>
              <div>
                <Cards />
              </div>
            </Route>
            <Route path="/About">
              <div>
                <About />
              </div>
            </Route>
          </Switch>
        </div>
      </BRouter>
    );
  }
}

export default App;
