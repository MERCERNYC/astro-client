import GoogleMapReact from 'google-map-react';
import iss from './iss.png';


const  Map= ({center, zoom}) => {
  

    return ( 
       <div className='map-container'>
        <GoogleMapReact
          bootstrapURLKeys = {process.env.REACT_APP_API_KEY}
          center={center}
          defaultZoom={zoom}
          
        >
          <img style={{ height: '100vh', width: '100%' }}
            src={iss} 
            alt='iss icon'  
            lat={center.lat }
            lng={center.lng}  
          />  

        </GoogleMapReact>
       </div>
     );
}

Map.defaultProps = {
  center: {
    lat: 59.95,
    lng: 30.33
},
zoom: 4
}
 
export default Map;