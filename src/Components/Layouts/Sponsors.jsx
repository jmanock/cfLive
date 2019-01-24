import React from 'react';
import Ace from '../../Images/ace.png';
import jMyers from '../../Images/jmeyers.gif';

const Sponsors = () =>{
  return(
    <div className='container' style={{color:'#fff', marginTop:100}}>
      <h1 className='text-center'>Sponsors</h1>
      <div className='card'>
        <div className='card-body'>
          <p className='card-text text-center'>Special Thanks to everyone for their support including:</p>
          <p className='card-text text-center'>Looking to advertise with us or would like more infomation? <a href='mailto:jonmanock@gmail.com'>Let us know!</a></p>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm'>
          <div className='card' style={{backgroundColor:'transparent'}}>
            <div className='card-body'>
              <a href='https://www.acecafeusa.com/'><img className='card-img-top' src={Ace} alt='Ace Cafe'/></a>
            </div>
          </div>
        </div>
        <div className='col-sm'>
          <div className='card' style={{backgroundColor:'transparent'}}>
            <div className='card-body'>
              <a href='http://www.jmeyers.com/'><img className='card-img-top' src={jMyers} alt='jMeyers'/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
