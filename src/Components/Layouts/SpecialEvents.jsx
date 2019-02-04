import React from 'react';
import CalendarSpecial from './Calendar/CalendarSpecial';

const SpecialEvents = () =>{
  return(
    <div className='container-fluid'>
      <h1 className='text-center' style={{color:'#fff', marginTop:100}}>Special Events</h1>
      <CalendarSpecial />
    </div>
  );
}

export default SpecialEvents;
