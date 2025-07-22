import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

import AirHome from './Pages/AirHome';
import AA from './components/airHome/a';
import CalculatorPage from './Pages/calculatorPage';



function App() {
  return (
    <Router>
      <Routes>


        <Route path="/airHome" element={<AirHome />} />
        <Route path="" element={<AA />} />
                <Route path="c" element={< CalculatorPage/>} />












      </Routes>
    </Router>
  );
}

export default App;
