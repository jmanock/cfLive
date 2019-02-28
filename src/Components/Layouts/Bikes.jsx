import React from 'react';
import CalendarBike from './Calendar/CalendarBike';

const Bikes = () =>{
  return(
    <div className='container-fluid'>
      <h1 className='text-center' style={{marginTop:100, color:'#fff'}}>CycleFeverTV</h1>
      <div className='card'>
        <div className='card-body'>
          <p className='card-text text-center'>This is the place for all things MOTORCYCLE'S!</p>
          <p className='card-text text-center'><a href='mailto:cftv@email.com'>Have a MOTORCYCLE Event, Meetup, Rally, let us know and we will add it to the calendar!</a></p>
        </div>
      </div>
      <CalendarBike />
      <div style={{marginTop:50, marginBottom:50}}>
        <h3 className='text-center' style={{color:'#fff'}}>Past Shows</h3>
        <div className='row'>
          <div className='col-sm'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title text-center'>2-14-2019</h5>
                <div className='embed-responsive embed-responsive-21by9'>
                  <video controls controlsList='nodownload'>
                    <source src='https://firebasestorage.googleapis.com/v0/b/cftv-fd2b9.appspot.com/o/Bike%2FCFTV2%3A14.mp4?alt=media&token=43bd7544-51bf-4fb2-9152-47a44c0e42e4'></source>
                  </video>
                </div>
              </div>
            </div>
          </div>

          <div className='col-sm'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title text-center'>1-24-2019</h5>
                <div className='embed-responsive embed-responsive-21by9'>
                  <video controls controlsList='nodownload'>
                    <source src='https://firebasestorage.googleapis.com/v0/b/cftv-fd2b9.appspot.com/o/Bike%2FCFTV1-24.mp4?alt=media&token=de0e39d7-86c8-40bb-abeb-0dfef6d295a9'></source>
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <div className='row'>
          <div className='col-sm'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title text-center'>1-10-2019</h5>
                <div className='embed-responsive embed-responsive-21by9'>
                  <video controls controlsList='nodownload'>
                    <source src='https://firebasestorage.googleapis.com/v0/b/cftv-fd2b9.appspot.com/o/Bike%2FCFTV1-10.mp4?alt=media&token=44439d3e-da06-4aa4-b517-d52be886e40b'></source>
                  </video>
                </div>
              </div>
            </div>
          </div>

          <div className='col-sm'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title text-center'>12-27-2018</h5>
                <div className='embed-responsive embed-responsive-21by9'>
                  <video controls controlsList='nodownload'>
                    <source src='https://firebasestorage.googleapis.com/v0/b/cftv-fd2b9.appspot.com/o/Bike%2FCFTV12%3A27.mp4?alt=media&token=6cdb5890-8eeb-487b-95b3-20602df71798'></source>
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bikes;
