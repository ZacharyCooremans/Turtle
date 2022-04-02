import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// With new React 18 you need to make a container by getting the element id
const container = document.getElementById('root');
// Create a root with the new ReactDOMClient using the container
const root = ReactDOMClient.createRoot(container)
// Render with root
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
)


