import { Link } from 'react-router-dom';
import './linkdink1.css'
import React, { useState } from 'react';




function Linkdink7() {
  const [activeItem, setActiveItem] = useState(['']);
  const [showSmallImage, setShowSmallImage] = useState(false);

  const toggleSmallImage = () => {
    setShowSmallImage(!showSmallImage);
  };
  return (
    <div className='value-main-container'>
      <div className="layout-wrapper">
        <div className="layout-header">
          <div className="header-left-section">
            <div className="logo-box">
              <a href="/" class="active-link"><img src="images/logo.png"/> <span></span></a>
            </div>

            <div className="search-wrapper">
              <div className="search-box">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Search" />
              </div>
            </div>
          </div>
          <div className="nav-items">
            <div
              className={`nav-home ${activeItem === 'home' ? 'active' : ''}`}
              onClick={() => setActiveItem('home')}
            >
              <div className="nav-home-icon">
                <img src="/images/home.png" alt="React logo" />
              </div>
              <div className="nav-home-label">Home</div>
            </div>

            <div
              className={`nav-network ${activeItem === 'network' ? 'active' : ''}`}
              onClick={() => setActiveItem('network')}
            >
              <div className="nav-network-icon">
                <img src="/images/network.png" alt="React logo" />
              </div>
              <div className="nav-network-label">My Network</div>
            </div>

            <div
              className={`nav-jobs ${activeItem === 'jobs' ? 'active' : ''}`}
              onClick={() => setActiveItem('jobs')}
            >
              <div className="nav-jobs-icon">
                <img src="/images/jobs.png" alt="React logo" />
              </div>
              <div className="nav-jobs-label">Jobs</div>
            </div>

            <div
              className={`nav-messaging ${activeItem === 'messaging' ? 'active' : ''}`}
              onClick={() => setActiveItem('messaging')}
            >
              <div className="nav-messaging-icon">
                <img src="/images/message.png" alt="React logo" />
              </div>
              <div className="nav-messaging-label">Messaging</div>
            </div>

            <div
              className={`nav-notifications ${activeItem === 'notifications' ? 'active' : ''}`}
              onClick={() => setActiveItem('notifications')}
            >
              <div className="nav-notifications-icon">
                <img src="/images/notification.png" alt="React logo" />
              </div>
              <div className="nav-notifications-label">Notifications</div>
            </div>
          </div>
          <div className="profile-section">
            <div className="profile-image-box">
              <img
                src="./images/user-1.png"
                alt="React logo"
                onClick={toggleSmallImage}
              />
            </div>

            <div className="green-dot"></div>

            {showSmallImage && (
              <div className="small-image">
                <div className='profile-menu-wrapper'>
                  <div className='profile-menu-container'>
                    <div className='profile-header'>
                      <div className='profile-image-wrapper'>
                        <img src='images/user-1.png' alt='profile picture' />
                      </div>
                      <div className='profile-info'>
                        <div className='profile-name'>Rayan Walton</div>
                        <Link to="/" className="profile-link">
                          See your profile
                        </Link>
                        </div>
                    </div>

                    <div className='profile-menu-item'>
                      <div className='menu-icon-text'>
                        <div className='menu-icon'>
                          <img src='images/feedback.png' alt='settings icon' />
                        </div>
                        <div className='menu-text'> Give Feedback</div>
                      </div>
                    </div>

                    <div className='profile-menu-item'>
                      <div className='menu-icon-text'>
                        <div className='menu-icon'>
                          <img src='images/setting.png' alt='help icon' />
                        </div>
                        <div className='menu-text'>  Settings & Privacy</div>
                      </div>
                    </div>

                    <div className='profile-menu-item'>
                      <div className='menu-icon-text'>
                        <div className='menu-icon'>
                          <img src='images/help.png' alt='display icon' />
                        </div>
                        <div className='menu-text'>Help & Support  </div>
                      </div>
                    </div>

                    <div className='profile-menu-item'>
                      <div className='menu-icon-text'>
                        <div className='menu-icon'>
                          <img src='images/display.png' alt='feedback icon' />
                        </div>
                        <div className='menu-text'>Display & Accessibility</div>
                      </div>
                    </div>

                    <div className='profile-menu-item'>
                      <div className='menu-icon-text'>
                        <div className='menu-icon'>
                          <img src='images/logout.png' alt='logout icon' />
                        </div>
                        <div className='menu-text'>Logout</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Linkdink7;