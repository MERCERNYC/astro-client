import Navbar from './components/Navbar/Navbar'
import Astronauts from './components/Astronauts/Astronauts'
import IssLocation from './components/IssLocation/IssLocation'
import Profile from './components/Profile/Profile'
import Login from './components/Login/Login'
// import ParticleBackground from './ParticleBackground';
import { Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import UseToken from './components/UseToken/UseToken';


function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

//optional chaining operator—? for undefined token
function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}


function App() {
  const { token, setToken } = UseToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      {/* <ParticleBackground /> */}
        <Navbar />
          <Switch>
            <Route exact path='/' component={Login}>
               <Login setToken={setToken}/>
            </Route>
            <Route exact path='/astronauts'component={Astronauts} >
              <Astronauts />
            </Route>  
            <Route exact path='/profile' component={Profile}>
              <Profile />
            </Route>  
            <Route exact path='/ ' component={IssLocation}>
               <IssLocation />  
            </Route>
          </Switch>     
    </div>
  );
}



export default App;
