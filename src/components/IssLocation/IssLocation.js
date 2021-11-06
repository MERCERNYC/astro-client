import { useState,useEffect } from 'react';
import Map from '../Map/Map';

const IssLocation= () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    

  useEffect(() => {
    setLoading(true)
    
    fetch('http://api.open-notify.org/iss-now.json')
      .then((res) => res.json()) 
      .then((data) => {setData({ 
            lat: data.iss_position.latitude,
            lng: data.iss_position.longitude
         }
        )})
      .catch(err => {console.log(err.message)})
      setLoading(false)
  }, []);

    
    return ( 
        <div className="Iss Tracker">
          <h3>ISS Tracker</h3>
          {!loading ? (
               <Map center={{ lat:data.latitude, lng: data.longitude}}/>   
            ) : ( <h1>loading</h1>
            )}
        </div>
    );
}
 
export default IssLocation;