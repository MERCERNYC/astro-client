const AstronautList = ({astronauts}) => {

    console.log(astronauts)

    return ( 
        <div class="pa4 ">
            <div class="mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
                <table class="f6 w-100 mw8 center" cellspacing="0">
                    <thead>
                        <tr>
                            <th class="fw6 bb b--black-20 tl pb3 pr3 ">Astronaut Name</th>
                            <th class="fw6 bb b--black-20 tl pb3 pr3 ">Craft</th>  
                        </tr>
                    </thead>
                        { astronauts.length && astronauts.map((astronaut) => (          
                    <table class="f6 w-100 mw8 center">   
                        <tbody class="lh-copy">
                           <tr>            
                                <td class="tl pv3 pr5 bb b--black-20 ">{astronaut.name}</td>
                                <td class="tl pv3 pr5 bb b--black-20 ">{astronaut.craft}</td>   
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