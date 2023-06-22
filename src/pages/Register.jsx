import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const [credentials, setCredentials] = useState({email: '', password: ''});
  const router = useNavigate();

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
        <Button>Register</Button>
      </form>
      <p>Already have an account?<strong onClick={() => router('login')}>Login</strong></p>
    </div>
  )
}
