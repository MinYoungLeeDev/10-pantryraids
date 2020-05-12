import React from 'react';
import {Navi} from './components';
import API from './api';

import './App.css';

class App extends React.Component{

  render(){
    return(
        <div className="App">
          <Navi />
          <div className="cardWrap">
            
              <API />          
            
          </div>
        </div>
    );
  }
}

export default App;
