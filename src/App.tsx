import './App.css';
import './index.css';
import { Button, Checkbox, TextField, ThemeProvider, Tooltip, createTheme } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from 'react';
import { PlaceCard } from './components/PlaceCard';
import { SearchService } from '../services/search-service';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF004F'
    }
  },
  typography: {
    fontFamily: [
      "Montserrat",
      'Roboto',
      'sans-serif',
    ].join(',')
  }
});

function App()
{
  const [canUseLocation, setCanUseLocation] = useState(true);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');

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
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          >
          </TextField>
          <div style={{
            width: '20px'
          }}></div>
          <Button variant='contained' size='large' onClick={() =>
          {
            setLoading(true);

            if (canUseLocation) {
              const geolocation = navigator.geolocation;

              geolocation.getCurrentPosition((position) =>
              {
                const coordinates = position.coords;
                const lat = coordinates.latitude;
                const long = coordinates.longitude;

                SearchService.searchLocation({
                  latitude: lat,
                  longitude: long,
                  query: query,
                })
                  .then(() => setLoading(false));
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
        {
          loading ?
            <div>
              {[0, 1, 2,].map((value) =>
              {
                return <PlaceCard key={value} loading />;
              })}
            </div>
            :
            <div>
              <PlaceCard />
            </div>
        }
      </div>
    </ThemeProvider>
  );
}

export default App;
