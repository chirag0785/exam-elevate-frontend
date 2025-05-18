import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

import { BrowserRouter } from "react-router";
import { Routes, Route } from "react-router";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/sign-in' element={<SignIn />} /> */}
          <Route path='/' element={<App />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>

  </StrictMode>,
)
