import React,{Component} from 'react';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import Ad from '../../Images/ad.gif';

const localizer = BigCalendar.momentLocalizer(moment);

const ad = <a href='mailto:cftv@email.com'><img src={Ad} alt='Your Ad Here' style={{height:100, width:'75%', marginLeft:20}}></img></a>;

let navigate = {
  PREVIOUS:'PREV',
  NEXT:'NEXT',
  TODAY:'TODAY',
  DATE:'DATE'
};

let events = [
  {title:'Happy New Year', start:new Date(2019,0,1), end:new Date(2019,0,1)},
  {title:ad, start:new Date(2018,11,30), end:new Date(2019,0,1)}
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
    <div className='calendar'>
      <BigCalendar localizer={localizer} events={events} popup startAccessor='start' endAccessor='end' className={props.calendarIsOpen ? 'open':''} components={{event:Event, toolbar:CustomToolbar}} style={{height:'100vh'}} eventPropGetter={(event, start, end, isSelected) => {
          let newStyle={backgroundColor:'darkred'};
          if(event.title === ad){
            newStyle={backgroundColor:'transparent'}
          }
          return {className:'', style:newStyle}
        }}/>
      <h3 style={{color:'#fff'}} className='text-center'>Coming Soon</h3>
    </div>
  );
}

const SpecialEvents = () =>{
  return(
    <div className='container'>
      <h1 className='text-center' style={{color:'#fff', marginTop:100}}>Special Events</h1>
      <Calendar />
    </div>
  )
}
export default SpecialEvents;
