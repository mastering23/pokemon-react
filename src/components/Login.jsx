import React, { useState } from 'react';
import './Login.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(`https://api.escuelajs.co/api/v1/auth/login`, {  
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      console.log(email, password);
      const data = await res.json();
      console.log(data);
  
      if (data.access_token) {  
        setToken(data.access_token);
        localStorage.setItem('token', data.access_token);  
        console.log('Login successful, token:', data.access_token);
        fetchUserProfile(); 
      } else {
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const fetchUserProfile = async () => {
    const token = localStorage.getItem('token');  
  
    try {
      const res = await fetch(`https://api.escuelajs.co/api/v1/auth/profile`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`  
        },
      });
  
      const data = await res.json();
      console.log('User profile data:', data);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  return (
    <section className='form-login'>
      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </form>
    </section>
  );
};
