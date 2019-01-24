import React,{Component} from 'react';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import oneTwenty from '../../Images/1:20.mp4';
import twelveEightTeen from '../../Images/12:18.mp4';
import elevenNineTeen from '../../Images/11:19.mp4';
import Ad from '../../Images/ad.gif';

const localizer = BigCalendar.momentLocalizer(moment);

const ad = <a href='mailto:jonmanock@gmail.com'><img src={Ad} alt='Your Ad Here' style={{height:100, width:'75%', marginLeft:20}}></img></a>;

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
          let newStyle={backgroundColor:'#7989ab'};
          if(event.title === ad){
            newStyle={backgroundColor:'transparent'}
          }
          return {className:'', style:newStyle}
        }}/>
    </div>
  );
}

const Cars = () =>{
  return(
    <div className='container'>
      <h1 className='text-center' style={{marginTop:100,color:'#fff'}}>Cars TV</h1>
      <div className='card'>
        <div className='card-body'>
          <p className='card-text text-center'>A place for everything Cars! </p>
          <p className='card-text text-center'><a href='mailto:jonmanock@gmail.com'>Have a car event, meetup, rally let us know and we will add it to our calendar</a> </p>
        </div>
      </div>
      <Calendar />
      <h3 className='text-center'style={{color:'#fff'}}>Past Shows</h3>
      <div className='row'>
        <div className='col-sm'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title text-center'>1/20/2019</h5>
              <video src={oneTwenty} controls className='card-img'/>
            </div>
          </div>
        </div>
        <div className='col-sm'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title text-center'>12/18/2018</h5>
              <video src={twelveEightTeen} controls className='card-img' />
            </div>
          </div>
        </div>
        <div className='col-sm'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title text-center'>11/19/2018</h5>
              <video src={elevenNineTeen} controls className='card-img'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Cars;
