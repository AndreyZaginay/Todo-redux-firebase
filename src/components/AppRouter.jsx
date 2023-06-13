import React from 'react';

import { privateRoutes, publicRoutes } from '../router/routs';

export const AppRouter = () => {
  return (
    <Routes>
        {privateRoutes.map(({ path, component, index }, i) => (
            <Route key={ `route-${i}` } path={ path } Component={ component } index={ index }/>
        ))}
        <Route path={'*' || '/'} element={<Navigate to='/todos'/>}/>
    </Routes>
  )
}
