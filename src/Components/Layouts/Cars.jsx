import React from 'react';
import CalendarCars from './Calendar/CalendarCars';
import Uploader from './Firebase/Uploader';

const Cars = () =>{
  return(
    <div className='container-fluid'>
      <section id='carsIntro'>
        <h1 className='text-center' style={{marginTop:100, color:'#fff'}}>CarFeverTv</h1>
        <Uploader />
        <div className='card'>
          <div className='card-body'>
            <p className='card-text text-center'>This is the place for all things CARS!</p>
            <p className='card-text text-center'></p>
          </div>
        </div>
      </section>
      <section id='carsCalendar'>
        <CalendarCars />
      </section>
      <section id='carsShows'></section>
      <section id='carsVote'></section>
    </div>
  );
};

export default Cars;
