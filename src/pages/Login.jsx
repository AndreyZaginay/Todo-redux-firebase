import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { authLogin } from '@store/actions/authActions';
import { authLoginUI } from '../store/actions/authActions';
import { loginWithGoogle } from '../API/auth.firebase';

export const Login = () => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({email: '', password: ''});
  const {error} = useSelector(state => state.auth);
  const router = useNavigate();

  const login = (e) => {
    e.preventDefault();
    dispatch(authLogin(credentials));
  }

  const loginUI = () => {
    dispatch(authLoginUI(loginWithGoogle))
  }

  return (
    <div>
      <form>
        <TextField
          error={error ? true : false}
          label="Email" 
          variant="outlined"
          value={credentials.email}
          onChange={e => setCredentials({...credentials, email: e.target.value})}
          type="email"
          placeholder="Email"
          helperText={error}
        />
        <TextField
          error={error ? true : false}
          label="Password"
          type='password' 
          variant="outlined"
          value={credentials.password}
          onChange={e => setCredentials({...credentials, password: e.target.value})}
          placeholder="Password"
          helperText={error}
        />
        <Button
          variant="contained"
          disabled={!credentials.email || !credentials.password}
          onClick={(e) => login(e)}
        >
          Login
        </Button>
      </form>
      <div>
        <Button onClick={() => loginUI()}>google</Button>
      </div>
      <p><strong onClick={() => router('/register')}>To register</strong></p>
    </div>
  )
}
