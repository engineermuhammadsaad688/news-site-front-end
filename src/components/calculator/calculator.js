import React, { useState } from 'react';

 import './calculator.css'

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');




  const calculate = (operation) => {
    const a = parseFloat(num1); 
    const b = parseFloat(num2);


    if (operation === 'add') {
      setResult(a + b);
    } else if (operation === 'subtract') {
      setResult(a - b);
    } else if (operation === 'multiply') {
      setResult(a * b);
    } else if (operation === 'divide') {
        setResult(a / b);
    }
  };

  const handleChangeNumOne=(e)=>{
    setNum1(e.target.value)
  }

  const handleChangeNumTwo=(e)=>{
    setNum2(e.target.value)
  }

  return (
    <div style={{ padding: 20, maxWidth: 400, margin: 'auto', textAlign: 'center' }}>
      <h2>Simple Calculator</h2>

      <input
        type="text"
        placeholder="First Number"
        value={num1}
        onChange={handleChangeNumOne}
      />
      <br /><br />

      <input
        type="text"
        placeholder="Second Number"
        value={num2}
        onChange={handleChangeNumTwo}
      />
      <br /><br />

      <button onClick={() => calculate('add')}>add</button>
      <button onClick={() => calculate('subtract')}>minus</button>
      <button onClick={() => calculate('multiply')}>multiply</button>
      <button onClick={() => calculate('divide')}>divide</button>

      <br /><br />

      <h3>Result: {result}</h3>
    </div>
  );
}

export default Calculator;
