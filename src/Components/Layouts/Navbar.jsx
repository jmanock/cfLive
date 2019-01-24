import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const Navbar = () =>{
  return(
    <nav className='navbar navbar-expand-lg navbar-dark' style={{backgroundColor:'#333'}}>
      <Link to='/' className='navbar-brand'>CFTV</Link>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collaps navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'><Link to='/Cars' className='nav-link'>CarsTV</Link></li>
          <li className='nav-item'><Link to='/Bikes' className='nav-link'>BikesTV</Link></li>
          <li className='nav-item'><Link to='/RollingMediaChannel' className='nav-link'>Rolling Media Channel</Link></li>
          <li className='nav-item'><Link to='/SmallTownAmerica' className='nav-link'>Small Town America</Link></li>
          <li className='nav-item'><Link to='/SpecialEvents' className='nav-link'>Special Events</Link></li>
          <li className='nav-item'><Link to='/About' className='nav-link'>About</Link></li>
          <li className='nav-item'><Link to='/Sponsors' className='nav-link'>Sponsors</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
