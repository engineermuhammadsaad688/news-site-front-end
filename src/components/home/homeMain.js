// import { use, useEffect, useState } from "react";
// import { getAll } from "../../services/api";
// import { PostCard } from "PostCard";
// import { PostRightSection } from "PostRightSection";
// import './homeMain.css'
// import { PostRightSection } from "../../services/utils";
// import { useParams } from "react-router-dom";



// function HomeMain() {
//     const [articles, setArticles] = useState([]);
//     const [search, setSearch] = useState('');
//     const [searchQuery, setSearchQuery] = useState('');
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(1);
//     const itemsPerPage = 10// You can change this to 10 or any number
//     const [categories, setCategories] = useState([]);
//     const [selectedCategory, setSelectedCategory] = useState('');
//     const [users, setUsers] = useState([]);
//     const [selectedUser, setSelectedUser] = useState('');
//     const [sortOrder, setSortOrder] = useState('newest');




//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const data = await getAll('/users');
//                 setUsers(data);
//             } catch (error) {
//                 console.error('Error fecthing user:', error)
//             }
//         };
//         fetchUsers();

//     }, [])


//     useEffect(() => {
//         const fetchCategories = async () => {
//             try {
//                 const data = await getAll('/Categories')
//                 setcategories(data)
//             } catch (error) {
//                 console.error('Error fecthing user:', error)
//             }
//         };



//         fetchCategories();
//     }, [])

//     useEffect(() => {
//         const fetchCategories = async () => {
//             try {
//                 const params = {
//                     page: currentPage,
//                     limit: itemsPerPage,
//                     search: searchQuery,
//                     category: selectedCategory,
//                     user: selectedUser,
//                 };

//                 switch (sortOrder) {
//                     case 'newest':
//                         params.sortBy = 'createdAt';
//                         params.order = 'desc';
//                         break;
//                     case 'oldest':
//                         params.sortBy = 'createdAt';
//                         params.order = 'asc';
//                         break;
//                     case 'title_asc':
//                         params.sortBy = 'title';
//                         params.order = 'asc';
//                         break;
//                     case 'title_desc':
//                         params.sortBy = 'title';
//                         params.order = 'desc';
//                         break;
//                     default:
//                         break;
//                 }
//                 const data = await  getAll ('/articles',params);
//                 setArticles(data.articles)
//                 setTotalPages(data.TotalPages)



//             }
//         };


//     }
//     )







//     return (
//         <>
//         </>

//     );
// }


// export default HomeMain;



