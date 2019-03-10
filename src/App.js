import React, { useState } from 'react';

import './App.css';
import Weather from './Weather';
import Forecast from './Forecast';
import Unit from './Unit';

const App = () => {
    const [selectedUnit, setSelectedUnit] = useState('metric');

    const changeUnitTo = (unit) => {
        setSelectedUnit(unit);
    };

    return (
      <div className="wrapper">
          <Unit unit={selectedUnit} changeUnitTo={changeUnitTo}/>
          <Weather unit={selectedUnit} />
          <Forecast unit={selectedUnit} />
      </div>
    );
};

export default App;
