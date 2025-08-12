import './linkdink.css'
import { Link } from 'react-router-dom';

import React, { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import Linkdink9 from './linkdink9';


<FaAngleRight />
function Linkdink11() {

 

  return (
    <div className='main-container-top'>

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
          
     </div>

      );
}

      export default Linkdink11;