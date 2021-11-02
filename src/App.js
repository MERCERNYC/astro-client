import Navbar from './components/Navbar/Navbar'
import Astronauts from './components/Astronauts/Astronauts'
import IssLocation from './components/IssLocation/IssLocation'
import Profile from './components/Profile/Profile'
import Signin from './components/Signin/Signin'
import ParticleBackground from './ParticleBackground';



function App() {
  return (
    <div className="App">
    <ParticleBackground />
     <Navbar />
     <Astronauts />
     <Profile />
     <Signin />
     <IssLocation />     
    </div>
  );
}

export default App;
