/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { Box, ThemeProvider } from '@mui/material';
import Page from './Page/Page';
import { darkTheme, lightTheme } from './themes';
import './style.css';

function App() {
  const [modeState, setModeState] = useState(false);

  return (
    <ThemeProvider theme={modeState ? darkTheme : lightTheme}>
      <Box sx={{
        bgcolor: 'primary.main',
      }}
      >
        <Page setModeState={setModeState} />
      </Box>

    </ThemeProvider>
  );
}

export default App;
