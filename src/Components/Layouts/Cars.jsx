import React from 'react';
import CalendarCars from './Calendar/CalendarCars';

const Cars = () =>{
  return(
    <div className='container-fluid'>
      <section id='carsIntro'>
        <h1 className='text-center' style={{marginTop:100, color:'#fff'}}>CarFeverTv</h1>
      </section>
      <section id='carsCalendar'></section>
      <section id='carsShows'></section>
      <section id='carsVote'></section>
    </div>
  );
};

export default Cars;
