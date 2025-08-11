import './linkdink.css'
import { Link } from 'react-router-dom';

import React, { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';


<FaAngleRight />
function Linkdink() {

  const [activeItem, setActiveItem] = useState('in');
  const [showSmallImage, setShowSmallImage] = useState(false);

  const toggleSmallImage = () => {
    setShowSmallImage(!showSmallImage);
  };
  const [darkMode, setDarkMode] = useState(true);

  const handleClick = () => {
    setDarkMode(!darkMode); 
  };

  return (
    <div className='main-container-top'>
      <div className="layout-wrapper">
        <div className="layout-header">
          <div className="header-left-section">
            <div className="logo-box">
              <a href="main" class="active-link"><img src="images/logo.png" /> <span></span></a>
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
                        <Link to="/main" className="profile-link">
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
                        <div className={darkMode ? 'dark' : 'light'}>
                          <div className="menu-text" onClick={handleClick}>
                            Display & Accessibility
                          </div>
                        </div>
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
        <div className='linkedin-layout'>
          <div className='linkedin-profile-section'>
            <div className='linkedin-cover-container'>
              <div className='linkedin-cover-img'>
                <img src='./images/cover-pic.png' alt='profile' />
              </div>
              <div className='linkedin-cover-content'>
                <div className='linkedin-profile-pic-wrapper'>
                  <img src='./images/user-1.png' alt='profile' />
                </div>
                <div className='linkedin-info-container'>
                  <div className='linkedin-info-header'>
                    <div className='linkedin-info-header-left'>
                      <div className='linkedin-info-name'>Rayan Walton</div>
                      <div className='linkedin-info-title'>Web Developer at Microsoft</div>
                    </div>
                    <div className='linkedin-stats'>
                      <div className='linkedin-stat-row'>
                        <div>Your profile views</div>
                        <div>52</div>
                      </div>
                      <div className='linkedin-stat-row'>
                        <div>Your post views</div>
                        <div>810</div>
                      </div>
                      <div className='linkedin-stat-row-border'>
                        <div>Your connections</div>
                        <div>205</div>
                      </div>
                    </div>
                    <div className='linkedin-links'>
                      <div className='linkedin-links-left'>
                        <div className='linkedin-links-left-img'>
                          <img src='./images/items.png' alt='profile' />
                        </div>
                        <div>My items</div>
                      </div>
                      <div className='linkedin-links-right'>
                        <div className='linkedin-links-right-img'>
                          <img src='./images/premium.png' alt='profile' />
                        </div>
                        <div style={{ width: '100%' }}
                        >Try Premium</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='linkedin-side-panel'>
              <div className='linkedin-side-panel-section'>
                <div className='linkedin-side-panel-heading'>RECENT</div>
                {["Web Development", "User Interface", "Online Learning", "Learn Online", "Code Better", "Group Learning"].map((item, idx) => (
                  <div className='linkedin-side-panel-item' key={idx}>
                    <div style={{ display: 'flex', alignItems: 'center' }}><img src='./images/recent.png' alt='profile' /></div>
                    <div>{item}</div>
                  </div>
                ))}
              </div>
              <div className='linkedin-side-panel-section'>
                <div className='linkedin-side-panel-heading'>GROUPS</div>
                {["Web Design Group", "HTML & CSS Learners", "Python & JavaScript Group", "Learn Coding Online"].map((group, idx) => (
                  <div className='linkedin-side-panel-item' key={idx}>
                    <div style={{ display: 'flex', alignItems: 'center' }}><img src='./images/group.png' alt='profile' /></div>
                    <div>{group}</div>
                  </div>
                ))}
              </div>
              <div className='linkedin-side-panel-section'>
                <div className='linkedin-side-panel-heading'>
                  <a href="https://github.com/engineermuhammadsaad688/news-site-front-end/tree/saad-two/public/linkedink-images">HASHTAG</a>
                </div>
                {["webdevelopment", "userinterface", "onlinelearning"].map((tag, idx) => (
                  <div className='linkedin-side-panel-item' key={idx}>
                    <div style={{ display: 'flex', alignItems: 'center' }}><img src='./images/hashtag.png' alt='profile' /></div>
                    <div>{tag}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='linkedin-post-section'>
            <div className='linkedin-post-box'>
              <div className='linkedin-post-header'>
                <div className='linkedin-post-header-img'>
                  <img src='./images/user-1.png' alt='profile' />
                </div>
                <div className='linkedin-post-header-input'>
                  <input type='text' placeholder='Write a post' className='custom-input' />
                </div>
              </div>
              <div className='linkedin-post-actions'>
                {[['photo.png', 'Photo'], ['video.png', 'Video'], ['Event.png', 'Event']].map(([img, label], idx) => (
                  <div className='linkedin-post-action' key={idx}>
                    <div className='linkedin-post-action-icon'><img src={`./images/${img}`} alt='profile' /></div>
                    <div>{label}</div>
                  </div>
                ))}
                <div className='linkedin-post-button'>Post</div>
              </div>
            </div>
            <div className='linkedin-post-feed'>
              <div className='linkedin-post-content'>
                <div className='linkedin-post-user'>
                  <div className='post-card'>
                    <div className='post-card-left'>
                      <img src='./images/user-1.png' alt='profile' />
                    </div>
                    <div className='post-card-right'>
                      <div className='post-card-section'>
                        Benjamin Leo
                      </div>
                      <div className='post-card-topics'>
                        Founder and CEO at Gellelio Group | Angel Investor
                      </div>
                      <div >
                        2 hours ago</div>
                    </div>
                  </div>
                </div>
                <div className='inkedin-post-text'>

                  The success of every websites depends on search engine optimisation and digital marketing strategy<br /> If you are on first page of all major search engines then you are ahead among your competitors.
                </div>
                <div className='linkedin-post-text'>
                  <img src='./images/post-image-1.png' alt='profile' />
                </div>

                <div className='linkedin-post-footer'>
                  <div className='post-footer-wrapper'>
                    <div className='footer-divider-left'>
                      <div className='footer-like'>
                        <img src='./images/like.png' alt='profile' />
                      </div>
                      <div className='footer-love'>
                        <img src='./images/love.png' alt='profile' />
                      </div>
                      <div className='footer-clap'>
                        <img src='./images/clap.png' alt='profile' />
                      </div>
                    </div>
                    <div className='footer-divider-right'>
                      Abhinav Mishra and 75 others
                    </div>
                  </div>
                  <div className='post-footer-actions'>
                    <div>22 comments : 40   shares</div>

                  </div>

                </div>
                <div className='post-extra-container'>
                  <div className='post-extra-left'>
                    <div className='post-extra-picture'>
                      <img src='./images/user-1.png' alt='profile' />

                    </div>
                    <div className='post-extra-down-arrow'>
                      <img src='./images/down-arrow.png' alt='profile' />

                    </div>
                  </div>
                  <div className='post-extra-right'>
                    <div className='post-extra-views'>
                      <div className='post-extra-views-top'>
                        <div className='post-top-views'>
                          <img src='./images/like.png' alt='profile' />
                        </div>
                        <div className='post-extra-like'>
                          Like
                        </div>
                      </div>
                      <div className='post-extra-views-value'>
                        <div className='post-option'>
                          <img src='./images/Comment.png' alt='profile' />

                        </div>
                        <div className='post-extra-comment'>
                          Comment
                        </div>
                      </div>
                      <div className='post-extra-views-topic'>
                        <div className=' post-extra-views-topic-left'>
                          <img src='./images/Share.png' alt='profile' />

                        </div>
                        <div className='post-extra-share'>
                          Share
                        </div>
                      </div>
                      <div className='post-extra-views-level'>
                        <div className='post-extra-views-level-left'>
                          <img src='./images/Send.png' alt='profile' />
                        </div>
                        <div className='post-extra-send'>
                          Send
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='linkedin-post-feed'>
              <div className='linkedin-post-content'>
                <div className='linkedin-post-user'>
                  <div className='post-card'>
                    <div className='post-card-left'>
                      <img src='./images/user-4.png' alt='profile' />
                    </div>
                    <div className='post-card-right'>
                      <div className='post-card-section'>
                        Benjamin Leo
                      </div>
                      <div className='post-card-topics'>
                        Founder and CEO at Gellelio Group | Angel Investor
                      </div>
                      <div >
                        2 hours ago</div>
                    </div>
                  </div>
                </div>
                <div className='inkedin-post-text'>

                  The success of every websites depends on search engine optimisation and digital marketing strategy<br /> If you are on first page of all major search engines then you are ahead among your competitors.
                </div>
                <div className='linkedin-post-text'>
                  <img src='./images/post-image-2.png' alt='profile' />
                </div>

                <div className='linkedin-post-footer'>
                  <div className='post-footer-wrapper'>
                    <div className='footer-divider-left'>
                      <div className='footer-like'>
                        <img src='./images/like.png' alt='profile' />
                      </div>
                      <div className='footer-love'>
                        <img src='./images/love.png' alt='profile' />
                      </div>
                      <div className='footer-clap'>
                        <img src='./images/clap.png' alt='profile' />
                      </div>
                    </div>
                    <div className='footer-divider-right'>
                      Abhinav Mishra and 75 others
                    </div>
                  </div>
                  <div className='post-footer-actions'>
                    <div>22 comments : 40   shares</div>

                  </div>

                </div>
                <div className='post-extra-container'>
                  <div className='post-extra-left'>
                    <div className='post-extra-picture'>
                      <img src='./images/user-4.png' alt='profile' />

                    </div>
                    <div className='post-extra-down-arrow'>
                      <img src='./images/down-arrow.png' alt='profile' />

                    </div>
                  </div>
                  <div className='post-extra-right'>
                    <div className='post-extra-views'>
                      <div className='post-extra-views-top'>
                        <div className='post-top-views'>
                          <img src='./images/like.png' alt='profile' />
                        </div>
                        <div className='post-extra-like'>
                          Like
                        </div>
                      </div>
                      <div className='post-extra-views-value'>
                        <div className='post-option'>
                          <img src='./images/Comment.png' alt='profile' />

                        </div>
                        <div className='post-extra-comment'>
                          Comment
                        </div>
                      </div>
                      <div className='post-extra-views-topic'>
                        <div className=' post-extra-views-topic-left'>
                          <img src='./images/Share.png' alt='profile' />

                        </div>
                        <div className='post-extra-share'>
                          Share
                        </div>
                      </div>
                      <div className='post-extra-views-level'>
                        <div className='post-extra-views-level-left'>
                          <img src='./images/Send.png' alt='profile' />
                        </div>
                        <div className='post-extra-send'>
                          Send
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='linkedin-post-feed'>
              <div className='linkedin-post-content'>
                <div className='linkedin-post-user'>
                  <div className='post-card'>
                    <div className='post-card-left'>
                      <img src='./images/user-5.png' alt='profile' />
                    </div>
                    <div className='post-card-right'>
                      <div className='post-card-section'>
                        Benjamin Leo
                      </div>
                      <div className='post-card-topics'>
                        Founder and CEO at Gellelio Group | Angel Investor
                      </div>
                      <div >
                        2 hours ago</div>
                    </div>
                  </div>
                </div>
                <div className='inkedin-post-text'>

                  The success of every websites depends on search engine optimisation and digital marketing strategy<br /> If you are on first page of all major search engines then you are ahead among your competitors.
                </div>
                <div className='linkedin-post-text'>
                  <img src='./images/post-image-3.png' alt='profile' />
                </div>

                <div className='linkedin-post-footer'>
                  <div className='post-footer-wrapper'>
                    <div className='footer-divider-left'>
                      <div className='footer-like'>
                        <img src='./images/like.png' alt='profile' />
                      </div>
                      <div className='footer-love'>
                        <img src='./images/love.png' alt='profile' />
                      </div>
                      <div className='footer-clap'>
                        <img src='./images/clap.png' alt='profile' />
                      </div>
                    </div>
                    <div className='footer-divider-right'>
                      Abhinav Mishra and 75 others
                    </div>
                  </div>
                  <div className='post-footer-actions'>
                    <div>22 comments : 40   shares</div>

                  </div>

                </div>
                <div className='post-extra-container'>
                  <div className='post-extra-left'>
                    <div className='post-extra-picture'>
                      <img src='./images/user-5.png' alt='profile' />

                    </div>
                    <div className='post-extra-down-arrow'>
                      <img src='./images/down-arrow.png' alt='profile' />

                    </div>
                  </div>
                  <div className='post-extra-right'>
                    <div className='post-extra-views'>
                      <div className='post-extra-views-top'>
                        <div className='post-top-views'>
                          <img src='./images/like.png' alt='profile' />
                        </div>
                        <div className='post-extra-like'>
                          Like
                        </div>
                      </div>
                      <div className='post-extra-views-value'>
                        <div className='post-option'>
                          <img src='./images/Comment.png' alt='profile' />

                        </div>
                        <div className='post-extra-comment'>
                          Comment
                        </div>
                      </div>
                      <div className='post-extra-views-topic'>
                        <div className=' post-extra-views-topic-left'>
                          <img src='./images/Share.png' alt='profile' />

                        </div>
                        <div className='post-extra-share'>
                          Share
                        </div>
                      </div>
                      <div className='post-extra-views-level'>
                        <div className='post-extra-views-level-left'>
                          <img src='./images/Send.png' alt='profile' />
                        </div>
                        <div className='post-extra-send'>
                          Send
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='linkedin-post-feed'>
              <div className='linkedin-post-content'>
                <div className='linkedin-post-user'>
                  <div className='post-card'>
                    <div className='post-card-left'>
                      <img src='./images/user-4.png' alt='profile' />
                    </div>
                    <div className='post-card-right'>
                      <div className='post-card-section'>
                        Benjamin Leo
                      </div>
                      <div className='post-card-topics'>
                        Founder and CEO at Gellelio Group | Angel Investor
                      </div>
                      <div >
                        2 hours ago</div>
                    </div>
                  </div>
                </div>
                <div className='inkedin-post-text'>

                  The success of every websites depends on search engine optimisation and digital marketing strategy<br /> If you are on first page of all major search engines then you are ahead among your competitors.
                </div>
                <div className='linkedin-post-text'>
                  <img src='./images/post-image-4.png' alt='profile' />
                </div>

                <div className='linkedin-post-footer'>
                  <div className='post-footer-wrapper'>
                    <div className='footer-divider-left'>
                      <div className='footer-like'>
                        <img src='./images/like.png' alt='profile' />
                      </div>
                      <div className='footer-love'>
                        <img src='./images/love.png' alt='profile' />
                      </div>
                      <div className='footer-clap'>
                        <img src='./images/clap.png' alt='profile' />
                      </div>
                    </div>
                    <div className='footer-divider-right'>
                      Abhinav Mishra and 75 others
                    </div>
                  </div>
                  <div className='post-footer-actions'>
                    <div>22 comments : 40   shares</div>

                  </div>

                </div>
                <div className='post-extra-container'>
                  <div className='post-extra-left'>
                    <div className='post-extra-picture'>
                      <img src='./images/user-4.png' alt='profile' />

                    </div>
                    <div className='post-extra-down-arrow'>
                      <img src='./images/down-arrow.png' alt='profile' />

                    </div>
                  </div>
                  <div className='post-extra-right'>
                    <div className='post-extra-views'>
                      <div className='post-extra-views-top'>
                        <div className='post-top-views'>
                          <img src='./images/like.png' alt='profile' />
                        </div>
                        <div className='post-extra-like'>
                          Like
                        </div>
                      </div>
                      <div className='post-extra-views-value'>
                        <div className='post-option'>
                          <img src='./images/Comment.png' alt='profile' />

                        </div>
                        <div className='post-extra-comment'>
                          Comment
                        </div>
                      </div>
                      <div className='post-extra-views-topic'>
                        <div className=' post-extra-views-topic-left'>
                          <img src='./images/Share.png' alt='profile' />

                        </div>
                        <div className='post-extra-share'>
                          Share
                        </div>
                      </div>
                      <div className='post-extra-views-level'>
                        <div className='post-extra-views-level-left'>
                          <img src='./images/Send.png' alt='profile' />
                        </div>
                        <div className='post-extra-send'>
                          Send
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='linkedin-sidebar'>
            <div className='sidebar-container'>
              <div className="sidebar-profile-title" style={{ display: 'flex', gap: '10px', flexDirection: 'column', paddingLeft: '20px', paddingRight: '20px' }}>
                <div className='Profile-section' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'Center' }}>
                  <div className='sidebar-section-top'>
                    Trending News
                  </div>
                  <div className='sidebar-Content'>
                    <img src='./images/more.png' alt='picture' />
                  </div>
                </div>
                <div className='Profile-headline'>
                  <div className='profile-value-headline'>
                    <div className='porfile-post-text' style={{ display: 'flex', flexDirection: 'column' }}>
                      <div className='porfile-tile-option' style={{ fontWeight: '500', fontSize: '15px' }}>
                        High demand for skilled manpower
                      </div>
                      <div className='porfile-tile-value'>
                        1d ago 10,834 readers
                      </div>
                    </div>
                    <div className='porfile-post-text' style={{ display: 'flex', flexDirection: 'column' }}>
                      <div className='porfile-tile-option' style={{ fontWeight: '500', fontSize: '15px' }}>
                        Careers growing horizontally too
                      </div>
                      <div className='porfile-tile-value'>
                        19h ago 1,552 readers
                      </div>
                    </div>
                    <div className='porfile-post-text' style={{ display: 'flex', flexDirection: 'column' }}>
                      <div className='porfile-tile-option' style={{ fontWeight: '500', fontSize: '15px' }}>
                        Less work visa for US, more for UK
                      </div>
                      <div className='porfile-tile-value'>
                        1d ago 27,280 readers
                      </div>
                    </div>
                    <div className='porfile-post-text' style={{ display: 'flex', flexDirection: 'column' }}>
                      <div className='porfile-tile-option' style={{ fontWeight: '500', fontSize: '15px' }}>
                        More hiring = higher confidence?
                      </div>
                      <div className='porfile-tile-value'>
                        18h ago 8,208 readers
                      </div>
                    </div>
                    <div className='porfile-post-text' style={{ display: 'flex', flexDirection: 'column' }}>
                      <div className='porfile-tile-option' style={{ fontWeight: '500', fontSize: '15px' }}>
                        Gautam Adani is the world's third richest
                      </div>
                      <div className='porfile-tile-value'>
                        12h ago 4,205 readers
                      </div>
                    </div>
                  </div>
                </div>
                <div className='sidebar-footer'>
                  Read More
                </div>
              </div>
            </div>
            <div className='sidebar-profile'>
              <div className='sidebar-profile-first'>
                <div className='sidebar-profile-first-first'>
                  Ad...
                </div>
                <div className='sidebar-profile-first-second'>
                  Master the 5 principles of web design

                </div>
                <div className='sidebar-profile-first-third'>
                  <div className='sidebar-profile-first-third-first'>
                    <img src='./images/user-1.png' alt='picture' />

                  </div>
                  <div className='sidebar-profile-first-third-second'>
                    <img src='./images/mi-logo.png' alt='picture' />

                  </div>
                </div>
                <div className='sidebar-profile-first-fourth'>
                  <div>Brand and Demand in Xiaomi</div>
                  <div className='sidebar-profile-first-fourth-first'>
                    Learn More
                  </div>
                </div>
              </div>

            </div>
            <div className='linkedin-profile-end'>
              <div>About Accessibility Help Center</div>
              <div>Privacy Policy Advertising set the app</div>
            </div>
          </div>
        </div>
      </div>

      );
}

      export default Linkdink;