import { useState } from 'react';
import './calculator.css'

function Calculator() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');
    const calculator = (operation) => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        if (operation === 'add') {
            const data = a + b
            setResult(data);
        }
        else if (operation === 'subtract') {
            const data = a - b
            setResult(data);
        }
        else if (operation === 'multiply') {
            const data = a * b
            setResult(data);
        }
        else if (operation === 'divide') {
            const data = a / b
            setResult(data);
        }
    };
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
                type='text'
                placeholder='first Number'
                value={num1}
                onChange={handleChangeNumOne}
            />
            <input
                type='text'
                placeholder='Second Number'
                value={num2}
                onChange={handleChangeNumTwo}
            />
            <br /> <br />
            <button onClick={() => calculator('add')}>add</button>
            <button onClick={() => calculator('subtract')}>minus</button>
            <button onClick={() => calculator('multiply')}>multiply</button>
            <button onClick={() => calculator('divide')}>divide</button>

            <br /> <br />
            <h3>Result: {result}</h3>

        </div>
    );
}
export default Calculator;