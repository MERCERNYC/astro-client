import './App.css';
import Navbar from './components/Navbar/Navbar'
import Astronauts from './components/Astronauts/Astronauts'

function App() {
  return (
    <div className="App">
     <Navbar />
     <Astronauts />
     {/* <ISS /> */}     
    </div>
  );
}

export default App;
