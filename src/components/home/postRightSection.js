import './postRightSection.css';
import RecentPostCard from './recentPostCard';

function PostRightSection() {

    const recentPosts = [
        {
            imageSrc: "/images/post-format.jpg",
            description: "Learn the basics of React in this introductory post.",
            category: "ReactJS",
            date: "July 6, 2025"
        },
        {
            imageSrc: "/images/thumbnail1.png",
            description: "Understanding components and props in React.",
            category: "Frontend",
            date: "July 5, 2025"
        },
        {
            imageSrc: "/images/thumbnail2.png",
            description: "A guide to React hooks and their use cases.",
            category: "Web Dev",
            date: "July 4, 2025"
        },
        {
            imageSrc: "/images/thumbnail3.png",
            description: "Optimizing performance in large React apps.",
            category: "Performance",
            date: "July 3, 2025"
        },
        {
            imageSrc: "/images/thumbnail4.png",
            description: "React vs Vue: Which one should you pick?",
            category: "Comparison",
            date: "July 2, 2025"
        },
        {
            imageSrc: "/images/thumbnail5.png",
            description: "Integrating APIs in React using Axios.",
            category: "API",
            date: "July 1, 2025"
        },
        {
            imageSrc: "/images/thumbnail6.png",
            description: "Building reusable components in React.",
            category: "Best Practices",
            date: "June 30, 2025"
        },
        {
            imageSrc: "/images/thumbnail7.png",
            description: "Deploying React apps on Vercel and Netlify.",
            category: "Deployment",
            date: "June 29, 2025"
        }
    ];

    return (
        <div>
            <div className='post-right-section-search-container'>
                <div className='post-right-section-heading'>
                    SEARCH
                </div>

                <div className='post-right-section-search-box'>
                    <div className='search-input-container'>
                        <input type="text" className="search-input" placeholder="Search here..." />
                    </div>

                    <div className='search-button'>
                        Search
                    </div>
                </div>
            </div>

            {recentPosts.map((post, index) => (
                <RecentPostCard 
                    key={index}
                    imageSrc={post.imageSrc}
                    description={post.description}
                    category={post.category}
                    date={post.date}
                />
            ))}
        </div>
    );
}

export default PostRightSection;
