import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField, Typography } from '@mui/material';
import { getCountries } from '../utils/api';

const AutoCompleteCountry = ({ onCountrySelect }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await getCountries();
      setCountries(data);
    };
    fetchCountries();
  }, []);

  return (
    <div style={{ margin: '20px 0' }}>
      <Typography variant="h6">Pilih Negara</Typography>
      <Autocomplete
        options={countries}
        getOptionLabel={(option) => option.name}
        onChange={(event, value) => onCountrySelect(value.id)}
        renderInput={(params) => <TextField {...params} label="Negara" variant="outlined" />}
      />
    </div>
  );
};

export default AutoCompleteCountry;
