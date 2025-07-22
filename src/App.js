import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

import AirHome from './Pages/AirHome';
import AA from './components/airHome/a';
import CalculatorPage from './Pages/calculatorPage';
import AirbanbCloneProjectPage from './Pages/AirbanbCloneProjectPage';



function App() {
  return (
    <Router>
      <Routes>


        <Route path="/airHome" element={<AirHome />} />
        <Route path="" element={<AA />} />
                <Route path="c" element={< CalculatorPage/>} />
                                <Route path="e" element={<AirbanbCloneProjectPage />} />













      </Routes>
    </Router>
  );
}

export default App;
