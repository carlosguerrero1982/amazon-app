import React, {useState} from 'react';
import "./Login.css";
import {Link,useHistory} from 'react-router-dom';
import {auth} from './firebase';

function Login() {

    const history = useHistory();
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

    const login = (e) =>{

        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{

            history.push("/");

        })

        .catch((e) => alert(e.message));


    };

    const register = (e) =>{

        e.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
        .then(auth =>{

            history.push("/");

        })

        .catch((e) =>alert(e.message));

       

    };



    return (
        <div className="login">

            <Link to="/">
           
           <img 

                className="login_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                alt=""

              
              />

            </Link>

        <div className="login_container">
        
            <h1>Sign in</h1>
            
            <form>

                <input value={email}  onChange={(e)=>setEmail(e.target.value)} type="email" />

                     <h5>E-mail</h5>


                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />

                    <h5>Password</h5>

            
            <button onClick={login} type="submit" className="login_signin">Sign in</button>

            </form>

            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice. </p>


            <button onClick={register} className="login_signup">Create your Amazon account</button>


        </div>

        </div>
    )
}

export default Login
