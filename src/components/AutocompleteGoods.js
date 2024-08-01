import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField, Typography, Card, CardContent } from '@mui/material';
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
    <div style={{ margin: '20px 0' }}>
      <Typography variant="h6">Pilih Barang</Typography>
      <Autocomplete
        options={goods}
        getOptionLabel={(option) => option.name}
        onChange={(event, value) => handleSelect(value)}
        renderInput={(params) => <TextField {...params} label="Barang" variant="outlined" />}
      />
      {selectedGoods && (
        <Card style={{ marginTop: '20px' }}>
          <CardContent>
            <Typography variant="body1"><strong>Deskripsi:</strong> {selectedGoods.description}</Typography>
            <Typography variant="body1"><strong>Harga:</strong> Rp. {new Intl.NumberFormat('id-ID').format(selectedGoods.price)}</Typography>
            <Typography variant="body1"><strong>Diskon:</strong> {selectedGoods.discount}%</Typography>
            <Typography variant="body1"><strong>Total:</strong> Rp. {new Intl.NumberFormat('id-ID').format(selectedGoods.price * (1 - selectedGoods.discount / 100))}</Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AutocompleteGoods;
