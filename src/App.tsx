import { useEffect } from 'react';

import Router from './modules/router';
import ThemeProvider from './theme';
import axiosInstance from './utils/axios';

export default function App() {
  useEffect(() => {
    axiosInstance.get('/dfdf/', { params: 'test' });
  }, []);

  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
