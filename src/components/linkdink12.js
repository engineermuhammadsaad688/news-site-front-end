import './linkdink.css'

import { FaAngleRight } from 'react-icons/fa';
import Linkdink15 from './linkdink15';


<FaAngleRight />
function Linkdink12() {

  // data.js (ya component file ke top mein)
  const posts = [
    {
      id: 1,
      profileImage: "./images/user-1.png",
      name: "Benjamin Leo",
      title: "Founder and CEO at Gellelio Group | Angel Investor",
      timeAgo: "2 hours ago",
      postText: "The success of every website depends on search engine optimisation and digital marketing strategy...",
      postImage: "./images/post-image-1.png",
      likesCount: "Abhinav Mishra and 75 others",
      commentsCount: 22,
      sharesCount: 40
    },
    {
      id: 2,
      profileImage: "./images/user-3.png",
      name: "Benjamin Leo",
      title: "Founder and CEO at Gellelio Group | Angel Investor",
      timeAgo: "2 hours ago",
      postText: "The success of every website depends on search engine optimisation and digital marketing strategy...",
      postImage: "./images/post-image-4.png",
      likesCount: "Abhinav Mishra and 75 others",
      commentsCount: 22,
      sharesCount: 40
    },
        {
      id: 3,
      profileImage: "./images/user-4.png",
      name: "Benjamin Leo",
      title: "Founder and CEO at Gellelio Group | Angel Investor",
      timeAgo: "2 hours ago",
      postText: "The success of every website depends on search engine optimisation and digital marketing strategy...",
      postImage: "./images/post-image-3.png",
      likesCount: "Abhinav Mishra and 75 others",
      commentsCount: 22,
      sharesCount: 40
    },
            {
      id: 4,
      profileImage: "./images/user-5.png",
      name: "Benjamin Leo",
      title: "Founder and CEO at Gellelio Group | Angel Investor",
      timeAgo: "2 hours ago",
      postText: "The success of every website depends on search engine optimisation and digital marketing strategy...",
      postImage: "./images/post-image-2.png",
      likesCount: "Abhinav Mishra and 75 others",
      commentsCount: 22,
      sharesCount: 40
    },
    // aur objects add kar sakte ho...
  ]

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

        <div>
          {/* <Linkdink15
            profileImage="./images/user-1.png"
            name="Benjamin Leo"
            title="Founder and CEO at Gellelio Group | Angel Investor"
            timeAgo="2 hours ago"
            postText="The success of every website depends on search engine optimisation and digital marketing strategy..."
            postImage="./images/post-image-1.png"
            likesCount="Abhinav Mishra and 75 others"
            commentsCount={22}
            sharesCount={40}
          />
                    <Linkdink15
            profileImage="./images/user-1.png"
            name="Benjamin Leo"
            title="Founder and CEO at Gellelio Group | Angel Investor"
            timeAgo="2 hours ago"
            postText="The success of every website depends on search engine optimisation and digital marketing strategy..."
            postImage="./images/post-image-1.png"
            likesCount="Abhinav Mishra and 75 others"
            commentsCount={22}
            sharesCount={40}
          />
                    <Linkdink15
            profileImage="./images/user-1.png"
            name="Benjamin Leo"
            title="Founder and CEO at Gellelio Group | Angel Investor"
            timeAgo="2 hours ago"
            postText="The success of every website depends on search engine optimisation and digital marketing strategy..."
            postImage="./images/post-image-1.png"
            likesCount="Abhinav Mishra and 75 others"
            commentsCount={22}
            sharesCount={40}
          />
                    <Linkdink15
            profileImage="./images/user-1.png"
            name="Benjamin Leo"
            title="Founder and CEO at Gellelio Group | Angel Investor"
            timeAgo="2 hours ago"
            postText="The success of every website depends on search engine optimisation and digital marketing strategy..."
            postImage="./images/post-image-1.png"
            likesCount="Abhinav Mishra and 75 others"
            commentsCount={22}
            sharesCount={40}
          /> */}
          <div>
            {posts.map(post => (
              <Linkdink15 key={post.id}
                profileImage={post.profileImage}
                name={post.name}
                title={post.title}
                timeAgo={post.timeAgo}
                postText={post.postText}
                postImage={post.postImage}
                likesCount={post.likesCount}
                commentsCount={post.commentsCount}
                sharesCount={post.sharesCount}
              />
            ))}
          </div>

        </div>



      </div>

    </div>

  );
}

export default Linkdink12;