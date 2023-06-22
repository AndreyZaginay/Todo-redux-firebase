import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { privateRoutes, publicRoutes } from '../router/routs';

export const AppRouter = () => {
  const {user} = useSelector(state => state.auth);

  return (
    user 
      ?
        <Routes>
          {privateRoutes.map(({ path, component, index }, i) => (
            <Route key={ `route-${i}` } path={ path } Component={ component } index={ index }/>
          ))}
          <Route path={'*' || '/'} element={<Navigate to='/todos'/>}/>
        </Routes>
      :
        <Routes>
          {publicRoutes.map(({ path, component, index }, i) => (
            <Route key={ `route-${i}` } path={ path } Component={ component } index={ index }/>
          ))}
          <Route path={'*' || '/'} element={<Navigate to='/login'/>}/>
        </Routes> 
    )
}
