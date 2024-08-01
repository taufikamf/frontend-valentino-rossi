import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { getGoods } from '../utils/api';

const AutocompleteGoods = ({ portId, onGoodsSelect }) => {
  const [goods, setGoods] = useState([]);
  const [selectedGoods, setSelectedGoods] = useState(null);

  useEffect(() => {
    if (portId) {
      const fetchGoods = async () => {
        const data = await getGoods(portId);
        setGoods(data);
      };
      fetchGoods();
    }
  }, [portId]);

  const handleSelect = (value) => {
    setSelectedGoods(value);
    onGoodsSelect(value);
  };

  return (
    <>
      <Autocomplete
        options={goods}
        getOptionLabel={(option) => option.name}
        onChange={(event, value) => handleSelect(value)}
        renderInput={(params) => <TextField {...params} label="Select Goods" />}
      />
      {selectedGoods && (
        <div>
          <p>Description: {selectedGoods.description}</p>
        </div>
      )}
    </>
  );
};

export default AutocompleteGoods;
