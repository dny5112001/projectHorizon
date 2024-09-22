import React from 'react';
import './CSS/Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'; // Importing necessary icons

const Login = () => {
  return (
    <div className="login-container">
      <h2 id="login">Login To Horizon-Decor</h2>
      <form>
        <div className="input-group">
          <FontAwesomeIcon icon={faUser} className="input-icon" />
          <input type="text" id="email-phone" name="email-phone" placeholder="Enter email or phone number" required />
        </div>
        <div className="input-group">
          <FontAwesomeIcon icon={faLock} className="input-icon" />
          <input type="password" id="password" name="password" placeholder="Enter password" required />
        </div>
        <button type="submit" className='submit-button'>Login</button>
      </form>
    </div>
  );
};

export default Login;