import './App.css';
import Navbar from './components/Navbar/Navbar'
import Astronauts from './components/Astronauts/Astronauts'
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">
      
     <Navbar />
     <Astronauts />
     <Home />
     {/* <ISS /> */}     
    </div>
  );
}

export default App;
