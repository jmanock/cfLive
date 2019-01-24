import React,{Component} from 'react';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import oneSevenTeen from '../../Images/1:17.mp4';
import oneTen from '../../Images/1:10.mp4';
import twelveTwentySeven from '../../Images/12:27.mp4';

const localizer = BigCalendar.momentLocalizer(moment);

let navigate = {
  PREVIOUS:'PREV',
  NEXT:'NEXT',
  TODAY:'TODAY',
  DATE:'DATE'
};

let events = [
  {title:'Happy New Year', start:new Date(2019,0,1), end:new Date(2019,0,1)},
  {title:'Bike Night', start:new Date(2019,0,24), end:new Date(2019,0,24), time:'7:30pm'}
];

function Event({event}){
  return(
    <span>
      <strong className='eventTitle'>{event.title}</strong><br/>
      <small className='eventTime'>{event.time}</small>
    </span>
  );
};

class CustomToolbar extends Component{
  render(){
    let {localizer:{message}, label} = this.props;

    return(
      <div className='rbc-toolbar'>
        <span className='rbc-btn-group'>
          <button type='button' onClick={this.navigate.bind(null, navigate.PREVIOUS)} className='icon'><i className='fas fa-chevron-left'></i></button>
        </span>
        <span className='rbc-toolbar-label'>{label} {message}</span>
        <span className='rbc-btn-group'>
          <button type='button' onClick={this.navigate.bind(null, navigate.NEXT)} className='icon'><i className='fas fa-chevron-right'></i></button>
        </span>
      </div>
    );
  }

  navigate = action =>{
    this.props.onNavigate(action);
  }
}

const Calendar = props =>{
  return(
    <div>
      <BigCalendar localizer={localizer} events={events} popup startAccessor='start' endAccessor='end' className={props.calendarIsOpen ? 'open':''} components={{event:Event, toolbar:CustomToolbar}} style={{height:'100vh'}} eventPropGetter={(event, start, end, isSelected) => {
          let newStyle={backgroundColor:'red'};
          if(event.title === 'something'){
            newStyle={backgroundColor:'transparent'}
          }
          return {className:'', style:newStyle}
        }}/>
      <h3 style={{color:'#fff'}} className='text-center'>Coming Soon</h3>
    </div>
  );
}

const Bikes = () =>{
  return(
    <div className='container'>
      <h1 className='text-center' style={{marginTop:100}}>Bikes TV</h1>
      <Calendar />
        <h3 className='text-center'>Past Shows</h3>
        <div className='row'>
          <div className='col-sm text-center'>1/17/2019</div>
          <div className='col-sm text-center'>1/10/2019</div>
          <div className='col-sm text-center'>12/27/2018</div>
        </div>
        <div className='row'>
          <div className='col-sm'>
            <video style={{width:275}} src={oneSevenTeen} controls />
          </div>
          <div className='col-sm'>
            <video style={{width:275}} src={oneTen} controls />
          </div>
          <div className='col-sm'>
            <video style={{width:275}} src={twelveTwentySeven} controls />
          </div>
        </div>
    </div>
  )
}
export default Bikes;
