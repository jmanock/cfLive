import React,{Component} from 'react';
import oneSevenTeen from '../../../Images/1:17.mp4';
import oneTen from '../../../Images/1:10.mp4';
import twelveTwentySeven from '../../../Images/12:27.mp4';

var VIDEOS = {
  oneSeventeen:{oneSevenTeen},
  oneTen:{oneTen},
  twelveTwentySeven:{twelveTwentySeven}
};
class Holder extends Component{
  state = {
    src:VIDEOS.oneSeventeen
  }
  chooseVideo=(newVideo)=>{
    this.setState({
      src:VIDEOS[newVideo]
    })
  }
  render(){
    return(
      <div>
        <Menu chooseVideo={this.chooseVideo} />
        <Video src={this.state.src} />
      </div>
    )
  }
}
class Video extends Component{
  render(){
    return(
      <video src={this.props.src} controls/>
    )
  }
}
class Menu extends Component{
  handleClick = e =>{
    var text = e.target.value;
    this.props.chooseVideo(text);
  }
  render(){
    return(
      <form onClick={this.handleClick.bind(this)}>
        <input type='radio' name='src' value='oneSeventeen'/>1/17/19
        <input type='radio' name='src' value='oneTen'/>1/10/19
        <input type='radio' name='src' value='twelveTwentySeven'/>12/27/18
      </form>
    )
  }
}

export default Holder;
