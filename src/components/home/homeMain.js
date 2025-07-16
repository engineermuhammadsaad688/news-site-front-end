import { useEffect, useState } from 'react';
import { getAll } from '../../services/api';
import PostCard from './postCard';
import PostRightSection from './postRightSection';
import './homeMain.css';

function HomeMain() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 2; // You can change this to 10 or any number
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAll('/users'); // Adjust endpoint if needed
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAll('/categories'); // Adjust if your endpoint is different
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const params = {
          page: currentPage,
          limit: itemsPerPage,
          search: searchQuery,
          category: selectedCategory,
          user: selectedUser,
        };

        // Map sortOrder to sortBy and order
        switch (sortOrder) {
          case 'newest':
            params.sortBy = 'createdAt';
            params.order = 'desc';
            break;
          case 'oldest':
            params.sortBy = 'createdAt';
            params.order = 'asc';
            break;
          case 'title_asc':
            params.sortBy = 'title';
            params.order = 'asc';
            break;
          case 'title_desc':
            params.sortBy = 'title';
            params.order = 'desc';
            break;
          default:
            break;
        }

        const data = await getAll('/articles', params);
        setArticles(data.articles);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.log('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, [searchQuery, selectedCategory, selectedUser, sortOrder, currentPage]);

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
        <div className='pagination'>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <span>Page {currentPage} of {totalPages}</span>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>

      </div>

      <div className='post-right-section'>
        <div className='filters-container'>

        <select
          className="custom-select"

          value={selectedUser}
          onChange={(e) => {
            setCurrentPage(1);
            setSelectedUser(e.target.value);
          }}
        >
          <option value=''>All Users</option>
          {users.map((user) => (
            <option key={user._id} value={user._id}>
              {user.name}
            </option>
          ))}
        </select>
        <select
          className="custom-select"

          value={selectedCategory}
          onChange={(e) => {
            setCurrentPage(1);
            setSelectedCategory(e.target.value);
          }}
        >
          <option value=''>All Categories</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
        <select
          className="custom-select"

          value={sortOrder}
          onChange={(e) => {
            setCurrentPage(1);
            setSortOrder(e.target.value);
          }}
        >
          <option value='newest'>Newest First</option>
          <option value='oldest'>Oldest First</option>
          <option value='title_asc'>Title A-Z</option>
          <option value='title_desc'>Title Z-A</option>
        </select>
        </div>


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
