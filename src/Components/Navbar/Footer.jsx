import React,{Component} from 'react';

export default class Footer extends Component{
  render(){
    return(
      <footer className='page-footer' style={{color:'#fff',backgroundColor:'#333',marginTop:100}}>
        <ul className='nav justify-content-center'>
          <li className='nav-link'>&copy;2019 <span style={{color:'#fc0100'}}>CycleFeverTV</span></li>
          <li className='nav-item'>
       <a href='https://www.facebook.com/cftv.live19' className='nav-link'><i className='fab fa-facebook-f' style={styles.icons}></i></a>
     </li>
     <li className='nav-item'>
        <a href='https://twitter.com/CycleFeverTV' className='nav-link'><i className='fab fa-twitter' style={styles.icons}></i></a>
      </li>
      <li className='nav-item'>
        <a href='https://www.instagram.com/cyclefevertv/' className='nav-link'><i style={styles.icons} className='fab fa-instagram'></i></a>
      </li>
      <li className='nav-item'>
        <a href='https://www.youtube.com/channel/UC5lBCpUunSuN3lCxxTfkunA' className='nav-link'><i className='fab fa-youtube' style={styles.icons}></i></a>
      </li>
      <li className='nav-item'>
        <a href='mailto:cftv@email.com' className='nav-link'><i className='fas fa-envelope' style={styles.icons}></i></a>
      </li>
        </ul>
      </footer>
    );
  }
}
const styles = {
  icons:{
    color:'#82b1ff',
    fontSize:'1.3em'
  }
}
