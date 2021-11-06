import astronaut from './astronaut.png';
import issLocation from './issLocation.png';


const  Home= () => {
    return ( 
      <>
        <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
          <div className="tc">
            <img src="http://tachyons.io/img/avatar_1.jpg" alt='' class="br-100 h4 w4 dib ba b--black-05 pa2" title="kitty"/>
              <h1 className="f3 mb2">{'Hello, Juliana!'}</h1>
           </div>
        </article>

          <div className="tc flex justify-center">
          <img src={astronaut} class="br-100 h4 w4 dib ba b--black-05 pa2" alt= '' title="Photo of a kitty staring at you"/>
          <img src={issLocation} class="br-100 h4 w4 dib ba b--black-05 pa2" alt= '' title="Photo of a kitty staring at you"/>
          </div>
      </>
    );
}
 
export default Home;