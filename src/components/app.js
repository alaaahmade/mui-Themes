import Page from './Page/Page';
import { Box, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from './themes';
import './style.css'
import { useState } from 'react';


const App = () => {
  const [modeState, setModeState] = useState(false)

  return (<ThemeProvider theme={modeState ? darkTheme : lightTheme} >
  <Box sx={{
        bgcolor: 'primary.main'
      }}>
    <Page setModeState={setModeState}/>
  </Box>

    </ThemeProvider>)
};

export default App;
