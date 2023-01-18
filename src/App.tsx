import Router from './modules/router';
import ThemeProvider from './theme';

export default function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
