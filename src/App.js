import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

import AirHome from './Pages/AirHome';
import AA from './components/airHome/a';
import CalculatorPage from './Pages/calculatorPage';
import CalculatorMain from './components/calculatorMain/calculatorMain';
import AirbanbCloneProject from './components/airHome/airbanbCloneProject';
import Linkdink from './components/test/linkdink';


function App() {
  return (
    <>
      <Router>
        <Routes>


          <Route path="c" element={< CalculatorPage />} />






        </Routes>
      </Router>
      <Router>
        <Routes>


          <Route path="/airHome" element={<AirHome />} />
          <Route path="air" element={<AA />} />
          <Route path="Airbanb" element={< AirbanbCloneProject />} />
          <Route path="CalculatorMain" element={< CalculatorMain />} />


        </Routes>
      </Router>







            <Router>
        <Routes>


          <Route path="/" element={< Linkdink />} />








        </Routes>
      </Router>
    </>
  );
}

export default App;
