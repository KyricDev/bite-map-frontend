import { useState } from 'react';
import './App.css';
import './index.css';
import { Button, TextField, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF004F'
    }
  }
});

function App()
{

  return (
    <ThemeProvider theme={theme}>
      <div className='flex flex-column flex-center'>
        <h1>BITE <span className='font-color-pink'>MAP</span></h1>
        <h3>Find Your Perfect Dining Spot</h3>
        <p>Discover the best restaurants near you with our easy-to-use restaurant finder tool. Whether you're craving a cozy cafe, a trendy bistro, or a fine dining experience, we've got you covered.</p>
        <div className='flex flex-center'>
          <TextField
            variant='outlined'
            label='Ask'
          >
          </TextField>
          <div style={{
            width: '20px'
          }}></div>
          <Button variant='contained' size='large'>Ask</Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
