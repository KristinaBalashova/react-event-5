import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import App from './App.jsx';
import './index.css';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto',
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </CssBaseline>
  </StrictMode>,
);
