import { AppBar, Button, Grid, Toolbar, Typography} from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return ( 
    <AppBar color={'primary'} position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" component="div">
            Todos
          </Typography>
          <Grid container justifyContent={'flex-end'}>
            {/* <div className='buttons'>
              {user 
              ? <Button onClick={() => auth.signOut()} variant='contained' color="secondary">Logout</Button>
              : <NavLink to={'/login'}><Button variant='contained' color="secondary">Login</Button></NavLink>
              }
            </div> */}
          </Grid>
        </Toolbar>
    </AppBar>
  )
}