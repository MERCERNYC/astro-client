import AstronautList from "./AstronautsList";
import { useState,useEffect } from 'react'


const Astronauts= () => {

    const [astronauts, setAstronauts] = useState([]);

  useEffect(() => {
    fetch('http://api.open-notify.org/astros.json')
      .then((res) => res.json())
      .then((data) => {setAstronauts(data.people) 
    })
      .catch(err => {console.log(err.message)})

  }, []);

    
    return ( 
        <div className="Astronauttable">
            <table id='table'>
               <tbody>
                  <AstronautList astronauts={astronauts}/> 
               </tbody>
            </table>    
        </div>
    );
}
 
export default Astronauts;