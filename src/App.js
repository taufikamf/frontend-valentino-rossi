import React, { useState } from 'react';
import { Container, Typography, Paper, Divider } from '@mui/material';
import AutoCompleteCountry from './components/AutoCompleteCountry';
import AutocompletePort from './components/AutocompletePort';
import AutocompleteGoods from './components/AutocompleteGoods';

function App() {
  const [countryId, setCountryId] = useState(null);
  const [portId, setPortId] = useState(null);
  const [selectedGoods, setSelectedGoods] = useState(null);

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Frontend Test Application
        </Typography>
        <Divider style={{ margin: '20px 0' }} />
        <AutoCompleteCountry onCountrySelect={setCountryId} />
        {countryId && <AutocompletePort countryId={countryId} onPortSelect={setPortId} />}
        {portId && <AutocompleteGoods portId={portId} onGoodsSelect={setSelectedGoods} />}
      </Paper>
    </Container>
  );
}

export default App;
