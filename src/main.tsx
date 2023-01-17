import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Loading from './components/Loading';

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </React.StrictMode>,
);
