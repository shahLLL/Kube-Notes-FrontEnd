import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { registerUser, autheticateUser } from '../../services/authServices';
import logo from '../../assets/KubeNotes_Logo.png'
import './Login.css'

function Login() {
  const navigate = useNavigate()
  const [typedUsername, setTypedUsername] = useState('')
  const [typedPassword, setTypedPassword] = useState('')

  const handleLogin = async () => {
    console.log("Attempting to Log In")
     if (typedUsername.length <= 0 || typedPassword.length <= 0) {
      alert("Username and/or Password field is empty")
      return
    }

    try {
      await autheticateUser(typedUsername, typedPassword);
      alert("User Successfully Autheticated!")
      navigate("/dashboard")
    } catch (err) {
      console.log(`Authentication Error: ${err}`);
      alert("Authentication Unsuccessfull, Please try again or a different Username & Password")
    }
  }

  const handleRegistration = async () => {
    console.log("Registering New User")
    if (typedUsername.length <= 0 || typedPassword.length <= 0) {
      alert("Username and/or Password field is empty")
      return
    }

    try {
      await registerUser(typedUsername, typedPassword);
      alert("User Successfully Registered!")
      navigate("/dashboard")
    } catch (err) {
      console.log(`Registration Error: ${err}`);
      alert("Registration Unsuccessfull, Please try again or a different Username & Password")
    }
  }

  return (
      <div className="container">
        <img src={logo} alt="KubeNotes Logo" className="logo"/>
        <input type="text" placeholder="Username" className="input-field" onChange={(e) => setTypedUsername(e.target.value)} />
        <input type="password" placeholder="Password" className="input-field" onChange={(e) => setTypedPassword(e.target.value)} />
        <div className="button-group">
          <button className="btn-login" onClick={handleLogin}>Login</button>
          <button className="btn-signup" onClick={handleRegistration}>Register</button>
        </div>
      </div>
  )
}

export default Login
