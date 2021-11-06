import Map from '../Map/Map';


const AstronautList = ({astronauts}) => {

    console.log(astronauts)

    return ( 
        <div className="pa4 ">
            <div className="mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
                <table className="f6 w-100 mw8 center" cellSpacing="0">
                    <thead>
                        <tr>
                            <th className="fw6 bb b--black-20 tl pb3 pr3 ">Astronaut Name</th>
                            <th className="fw6 bb b--black-20 tl pb3 pr3 ">Craft</th>  
                        </tr>
                    </thead>
                        { astronauts.length && astronauts.map((astronaut) => (          
                    <table className="f6 w-100 mw8 center">   
                        <tbody class="lh-copy">
                           <tr>            
                                <td className="tl pv3 pr5 bb b--black-20 ">{astronaut.name}</td>
                                <td className="tl pv3 pr5 bb b--black-20 ">{astronaut.craft}</td>   
                           </tr>      
                        </tbody>
                    </table>
 ))}
                 </table>
            </div>
        </div>
    );
}

export default AstronautList;