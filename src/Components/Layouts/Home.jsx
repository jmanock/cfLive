import React from 'react';
import './main.css';
import Youtube from './Sections/Youtube';

const Home = () =>{
  return(
    <div>
      <section className='intro'>
        <div className='title'>
          <h1 style={{fontSize:'2.5em',color:'#fff'}} className='text-center'>Bikes, Cars, &amp; Rock N Roll</h1>
          <h1 style={{fontSize:'6em', color:'darkred'}} className='text-center'>CFTV</h1>
          <h1 style={{fontSize:'2em', color:'#82b1ff'}} className='text-center'>Join the Adventure &amp; Enjoy the Ride.</h1>
        </div>
      </section>
      <section className='live text-center' style={{marginTop:20}}>
        <h3>Watch Live</h3>
        <Youtube videoId='0eKtQb06Gw0'/>
      </section>
      <section className='agenda'>
        <div className='container'>
          <div className='card'>
            <div className='card-body'>
              <p className='card-text'>CFTV is a motorcycle, car, special events, travel show with some crazy hosts who want you to come along for the ride while they have fun and a few laughs! Join the Adventure &amp; Enjoy the Ride! </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;
