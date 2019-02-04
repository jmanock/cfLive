import React from 'react';
import CalendarCars from './Calendar/CalendarCars';

const Cars = () =>{
  return(
    <div className='container-fluid'>
      <h1 className='text-center' style={{marginTop:100,color:'#fff'}}>CycleFeverTV</h1>
      <div className='card'>
        <div className='card-body'>
          <p className='card-text text-center'>This is the place for all things Car's</p>
          <p className='card-text text-center'><a href='mailto:cftv@email.com'>Have a Car Event, Meetup, Rally let us know and we will add it to the calendar!</a></p>
        </div>
      </div>
      <CalendarCars />
      <div style={{marginTop:50, marginBottom:50}}>
        <h3 className='text-center' style={{color:'#fff'}}>Past Shows</h3>
        <div className='row'>
          <div className='col-sm'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title text-center'>1-24-2019</h5>
                <div className='embed-responsive embed-responsive-21by9'>
                  <iframe src='https://www.youtube.com/embed/C1kyzgodUXQ' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen title='one24'></iframe>
                </div>
              </div>
            </div>
          </div>

          <div className='col-sm'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title text-center'>1-17-2019</h5>
                <div className='embed-responsive embed-responsive-21by9'>
                  <iframe src='https://www.youtube.com/embed/EpuATt1jUy0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen title='one17'></iframe>
                </div>
              </div>
            </div>
          </div>

          <div className='col-sm'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title text-center'>1-10-2019</h5>
                <div className='embed-responsive embed-responsive-21by9'>
                  <iframe src='https://www.youtube.com/embed/0eKtQb06Gw0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen title='one10'></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Cars;
