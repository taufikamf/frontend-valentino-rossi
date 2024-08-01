# Frontend Test Application

This is a frontend test application developed using React.js.

## Features

- Autocomplete Country selection from API
- Autocomplete Port selection based on selected Country from API
- Autocomplete Goods selection based on selected Port from API
- Display of Goods description, price, discount, and total price

## How to Install

1. Clone the repository:

```console
git clone https://github.com/taufikamf/frontend-valentino-rossi.git
```

2. Navigate to the project directory:

```console
cd frontend-valentino-rossi
```

3. Install the dependencies:

```console
npm install
```

4. Run the application:

```console
npm start
```

## API Used

- Countries: `http://202.157.176.100:3000/negaras`
- Ports: `http://202.157.176.100:3000/pelabuhans?filter={"where" : {"id_negara":1}}`
- Goods: `http://202.157.176.100:3000/barangs?filter={"where" : {"id_pelabuhan":11}}`

## Technologies Used

- React.js
- Axios for API requests
- Material-UI for UI components

## Notes

- The application assumes the API endpoints are accessible.
- Data is fetched dynamically based on user selection.
