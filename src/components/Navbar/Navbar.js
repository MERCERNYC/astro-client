const  Navbar= () => {
    return ( 
        <nav class="dt w-100 border-box pa3 ph5-ns">
            <a class="dtc v-mid mid-gray link dim w-25" href="#" title="Home">
                <img src="http://tachyons.io/img/logo.jpg"  alt= 'logo' class="dib w2 h2 br-100" alt="Site Name"/>
            </a>
            <div class="dtc v-mid w-75 tr">
                <a class="link dim white f6 f5-ns dib mr3 mr4-ns" href="#" title="About">ISS Location</a>
                <a class="link dim white f6 f5-ns dib mr3 mr4-ns" href="#" title="Store">Astronauts</a>
                <a class="link dim white f6 f5-ns dib" href="#" title="Contact">Sign out</a>
            </div>     
        </nav>
     );
}
 
export default Navbar;