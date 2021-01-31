import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import About from './components/about'
import Introduction from './components/introduction'


class App extends Component{
  render(){
    return (
      <div>
        <Introduction></Introduction>
        <About></About>
      </div>
    );
  }
  }
 

export default App;
