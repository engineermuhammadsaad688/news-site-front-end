import './linkdink.css'

import { FaAngleRight } from 'react-icons/fa';
import Linkdink11 from './Linkdink11';


<FaAngleRight />
function Linkdink12() {

 

  return (
    <div className='main-container-top'>

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

      </div>

      );
}

      export default Linkdink12;