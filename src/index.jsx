import React, { createContext } from 'react';
import { createRoot } from 'react-dom/client';

import { db } from './firebase';
import { App } from './App';

export const Context = createContext(null);

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode><App /></React.StrictMode>
);