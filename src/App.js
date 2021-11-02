import './App.css';
import Navbar from './components/Navbar/Navbar'
import Astronauts from './components/Astronauts/Astronauts'
import Home from './components/Home/Home'
import Signin from './components/Signin/Signin'
import ParticleBackground from './ParticleBackground';



function App() {
  return (
    <div className="App">
    <ParticleBackground />
     <Navbar />
     <Astronauts />
     <Home />
     <Signin />
     {/* <ISS /> */}     
    </div>
  );
}

export default App;
