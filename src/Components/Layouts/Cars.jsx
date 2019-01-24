import React,{Component} from 'react';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import oneTwenty from '../../Images/1:20.mp4';
import twelveEightTeen from '../../Images/12:18.mp4';
import elevenNineTeen from '../../Images/11:19.mp4';

const localizer = BigCalendar.momentLocalizer(moment);

let navigate = {
  PREVIOUS:'PREV',
  NEXT:'NEXT',
  TODAY:'TODAY',
  DATE:'DATE'
};

let events = [
  {title:'Happy New Year', start:new Date(2019,0,1), end:new Date(2019,0,1)}
];

const something = (x) =>{
  console.log(x);
}
function Event({event}){
  return(
    <span>
      <strong className='eventTitle' onClick={something}>{event.title}</strong>
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

const Cars = () =>{
  return(
    <div className='container'>
      <h1 className='text-center'>Cars TV</h1>
      <Calendar />
        <div>
          <h5>1/7</h5>
          <video style={{width:300}} src={oneTwenty} controls />
        </div>

        <video style={{width:300}} src={twelveEightTeen} controls />
        <video style={{width:300}} src={elevenNineTeen} controls />
    </div>
  )
}
export default Cars;
