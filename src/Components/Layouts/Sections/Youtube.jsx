import React,{Component} from 'react';
import YouTube from 'react-youtube';

class Youtube extends Component{
  videoOnReady(event){
    event.target.playVideoAt(50);
  }

  render(){

    const opts = {
      playerVars:{
        autoplay:0
      }
    }
    const {videoId} = this.props;
    return(
      <YouTube videoId={videoId} opts={opts} onReady={this.videoOnReady}/>
    );
  }
};

export default Youtube;
