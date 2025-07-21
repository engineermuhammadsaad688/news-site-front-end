import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';


import CalculatorPage from './Pages/Calculator';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CalculatorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
