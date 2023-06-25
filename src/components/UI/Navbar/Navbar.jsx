import React from 'react';
import { AppBar, Button, Grid, Toolbar, Typography} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { authLogout } from '@store/actions/authActions';



export const Navbar = () => {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return ( 
    <AppBar color={'primary'} position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" component="div">
            Todos
          </Typography>
          <Grid container justifyContent={'flex-end'}>
            {user &&   
              <Typography marginRight={'10px'} variant="h6" color="inherit" component="div">
                {user.email}
              </Typography>
            }
            <div className='buttons'>
              {user 
              ? <Button onClick={() => dispatch(authLogout())} variant='contained'>Logout</Button>
              : <NavLink to={'/login'}><Button variant='contained'>Login</Button></NavLink>
              }
            </div>
          </Grid>
        </Toolbar>
    </AppBar>
  )
}