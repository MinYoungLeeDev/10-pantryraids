import React from 'react';

import {Navi, Cards} from './components';

import './App.css';

class App extends React.Component{

  render(){
    return(
      <div className="App">
        <Navi />
        <Cards />
      </div>
    );
  }
}

export default App;
