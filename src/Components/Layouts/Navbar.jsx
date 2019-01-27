import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const Navbar = () =>{
  return(
    <nav className='navbar navbar-expand-lg navbar-dark fixed-top' style={{backgroundColor:'#1c2028'}}>
      <Link to='/' className='navbar-brand'><span style={{color:'#fc0100'}}>CFTV</span></Link>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'><Link to='/CarFeverTV' className='nav-link'>CarFeverTV</Link></li>
          <li className='nav-item'><Link to='/CycleFeverTV' className='nav-link'>CycleFeverTV</Link></li>
          <li className='nav-item'><Link to='/RollingMediaChannel' className='nav-link'>Rolling Media Channel</Link></li>
          <li className='nav-item'><Link to='/SmallTownAmerica' className='nav-link'>Small Town America TV</Link></li>
          <li className='nav-item'><Link to='/SpecialEvents' className='nav-link'>Special Events</Link></li>
          <li className='nav-item'><Link to='/About' className='nav-link'>About</Link></li>
          <li className='nav-item'><Link to='/Sponsors' className='nav-link'>Sponsors</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
