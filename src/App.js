import React,{Component} from 'react';
import {Header,Footer} from './Components/Navbar';

export default class App extends Component{
  render(){
    return(
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}
