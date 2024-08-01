import React, { useState } from 'react';
import AutoCompleteCountry from './components/AutoCompleteCountry';
import AutocompletePort from './components/AutocompletePort';
import AutocompleteGoods from './components/AutocompleteGoods';

function App() {
  const [countryId, setCountryId] = useState(null);
  const [portId, setPortId] = useState(null);
  const [selectedGoods, setSelectedGoods] = useState(null);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Frontend Test Application</h1>
      <AutoCompleteCountry onCountrySelect={setCountryId} />
      {countryId && <AutocompletePort countryId={countryId} onPortSelect={setPortId} />}
      {portId && <AutocompleteGoods portId={portId} onGoodsSelect={setSelectedGoods} />}
      {selectedGoods && (
        <div>
          <h3>Details:</h3>
          <p>Price: Rp. {new Intl.NumberFormat('id-ID').format(selectedGoods.price)}</p>
          <p>Discount: {selectedGoods.discount}%</p>
          <p>Total: Rp. {new Intl.NumberFormat('id-ID').format(selectedGoods.price * (1 - selectedGoods.discount / 100))}</p>
        </div>
      )}
    </div>
  );
}

export default App;
