import './linkdink.css';

function Linkdink15({ profileImage, name, title, timeAgo, postText, postImage, likesCount, commentsCount, sharesCount }) {
  return (
    <div className='main-container-top'>
      <div className='linkedin-post-feed'>
        <div className='linkedin-post-content'>
          
          {/* Post User Info */}
          <div className='linkedin-post-user'>
            <div className='post-card'>
              <div className='post-card-left'>
                <img src={profileImage} alt='profile' />
              </div>
              <div className='post-card-right'>
                <div className='post-card-section'>{name}</div>
                <div className='post-card-topics'>{title}</div>
                <div>{timeAgo}</div>
              </div>
            </div>
          </div>

          {/* Post Text */}
          <div className='inkedin-post-text'>
            {postText}
          </div>

          {/* Post Image */}
          {postImage && (
            <div className='linkedin-post-text'>
              <img src={postImage} alt='post' />
            </div>
          )}

          {/* Post Footer */}
          <div className='linkedin-post-footer'>
            <div className='post-footer-wrapper'>
              <div className='footer-divider-left'>
                <div className='footer-like'><img src='./images/like.png' alt='like' /></div>
                <div className='footer-love'><img src='./images/love.png' alt='love' /></div>
                <div className='footer-clap'><img src='./images/clap.png' alt='clap' /></div>
              </div>
              <div className='footer-divider-right'>
                {likesCount} likes
              </div>
            </div>
            <div className='post-footer-actions'>
              <div>{commentsCount} comments : {sharesCount} shares</div>
            </div>
          </div>

          {/* Post Actions */}
          <div className='post-extra-container'>
            <div className='post-extra-left'>
              <div className='post-extra-picture'>
                <img src={profileImage} alt='profile' />
              </div>
              <div className='post-extra-down-arrow'>
                <img src='./images/down-arrow.png' alt='down arrow' />
              </div>
            </div>
            <div className='post-extra-right'>
              <div className='post-extra-views'>
                <div className='post-extra-views-top'>
                  <div className='post-top-views'>
                    <img src='./images/like.png' alt='like' />
                  </div>
                  <div className='post-extra-like'>Like</div>
                </div>
                <div className='post-extra-views-value'>
                  <div className='post-option'>
                    <img src='./images/Comment.png' alt='comment' />
                  </div>
                  <div className='post-extra-comment'>Comment</div>
                </div>
                <div className='post-extra-views-topic'>
                  <div className='post-extra-views-topic-left'>
                    <img src='./images/Share.png' alt='share' />
                  </div>
                  <div className='post-extra-share'>Share</div>
                </div>
                <div className='post-extra-views-level'>
                  <div className='post-extra-views-level-left'>
                    <img src='./images/Send.png' alt='send' />
                  </div>
                  <div className='post-extra-send'>Send</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Linkdink15;
