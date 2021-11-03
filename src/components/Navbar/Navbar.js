import { Link } from 'react-router-dom';

const  Navbar= () => {
    return ( 
        <nav class="dt w-100 border-box pa3 ph5-ns">
            <a class="dtc v-mid white link dim w-25" href="#" title="Home">
               <h1>Astro</h1>
            </a>
            <div class="dtc v-mid w-75 tr">
                <a as={Link} to='/IssLocation' class="link dim white f6 f5-ns dib mr3 mr4-ns" href="#" title="About">ISS Location</a>
                <a as={Link} to='/Astronauts' class="link dim white f6 f5-ns dib mr3 mr4-ns" href="#" title="Store">Astronauts</a>
                <a as={Link} to='/Login' class="link dim white f6 f5-ns dib" href="#" title="Contact">Sign out</a>
            </div>     
        </nav>
     );
}
 
export default Navbar;