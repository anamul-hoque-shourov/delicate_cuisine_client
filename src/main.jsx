import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ContextProvider from './contexts/ContextProvider';
import { RouterProvider } from 'react-router';
import { routes } from './routes/Routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={routes} />
    </ContextProvider>
  </StrictMode>,
);
