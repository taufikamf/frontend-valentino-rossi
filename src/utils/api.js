import axios from 'axios'

const BASE_URL = 'http://202.157.176.100:3000';

export const getCountries = async () => {
  const response = await axios.get(`${BASE_URL}/negaras`);
  return response.data;
};

export const getPorts = async (countryId) => {
  const response = await axios.get(`${BASE_URL}/pelabuhans?filter={"where" : {"id_negara":${countryId}}}`);
  return response.data;
};

export const getGoods = async (portId) => {
  const response = await axios.get(`${BASE_URL}/barangs?filter={"where" : {"id_pelabuhan":${portId}}}`);
  return response.data;
};
