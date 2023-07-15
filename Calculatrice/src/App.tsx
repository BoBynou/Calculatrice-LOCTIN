import React, { useState } from 'react';
import './App.css';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');

  const buttons = [
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '/', '=',
    'C',
  ];

  const handleButtonClick = (buttonValue: string) => {
    debugger;
    if (buttonValue === '=') {
      try {
        const result = eval(displayValue);
        setDisplayValue(result.toString());
      } catch (error) {
        console.error('Erreur de calcul', error);
      }
    } else if (buttonValue === 'C') {
      setDisplayValue('0');
    } else if (buttonValue === '.') {
      setDisplayValue((prevValue) =>
      prevValue === '0' && buttonValue === '.' ? '0.' : prevValue + buttonValue
      );
    } else if (buttonValue === '/' || buttonValue === '+' || buttonValue === '-' || buttonValue === '*') {
      setDisplayValue((prevValue) =>
      prevValue === '0' ? prevValue + buttonValue : prevValue + buttonValue
      );
    } else {
      setDisplayValue((prevValue) =>       
        prevValue === '0' ? buttonValue : prevValue + buttonValue

      );
    }
  };

  return (
    <div>
      <div className="display">{displayValue}</div>
      <div className="buttons">
        {buttons.map((buttonValue) => (
          <button
            key={buttonValue}
            onClick={() => handleButtonClick(buttonValue)}
          >
            {buttonValue}
          </button>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;
