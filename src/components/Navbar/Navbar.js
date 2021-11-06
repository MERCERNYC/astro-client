import { Link } from 'react-router-dom';

const  Navbar= () => {
    return ( 
        <nav className="dt w-100 border-box pa3 ph5-ns">
            <Link to='/' className="dtc v-mid white link dim w-25" href="#" title="Home">
               <h1 >Astro</h1>
            </Link>
            <div className="dtc v-mid w-75 tr">
                <Link to='/issLocation' className="link dim white f6 f5-ns dib mr3 mr4-ns" href="#" title="About">ISS Location</Link>
                <Link to='/astronauts' className="link dim white f6 f5-ns dib mr3 mr4-ns" href="#" title="Store">Astronauts</Link>
                <Link to='/' className="link dim white f6 f5-ns dib" href="#" title="Contact">Sign out</Link>
            </div>     
        </nav>
     );
}
 
export default Navbar;