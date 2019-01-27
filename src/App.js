import React, {Component} from 'react';
import {Switch,BrowserRouter,Route} from 'react-router-dom';
import Navbar from './Components/Layouts/Navbar';
import Footer from './Components/Layouts/Footer';
import Home from './Components/Layouts/Home';
import About from './Components/Layouts/About';
import Bikes from './Components/Layouts/Bikes';
import Cars from './Components/Layouts/Cars';
import SmallTown from './Components/Layouts/SmallTown';
import RollingMedia from './Components/Layouts/RollingMedia';
import Sponsors from './Components/Layouts/Sponsors';
import SpecialEvents from './Components/Layouts/SpecialEvents';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/CarFeverTV' component={Cars} />
            <Route path='/CycleFeverTV' component={Bikes} />
            <Route path='/About' component={About} />
            <Route path='/SmallTownAmerica' component={SmallTown} />
            <Route path='/RollingMediaChannel' component={RollingMedia} />
            <Route path='/Sponsors' component={Sponsors} />
            <Route path='/SpecialEvents' component={SpecialEvents} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
