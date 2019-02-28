import React from 'react';
import CalendarCars from './Calendar/CalendarCars';

const Cars = () =>{
  return(
    <div className='container-fluid'>
      <h1 className='text-center' style={{marginTop:100, color:'#fff'}}>CarFeverTV</h1>
      <div className='card'>
        <div className='card-body'>
          <p className='card-text text-center'>This is the place for all things CARS!</p>
          <p className='card-text text-center'><a href='mailto:cftv@email.com'>Have a CAR Event, Meetup, Rally let us know and we will add it to the calendar!</a></p>
        </div>
      </div>
      <CalendarCars />
      <div style={{marginTop:50, marginBottom:50}}>
        <h3 className='text-center' style={{color:'#fff'}}>Past Shows</h3>
        <div className='row'>
          <div className='col-sm'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title text-center'>2-18-2019</h5>
                <div className='embed-responsive embed-responsive-21by9'>
                  <video controls controlsList='nodownload'>
                    <source src='https://firebasestorage.googleapis.com/v0/b/cftv-fd2b9.appspot.com/o/Porsche%2FfebPorsche.mp4?alt=media&token=0e5a7062-4640-4c4e-8530-22f59232a19c'></source>
                  </video>
                </div>
              </div>
            </div>
          </div>

          <div className='col-sm'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title text-center'>1-21-2019</h5>
                <div className='embed-responsive embed-responsive-21by9'>
                  <video controls controlsList='nodownload'>
                    <source src='https://firebasestorage.googleapis.com/v0/b/cftv-fd2b9.appspot.com/o/Porsche%2FjanPorsche.mp4?alt=media&token=2d6381a9-e93d-4f83-b78d-bea5a213a00d'></source>
                  </video>
                </div>
              </div>
            </div>
          </div>

        </div>
        <br />
        <div className='row'>
          <div className='col-sm'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title text-center'>12-17-2018</h5>
                <div className='embed-responsive embed-responsive-21by9'>
                  <video controls controlsList='nodownload'>
                    <source src='https://firebasestorage.googleapis.com/v0/b/cftv-fd2b9.appspot.com/o/Porsche%2FDecPorsche.mp4?alt=media&token=c80d2a3c-0b60-4d31-972e-9e8509be0959'></source>
                  </video>
                </div>
              </div>
            </div>
          </div>

          <div className='col-sm'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title text-center'>11-19-2018</h5>
                <div className='embed-responsive embed-responsive-21by9'>
                  <video controls controlsList='nodownload'>
                    <source src='https://firebasestorage.googleapis.com/v0/b/cftv-fd2b9.appspot.com/o/Porsche%2FnovPorsche.mp4?alt=media&token=e25629e8-e3c3-4928-a66b-634cd3ab5822'></source>
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

export default Cars;
