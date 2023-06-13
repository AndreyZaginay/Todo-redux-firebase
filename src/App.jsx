import React from 'react';
import { BrowserRouter } from "react-router-dom";

import { AppRouter } from './components/AppRouter';

export const App = () => (
    <BrowserRouter>
        <AppRouter/>
   </BrowserRouter> 
);