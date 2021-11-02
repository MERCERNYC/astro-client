const  Navbar= () => {
    return ( 
        <nav className='navbar'>
          <h1>Astro</h1>
          <div className='links'>
              <a href="/">Home</a>
              <a href="/Astronauts">Astronauts</a>
              <a href="/ISS Location">ISS Location</a>

          </div>
        </nav>
     );
}
 
export default Navbar;