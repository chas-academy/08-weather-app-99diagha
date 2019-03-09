import React from 'react';

import './App.css';
import Weather from './Weather';
import Forecast from './Forecast';

const App = () => {
    return (
      <div className="container">
          <Weather />
          <Forecast />
      </div>
    );
};

export default App;
