
function Example() {
  // States for input numbers and result
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  // Function to handle the calculation
  const calculate = (operation) => {
    const a = parseFloat(num1); // Convert input to number
    const b = parseFloat(num2);

    // Check if inputs are valid numbers
    if (isNaN(a) || isNaN(b)) {
      setResult('Please enter valid numbers');
      return;
    }

    // Use if-else statements for operation
    if (operation === 'add') {
      setResult(a + b);
    } else if (operation === 'subtract') {
      setResult(a - b);
    } else if (operation === 'multiply') {
      setResult(a * b);
    } else if (operation === 'divide') {
      if (b === 0) {
        setResult('Cannot divide by zero');
      } else {
        setResult(a / b);
      }
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: 400, margin: 'auto', textAlign: 'center' }}>

    </div>
  );
}

export default Example;
