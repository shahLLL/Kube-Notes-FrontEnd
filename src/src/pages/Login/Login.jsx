import { useNavigate } from 'react-router-dom'
import logo from '../../assets/KubeNotes_Logo.png'
import './Login.css'

function Login() {
  const navigate = useNavigate()

  const handleLogin = () => {
    console.log("Attempting to Log In")
    navigate("/dashboard")
  }
  const handleRegistration = () => {
    console.log("Registering New User")
    alert("User Successfully Registered!")
  }

  return (
      <div className="container">
        <img src={logo} alt="KubeNotes Logo" className="logo"/>
        <input type="text" placeholder="Username" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <div className="button-group">
          <button className="btn-login" onClick={handleLogin}>Login</button>
          <button className="btn-signup" onClick={handleRegistration}>Register</button>
        </div>
      </div>
  )
}

export default Login
