import { useEffect, useState } from 'react';
import { getAll } from '../../services/api';
import PostCard from './postCard';
import PostRightSection from './postRightSection';
import './homeMain.css';


function HomeMain() {

const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Example: /users is the endpoint
    getAll('/articles')
      .then((data) => {
        console.log(data)
        setArticles(data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);


    

    return (
        <div className='post-container'>
            <div className='post-left-section'>
                <div className='post-author-name'>
                    Author Name
                </div>


                    {articles.map((article) => (
                    <PostCard
                        imageSrc={`http://localhost:5000/uploads/${article.image}`}
                        title={article.title}
                        category={article.categoryId.name}
                        author={article.userId.name}
                        date={article.createdAt}
                        description={article.description}
                    />
                ))}
            </div>

            <div className='post-right-section'>
            <PostRightSection/>
            
            </div>

        </div>
    );
}

export default HomeMain;
