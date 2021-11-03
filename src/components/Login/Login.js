import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }
 
 export default function Login({ setToken }) {
   const [username, setUserEmail] = useState();
   const [password, setPassword] = useState();
 
   const handleSubmit = async e => {
     console.log(e)
     e.preventDefault();
     const token = await loginUser({
       username,
       password
     });
     setToken(token);
   }

    return ( 
        <article className="br3 ba white b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-6 center">
            <main className="pa4 white-80">
                <form onSubmit={handleSubmit} className="measure" >
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" onChange={e => setUserEmail(e.target.value)}/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-white hover-white w-100" type="password" name="password"  id="password" onChange={e => setPassword(e.target.value)}/>
                    </div>
                   
                    </fieldset>
                    <div className="">
                    <input as={Link} to='/Profile' className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
                    </div>
                    <div className="lh-copy mt3">
                    <a href="#0" className="f6 link dim white db">Register</a>
                  
                    </div>
                </form>
            </main>       
        </article>
     );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }
 
