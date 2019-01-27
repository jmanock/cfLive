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
  {title:'Bike Night', start:new Date(2019,0,24), end:new Date(2019,0,24), time:'7:30pm'},
  {title:ad, start:new Date(2018,11,30), end:new Date(2019,0,1)}
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
    <div className='calendar'>
      <BigCalendar localizer={localizer} events={events} popup startAccessor='start' endAccessor='end' className={props.calendarIsOpen ? 'open':''} components={{event:Event, toolbar:CustomToolbar}} style={{height:'100vh'}} eventPropGetter={(event, start, end, isSelected) => {
          let newStyle={backgroundColor:'#fc0100'};
          if(event.title === ad){
            newStyle={backgroundColor:'transparent'}
          }
          return {className:'', style:newStyle}
        }}/>
    </div>
  );
}

const Bikes = () =>{
  return(
    <div className='container'>
      <h1 className='text-center' style={{marginTop:100,color:'#fff'}}>CycleFeverTV</h1>
      <div className='card'>
        <div className='card-body'>
          <p className='card-text text-center'>This is the place for all things motorcycle's</p>
          <p className='card-text text-center'><a href='mailto:cftv@email.com'>Have a motorcycle event, meetup, rally let us know and we will add it to our calendar</a> </p>
        </div>
      </div>
      <Calendar />
      <h3 className='text-center' style={{color:'#fff'}}>Past Shows</h3>
      <div className='row'>

        <div className='col-sm'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title text-center'>1-24-2019</h5>
              <div className='embed-responsive embed-responsive-21by9'>
                <iframe src="https://www.youtube.com/embed/C1kyzgodUXQ" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='one24'></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className='col-sm'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title text-center'>1-17-2019</h5>
              <div className='embed-responsive embed-responsive-21by9'>
                <iframe src="https://www.youtube.com/embed/EpuATt1jUy0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='one17'></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className='col-sm'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title text-center'>1-10-2019</h5>
              <div className='embed-responsive embed-responsive-21by9'>
                <iframe src="https://www.youtube.com/embed/0eKtQb06Gw0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='one10'></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Bikes;
