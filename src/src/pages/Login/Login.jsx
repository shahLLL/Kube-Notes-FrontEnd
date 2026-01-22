import logo from '../../assets/KubeNotes_Logo.png';
import './Login.css';

function Login() {
  return (
      <div className="container">
        <img src={logo} alt="KubeNotes Logo" className="logo"/>
        <input type="text" placeholder="Username" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <div className="button-group">
          <button className="btn-login">Login</button>
          <button className="btn-signup">Register</button>
        </div>
      </div>
  )
}

export default Login
