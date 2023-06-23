import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authLogin } from '../store/actions/authActions';



export const Login = () => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({email: '', password: ''});
  const router = useNavigate();

  const login = (e) => {
    e.preventDefault();
    dispatch(authLogin(credentials));
  }

  return (
    <div>
      <form>
        <TextField
          label="Email" 
          variant="outlined"
          value={credentials.email}
          onChange={e => setCredentials({...credentials, email: e.target.value})}
          type="email"
          placeholder="Email"
        />
        <TextField
          label="Password"
          type='password' 
          variant="outlined"
          value={credentials.password}
          onChange={e => setCredentials({...credentials, password: e.target.value})}
          placeholder="Password"
        />
        <Button
          variant="contained"
          disabled={!credentials.email || !credentials.password}
          onClick={(e) => login(e)}
        >Login</Button>
      </form>
      <div></div>
      <p><strong onClick={() => router('/register')}>To register</strong></p>
    </div>
  )
}
