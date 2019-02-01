import React,{Component} from 'react';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = BigCalendar.momentLocalizer(moment);

let navigate = {
  PREVIOUS:'PREV',
  NEXT:'NEXT',
  TODAY:'TODAY',
  DATE:'DATE'
};

let events =[
  {title:'Happy New Year', start:new Date(2019,0,1), end:new Date(2019,0,1)},
  {title:'Bike Night', start:new Date(2019,1,4), end:new Date(2019,1,4)}
];
function Event({event}){
  return(
    <span className='event'>
      <strong className='eventTitle'>{event.title}</strong>
      <small className='eventTime'>{event.time}</small>
    </span>
  );
};

class CustomToolbar extends Component{
  render(){
    let {localizer:{message},label} = this.props;
    return(
      <div className='rbc-toolbar'>
        <span className='rbc-btn-group'>
          <button type='button' onClick={this.navigate.bind(null,navigate.PREVIOUS)} className='icon'><i className='fas fa-chevron-left'></i></button>
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

class Calendar extends Component{
  state = {showPopUp:false}
  render(){
    return(
      <div className='calendar'>
        <BigCalendar localizer={localizer} events={events} popup startAccessor='start' endAccessor='end' className={this.props.calendarIsOpen ? 'open' : ''} components={{event:Event, toolbar:CustomToolbar}} style={{height:'100vh'}} eventPropGetter={(event, start, end, isSelected) => {
            if(this.state.showPopUp){
              console.log('hi');
            }
            let newStyle={backgroundColor:'darkred'};
            if(event.title === 'ad'){
              newStyle = {backgroundColor:'transparent'}
            }
            return {className:'', style:newStyle}
          }}/>

      </div>
    )
  }
}

class SpecialEvents extends Component{
  render(){

    return(
      <div className='container'>
        <h1 className='text-center' style={{color:'#fff', marginTop:100}}>Special Events</h1>
        <Calendar />
        <div id='something' style={{fontSize:100, color:'#fff'}}></div>
      </div>
    )
  }
}

export default SpecialEvents;
