import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import BookmarkProvider from './context/BookmarkContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BookmarkProvider>
      <RouterProvider router={router} />
    </BookmarkProvider>
  </StrictMode>,
);
