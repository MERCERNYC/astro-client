const AstronautList = ({astronauts}) => {

    console.log(astronauts)

    return ( 
        <div className="astronaut-list">
           { astronauts.length && astronauts.map((astronaut, index) => (
                <div className="astronaut-preview" key={`astro-${index}`} >
                    {/* <h2>{astronaut.name} </h2>
                    <p>{astronaut.craft}</p> */}
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{astronaut.name}</td>
                        <td>{astronaut.craft}</td>   
                    </tr>   
                </div>
            ))}
        </div>
    );
}

export default AstronautList;