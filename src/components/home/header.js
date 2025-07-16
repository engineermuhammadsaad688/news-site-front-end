import './header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Users', path: '/dashboard' },
    { name: 'Categories', path: '/category' },
    { name: 'Articles', path: '/article' }
  ];

  return (
    <div className='header-container'>
      <div className='logo-container'>
        <img src="/images/news.jpg" alt="logo" />
      </div>

      <div className='navbar'>
        {navItems.map((item, index) => (
          <div
            key={index}
            className='nav-item'
            onClick={() => navigate(item.path)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
