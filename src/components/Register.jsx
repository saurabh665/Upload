import React, { useState } from 'react';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Register.css'; // Import the CSS file

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:8000/api/auth/register', { username, password });
      alert('Registration successful'); // Display alert on successful registration
      setUsername(''); // Clear input fields after successful registration if needed
      setPassword('');
    } catch (err) {
      console.error(err);
      alert('Error registering user');
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Register</h2>
      <div className="input-container">
        <i className="fas fa-user input-icon"></i>
        <input
          type="text"
          placeholder="Username"
          className="register-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-container">
        <i className="fas fa-lock input-icon"></i>
        <input
          type="password"
          placeholder="Password"
          className="register-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="register-button" onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
