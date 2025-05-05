import './App.css';
import './index.css';
import { Button, Checkbox, IconButton, TextField, ThemeProvider, Tooltip, createTheme } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF004F'
    }
  }
});

function App()
{
  const [canUseLocation, setCanUseLocation] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <div className='flex flex-column flex-center'>
        <h1>BITE<span className='font-color-pink'>MAP</span></h1>
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
          <Button variant='contained' size='large' onClick={() =>
          {
            if (canUseLocation) {
              const geolocation = navigator.geolocation;

              geolocation.getCurrentPosition((position) =>
              {
                const coordinates = position.coords;
                const lat = coordinates.latitude;
                const long = coordinates.longitude;
              }, (error) =>
              {
                
              });

              return;
            }


          }}>FIND</Button>
        </div>
        <div className='flex flex-center'>
          <Checkbox
            checked={canUseLocation}
            onClick={() => setCanUseLocation((value) => value ? false : true)}
          />
          <div>
            Use location
          </div>
          <div style={{
            width: '5px'
          }}></div>
          <Tooltip title='Using your current location allows better responses'>
            <InfoIcon />
          </Tooltip>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
