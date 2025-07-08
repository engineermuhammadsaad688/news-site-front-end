import './header.css'

function Header() {
    return (
        <div className='header-container'>
            <div className='logo-container'>
                <img src="/images/news.jpg" alt="logo" />
            </div>

            <div className='navbar'>
                <div className='nav-item'>Home</div>
                <div className='nav-item'>Business</div>
                <div className='nav-item'>Sports</div>
                <div className='nav-item'>Entertainment</div>
                <div className='nav-item'>Politics</div>
            </div>
        </div>
    );
}

export default Header;
