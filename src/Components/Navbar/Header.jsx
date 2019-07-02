import React,{Component} from 'react';

export default class Header extends Component{
  render(){
    return(
      <nav className='navbar navbar-expand-lg navbar-dark fixed-top' style={{backgroundColor:'#333'}}>
        <span className='navbar-brand'>CycleFeverTV</span>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle Navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'><a href='#home' className='nav-link'>Home</a></li>
            <li className='nav-item'><a href='#something'className='nav-link'>Something</a></li>
            <li className='nav-item'><a href='#else' className='nav-link'>Else</a></li>
            <li className='nav-item'><a href='#last' className='nav-link'>Last one</a></li>
          </ul>
        </div>
      </nav>
    );
  }
};
