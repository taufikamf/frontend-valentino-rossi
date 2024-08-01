import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField } from '@mui/material';
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
    <Autocomplete
      options={countries}
      getOptionLabel={(option) => option.name}
      onChange={(event, value) => onCountrySelect(value.id)}
      renderInput={(params) => <TextField {...params} label="Select Country" />}
    />
  );
};

export default AutoCompleteCountry;
