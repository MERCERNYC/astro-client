import GoogleMapReact from "google-map-react";
import iss from './iss.png';


const  Map= ({center, zoom}) => {
  
    return ( 
       <div className='map-container'>Map
        <GoogleMapReact
          bootstrapURLKeys={process.env.REACT_APP_MAP_KEY }
          defaultCenter={center}
          defaultZoom={zoom}
          
        >
          <img 
            className='iss-icon'
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
    lat: 12.5074,
    lng: 0.1278,
},
zoom: 4
}
 
export default Map;