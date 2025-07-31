import { useState } from 'react';
import './calculator.css'

function Calculator() {
  const [Num1, setNum1] = useState('')
  const [Num2, setNum2] = useState('')
  const [result, setResult] = useState('')





  const Calculate = (operation) => {
    const a = parseFloat(Num1);
    const b = parseFloat(Num2);



    if (operation === 'add') {
      const data = a + b
      setResult(data);
    }
    else if (operation === 'subtract') {
      const data = a - b
      setResult(data);
    }
    else if (operation === 'multiply') {
      const data = a - b
      setResult(data);
    }
    else if (operation === 'divide') {
      const data = a - b
      setResult(data);
    }

  }
  const handleChangeNumOne = (e) => {
    setNum1(e.target.value)
  }
  const handleChangeNumTwo = (e) => {
    setNum2(e.target.value)
  }


  return (
    <div style={{ padding: 20, maxWidth: 400, margin: 'auto', textAlign: 'center' }}>
      <h2>Simple Calculator</h2>

      <input
        type="text"
        placeholder="First Number"
        value={Num1}
        onChange={handleChangeNumOne}
      />
      <br /><br />
      <input
        type="text"
        placeholder="second Number"
        value={Num2}
        onChange={handleChangeNumTwo}
      />
      <br /><br />


      <button onClick={() => Calculate('add')}>add</button>
      <button onClick={() => Calculate('subtract')}>minus</button>
      <button onClick={() => Calculate('multiply')}>multiply</button>
      <button onClick={() => Calculate('divide')}>divide</button>

      <br /><br />
      <h3>Result: {result}</h3>

    </div>
  );
}
export default Calculator;

















