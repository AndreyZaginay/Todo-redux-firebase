import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { authRegister } from '@store/actions/authActions';

export const Register = () => {
  const [credentials, setCredentials] = useState({email: '', password: ''});
  const {error} = useSelector(state => state.auth);
  const router = useNavigate();
  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();
    dispatch(authRegister(credentials));
  }

  return (
    <div>
      <form>
        <TextField
          label="Email" 
          variant="outlined"
          value={credentials.email}
          onChange={e => setCredentials({...credentials, email: e.target.value})}
          type="text"
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
          onClick={(e) => register(e)}
        >
          Register
        </Button>
      </form>
      <p>Already have an account?<strong onClick={() => router('login')}>Login</strong></p>
    </div>
  )
}
