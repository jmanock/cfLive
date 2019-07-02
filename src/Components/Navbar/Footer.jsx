import React,{Component} from 'react';

export default class Footer extends Component{
  render(){
    return(
      <footer className='page-footer' style={{backgroundColor:'#333',marginTop:100}}>
        <ul className='nav justify-content-center'>
          <li className='nav-link' style={{color:'#fff'}}>&copy;2019</li>
          <li className='nav-item'><a href='#facebook' className='nav-link'>Facebook</a></li>
          <li className='nav-item'><a href='#insta' className='nav-link'>Instagram</a></li>
          <li className='nav-item'><a href='#twitter' className='nav-link'>Twitter</a></li>
          <li className='nav-item'><a href='#email' className='nav-link'>Email</a></li>
          <li className='nav-item'><a href='#youtube' className='nav-link'>Youtube</a></li>
        </ul>
      </footer>
    );
  }
}
