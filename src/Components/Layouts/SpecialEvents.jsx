import React from 'react';
import CalendarSpecial from './Calendar/CalendarSpecial';

const SpecialEvents = () =>{
  return(
    <div className='container-fluid'>
      <h1 className='text-center' style={{color:'#fff', marginTop:100}}>Special Events</h1>
      <CalendarSpecial />
      <div style={{marginTop:50, marginBottom:50}}>
        <h3 className='text-center' style={{color:'#fff'}}>Past Shows</h3>

        <div className='row'>

          <div className='col-sm'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title text-center'>Sgt. Mecot Camara USMC Wall Dedication</h5>
                <div className='embed-responsive embed-responsive-21by9'>
                  <video controls controlsList='nodownload'>
                    <source src='https://firebasestorage.googleapis.com/v0/b/cftv-fd2b9.appspot.com/o/SpecialEvents%2FSpecialEvent.mp4?alt=media&token=ea98bdba-eaa0-4ecc-853c-46746bc49e6e'></source>
                  </video>
                </div>
              </div>
            </div>
          </div>

          <div className='col-sm'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title text-center'>Castel Church Brewing</h5>
                <div className='embed-responsive embed-responsive-21by9'>
                  <video controls controlsList='nodownload'>
                    <source src='https://firebasestorage.googleapis.com/v0/b/cftv-fd2b9.appspot.com/o/SpecialEvents%2FSpecialEventChurch.mp4?alt=media&token=ba5fef13-5ecb-4d39-8a94-c3efde0c0472'></source>
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialEvents;
