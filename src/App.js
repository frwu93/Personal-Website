import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import SideMenu from './components/sidemenu'
import Introduction from './components/introduction'
import About from './components/about'



class App extends Component{
  render(){
    return (
      <div>
        <SideMenu></SideMenu>
        <Introduction></Introduction>
        <About></About>
      </div>
    );
  }
  }
 

export default App;
