import './locales/i18n';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import Loading from './components/Loading';
import { AuthProvider, LocalesProvider } from './contexts';

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <AuthProvider>
          <LocalesProvider>
            <App />
          </LocalesProvider>
        </AuthProvider>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
);
