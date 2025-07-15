import { useEffect, useState } from 'react';
import { getAll } from '../../services/api';
import PostCard from './postCard';
import PostRightSection from './postRightSection';
import './homeMain.css';

function HomeMain() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const endpoint = searchQuery
          ? `/articles?search=${searchQuery}`
          : `/articles`;

        const data = await getAll(endpoint);
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, [searchQuery]);

  const handleSearch = () => {
    setSearchQuery(search); // trigger API call
  };

  return (
    <div className='post-container'>
      <div className='post-left-section'>
        <div className='post-author-name'>Author Name</div>

        {articles.map((article) => (
          <PostCard
            key={article._id}
            imageSrc={`http://localhost:5000/api/uploads/${article.image}`}
            title={article.title}
            category={article.categoryId.name}
            author={article.userId.name}
            date={article.createdAt}
            description={article.description}
            articleId={article._id}
          />
        ))}
      </div>

      <div className='post-right-section'>
        <PostRightSection
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
      </div>
    </div>
  );
}

export default HomeMain;
