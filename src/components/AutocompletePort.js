import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { getPorts } from '../utils/api';

const AutocompletePort = ({ countryId, onPortSelect }) => {
  const [ports, setPorts] = useState([]);

  useEffect(() => {
    if (countryId) {
      const fetchPorts = async () => {
        const data = await getPorts(countryId);
        setPorts(data);
      };
      fetchPorts();
    }
  }, [countryId]);

  return (
    <Autocomplete
      options={ports}
      getOptionLabel={(option) => option.name}
      onChange={(event, value) => onPortSelect(value.id)}
      renderInput={(params) => <TextField {...params} label="Select Port" />}
    />
  );
};

export default AutocompletePort;
