import Navbar from './components/Navbar/Navbar'
import Astronauts from './components/Astronauts/Astronauts'
import IssLocation from './components/IssLocation/IssLocation'
import Profile from './components/Profile/Profile'
import Signin from './components/Signin/Signin'
import ParticleBackground from './ParticleBackground';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ParticleBackground />
        <Navbar />
          <Switch>
            <Route exact path='/' component={Signin}>
               <Signin />
            </Route>
            <Route path='/astronauts'component={Astronauts} >
              <Astronauts />
            </Route>  
            <Route path='/profile' component={Profile}>
              <Profile />
            </Route>  
            <Route path='/ ' component={IssLocation}>
               <IssLocation />  
            </Route>
          </Switch>     
    </div>
  );
}



export default App;
