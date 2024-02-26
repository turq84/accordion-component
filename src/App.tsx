import { ThemeProvider } from '@emotion/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import theme from './constants/theme';
import Home from './pages/Home';

const router = createBrowserRouter([{ path: '/', element: <Home /> }]);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
