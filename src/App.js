import './App.css';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import SignUp from './Pages/signUp';
import Category from './Pages/Category';
import Article from './Pages/Article';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/category" element={<Category />} />

          <Route path="/a" element={<SignUp />} />
                    <Route path="/article" element={<Article />} />





      </Routes>
    </Router>
  );
}

export default App;
