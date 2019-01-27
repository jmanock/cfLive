import React from 'react';
import './main.css';

const Home = () =>{
  return(
    <div>
      <section className='intro'>
        <div className='title'>
          <h1 style={{fontSize:'2.5em',color:'#fff'}} className='text-center'>Bikes, Cars, &amp; Rock N Roll</h1>
          <h1 style={{fontSize:'6em', color:'#fc0100'}} className='text-center'>CFTV</h1>
          <h1 style={{fontSize:'2em', color:'#82b1ff'}} className='text-center'>Join the Adventure &amp; Enjoy the Ride.</h1>
        </div>
      </section>

      <section className='live text-center' style={{marginTop:20}}>
        <div className='card container' style={{backgroundColor:'transparent'}}>
          <div className='card-body'>
            <h3 className='card-title text-center' style={{color:'#fff'}}>Watch Live</h3>
            <div className='embed-responsive embed-responsive-21by9'>
              <iframe src="https://www.youtube.com/embed/C1kyzgodUXQ" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='one24'></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className='agenda'>
        <div className='container'>
          <div className='card'>
            <div className='card-body'>
              <p className='card-text text-center'><span style={{color:'#fc0100'}}>CFTV</span> is a motorcycle, car, special events, travel show with some crazy hosts who want you to come along for the ride while they have fun and a few laughs! Join the Adventure &amp; Enjoy the Ride! </p>
            </div>
          </div>
        </div>
      </section>
      <section className='container'>
        <div className='card' style={{backgroundColor:'#bbc6df'}}>
          <div className='card-body'>
            <h5 className='card-title text-center'>OFFERING VALUE <span style={{color:'#fc0100'}}>CFTV</span></h5>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>CYCLE FEVER TV</li>
              <li className='list-group-item'>CAR FEVER TV</li>
              <li className='list-group-item'>SMALL TOWN AMERICA TV</li>
              <li className='list-group-item'>ROLLING MEDIA CHANNEL</li>
            </ul>
          </div>
        </div>
      </section>
      <section className='container'>
        <div className='card' style={{backgroundColor:'#7989ab'}}>
          <div className='card-body'>
            <h5 className='card-title text-center' style={{color:'#fff'}}>What We Do and Why</h5>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>Provide local resource information in a video magazine format</li>
              <li className='list-group-item'>Provide a platform to advertise products, events and locations to a key known audience</li>
              <li className='list-group-item'>Create partnerships with key companies who have a shared ethos</li>
              <li className='list-group-item'>In the Future, we will bring on more platforms and more outlets to bring the message to a greater audience</li>
            </ul>
          </div>
        </div>
      </section>
      <section className='container'>
        <div className='card' style={{backgroundColor:'#bbc6df'}}>
          <div className='card-body'>
            <h5 className='card-title text-center'>What Motivates Us?</h5>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>We have over 40 years of TV Production and presenting experience</li>
              <li className='list-group-item'>We want to do something different</li>
              <li className='list-group-item'>We want to meet a need from the community</li>
              <li className='list-group-item'>We want to provide a quality service</li>
              <li className='list-group-item'>We will follow the technology path for delivery (distribution)</li>
              <li className='list-group-item'>We are building on our following: Viewers, Followers, Fans</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
