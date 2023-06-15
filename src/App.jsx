import React from 'react';
import { BrowserRouter } from "react-router-dom";

import { AppRouter } from './components/AppRouter';
import { Navbar } from './components/UI/Navbar/Navbar';

export const App = () => (
    <BrowserRouter>
        <Navbar/>
        <AppRouter/>
    </BrowserRouter> 
);