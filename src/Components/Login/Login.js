import React,{ useState,useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {FirebaseContext} from '../../Store/firbaseContext'
import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {firebase}=useContext(FirebaseContext)
  const history = useHistory()
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("heiii");
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      alert("logged In")
      history.push('/')
    }).catch((error)=>{
      alert(error.message)
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt=""></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            // defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            // defaultValue="Doe"
          />
          <br />
          <br />
          <button type="submit"onClick={handleSubmit} >Login</button>
        </form>
        <a onClick={()=>{
          history.push('/signup')
        }}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
