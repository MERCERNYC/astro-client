import Navbar from './components/Navbar/Navbar'
import Astronauts from './components/Astronauts/Astronauts'
import IssLocation from './components/IssLocation/IssLocation'
import Profile from './components/Profile/Profile'
import Login from './components/Login/Login'
// import ParticleBackground from './ParticleBackground';
import { Route, Switch } from 'react-router-dom';
import './index.css';




function App() {

  return (
    <div className="App">
      {/* <ParticleBackground /> */}
        <Navbar />
          <Switch>
                  
            <Route  path='/astronauts' component={Astronauts}/> 
            <Route  path='/profile' component={Profile}/>    
            <Route  path='/issLocation ' component={IssLocation}/> 
            <Route  exact path='/' component={Login}/>       
          </Switch>     
    </div>
  );
}



export default App;
