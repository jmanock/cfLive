import React,{Component} from 'react';
import Events from './Events';
import moment from 'moment';
import Data from './Data';
import {Row, Col, Button, ButtonToolbar, Overlay, Popover, Modal, Container} from 'react-bootstrap';

class Calendar extends Component{
  state ={
    moment:moment(),
    showPopover:false,
    showModal:false,
    overlayTitle:null,
    overlayContent:null,
    popoverTarget:null
  };

  handleNextMonth = () =>{
    this.setState({
      moment:this.state.moment.add(1,'M')
    });
  }

  handlePreviousMonth = () =>{
    this.setState({
      moment:this.state.moment.subtract(1,'M')
    });
  }

  handleToday = () =>{
    this.setState({
      moment:moment()
    });
  }

  handleEventClick = (target, eventData, day) =>{
    this.setState({
      showPopover:false,
      showModal:true,
      overlayTitle:eventData.title,
      overlayContent:eventData.description
    });
  }

  getMomentFromDay(day){
    return moment().set({
      'year':day.year,
      'month':(day.month+0)%12,
      'date':day.day
    });
  }

  handleModalClose = () =>{
    this.setState({
      showModal:false
    });
  }

  getHumanDate(){
    return [moment.months('MM', this.state.moment.month()), this.state.moment.year()].join(' ');
  }

  render(){
    return(
      <div className='container'>
        <Overlay show={this.state.showPopover} rootClose onHide={()=>this.setState({showPopover:false})} placement='top' container={this} target={this.state.popoverTarget}>
          <Popover id='event'>{this.state.overlayTitle}</Popover>
        </Overlay>

        <Modal show={this.state.showModal} onHide={this.handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.overlayTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.overlayContent}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleModalClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        <Container>
          <Row>
            <Col xs={6}>
              <ButtonToolbar>
                <Button onClick={this.handlePreviousMonth}>&lt;</Button>
                <Button onClick={this.handleNextMonth}>&gt;</Button>
                <Button onClick={this.handleToday}>Today</Button>
              </ButtonToolbar>
            </Col>
            <Col xs={6}>
              <h1 className='text-center'>{this.getHumanDate()}</h1>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={12}>
              <Events month={this.state.moment.month()} year={this.state.moment.year()} events={Data.getEvents()} onEventClick={this.handleEventClick} maxEventSlots={10} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Calendar;
