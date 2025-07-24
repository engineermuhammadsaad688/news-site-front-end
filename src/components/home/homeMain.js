import { useEffect, useState } from 'react';
import { getAll } from '../../services/api';
import PostCard from './postCard';
import PostRightSection from './postRightSection';
import './homeMain.css';
import { formatDateTime } from '../../utils';

function HomeMain() {
  // const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10// You can change this to 10 or any number
  // const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  // const [users, setUsers] = useState([]);
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
            date={formatDateTime(article.createdAt)}
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

//chatgpt se banwanay k liye prompt
// Mujhe ek useEffect hook banao k do jo articles fetch kare jab searchQuery, selectedCategory, selectedUser, sortOrder, ya currentPage change ho.
// API call /articles endpoint par honi chahiye jismein page, limit, search, category, user, sortBy, aur order parameters bhejein.
// sortOrder mein 'newest', 'oldest', 'title_asc', ya 'title_desc' values ho sakti hain, aur ye sortBy aur order mein map honi chahiye.
// API response se setArticles aur setTotalPages update karo. Agar error aaye to console.log mein dikhana.




// useEffect ek function hai jo component k render ya load honay per chalta hai. 
// agar us ki dependency array empty ho to sirf useEffect ek bar chalay ga. 
// or agar us ki dependency array main koi value ya state di gai ho to jab us value ya state main koi change aye ga to useEffect chalay ga. 
// ja useEffect chalay ga to us k undar likha howa code b chalay ga.

// useEffect ki example:

// useEffect(() => {
//   const fetchCategories = async () => {
//     try {
//       const data = await getAll('/categories'); // Adjust if your endpoint is different
//       setCategories(data);
//     } catch (error) {
//       console.error('Error fetching categories:', error);
//     }
//   };

//   fetchCategories();
// }, []);

//  ye useEffect sirf ek bar chalay ga. jab component screen per show ho ga sirf tab. q k is ki dependency array empty hai.
//  is useEffect main hum nay ek function banaya hai or usay fetchCategories ko assign ker dia hai. 
//  function main try and catch block hain. try block main hum nay ek variable data banaya hai. 
//  hum getAll('/categories') function call ker rahay hain or us ko /categories ka endpoint pass ker rahay hain. 
//  getAll function backend se sari categories fetch ker k laye ga. ye sari categories data variable main store ho jayain gi. 
//  phir hum us data ko setCategories k zariye categories state main store kerwa rahay hain. 
//  agar koi error aya to hum catch block main chalay jayain gay. akhir main hum fetchCategories() function ko call ker rahay hain. 
//  phir hum categories ko select drop down main map kerwa rahay hain.







// useEffect(() => {
//   const fetchArticles = async () => {
//     try {
//       const params = {
//         page: currentPage,
//         limit: itemsPerPage,
//         search: searchQuery,
//         category: selectedCategory,
//         user: selectedUser,
//       };

//       switch (sortOrder) {
//         case 'newest':
//           params.sortBy = 'createdAt';
//           params.order = 'desc';
//           break;
//         case 'oldest':
//           params.sortBy = 'createdAt';
//           params.order = 'asc';
//           break;
//         case 'title_asc':
//           params.sortBy = 'title';
//           params.order = 'asc';
//           break;
//         case 'title_desc':
//           params.sortBy = 'title';
//           params.order = 'desc';
//           break;
//         default:
//           break;
//       }

//       const data = await getAll('/articles', params);
//       setArticles(data.articles);
//       setTotalPages(data.totalPages);
//     } catch (error) {
//       console.log('Error fetching articles:', error);
//     }
//   };

//   fetchArticles();
// }, [searchQuery, selectedCategory, selectedUser, sortOrder, currentPage]);

// ye useEffect 5 states per depend ker raha hai jo k is ki dependency array main di gai hain:

// [searchQuery, selectedCategory, selectedUser, sortOrder, currentPage]

// ye useEffect first time jab component screen per show ho to tab chalay ga. us k baad ye following events per chalay ga:

// searchQuery: agar hum search keryain gay to searchQuery ki state change ho gi. jis ki waja se useEffect chalay ga aur searchQuery se related articles backend se fetch hon gay.

// selectedCategory: agar hum category select keryain gay to selectedCategory ki state change ho gi. jis ki waja se useEffect chalay ga aur selectedCategory se related articles backend se fetch hon gay.

// selectedUser: agar hum user select keryain gay to selectedUser ki state change ho gi. jis ki waja se useEffect chalay ga aur selectedUser se related articles backend se fetch hon gay.

// sortOrder: agar hum sort order change keryain gay to sortOrder ki state change ho gi. jis ki waja se useEffect chalay ga aur sortOrder ki basis per sorted articles backend se fetch hon gay.

// currentPage: agar hum page change keryain gay to currentPage ki state change ho gi. jis ki waja se useEffect chalay ga aur new page se related articles backend se fetch hon gay.

// hum ek params ka object bana rahay hain. is object main page, limit, search, category, user ko directly assign ker rahay hain. aur sortOrder ki state ki base par hum sortBy aur order values set ker rahay hain using switch statement.

// phir hum ek function getAll call ker rahay hain jismein hum endpoint /articles aur params send ker rahay hain. ye function backend se articles fetch ker k laye ga aur us response ko data variable main store ker diya jaye ga.

// us k baad hum data.articles ko setArticles se articles state main set ker rahay hain. aur data.totalPages ko setTotalPages se set ker rahay hain ta k pagination ka total page count mil jaye.

// ye complete useEffect ka flow hai jo multiple filters, sorting aur pagination k sath kaam karta hai.
