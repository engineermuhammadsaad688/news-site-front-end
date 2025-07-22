// import { useEffect, useState } from "react";
// import { getAll } from '../../services/api';
// import Postcard from './postCard';
// import PostRightSection from './PostRightSection';
// import './homeMain.css';
// import { formatDataTime } from '../../utils';

// function HomeMain() {
//     const [articles, setArticles] = useState([]);
//     const [search, setSearch] = useState('');
//     const [searchQurey, setsearchQurey] = useState('');
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPages, setTotalPages] = useEffect(1);
//     const itemsPerpage = 10
//     const [categories, setCategories] = useState([]);
//     const [selectedcategory, setSelectedCategory] = useState('');
//     const [users, setUsers] = useState([]);
//     const [selectedusers, setSelectedusers] = useState('');
//     const [sortOrder, setOrder] = useState('newest');

//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const data = await getAll('/users');
//                 setUsers(data);
//             } catch (error) {
//                 console.error('Error fetching users:', error);
//             }
//         };

//         fetchUsers()
//     }, []);

//     useEffect(() => {
//         const fetchCategories = async () => {
//             try {
//                 const data = await getAll('/categories');
//                 setCategories(data);
//             } catch (error) {
//                 console.error('Error fetching categories')
//             }
//         };
//         fetchCategories()
//     }, []);




//     useEffect(() => {
//         const fetchArticles = async () => {
//             try {
//                 const prams = {
//                     page: currentPage,
//                     limit: itemsPerpage,
//                     search: searchQurey,
//                     category: selectedcategory,
//                     user: selectedusers,

//                 };

//                 switch (sortOrder) {
//                     case 'newest'
//                     prams.sortBy = 'createdAt';
//                         prams.order = 'desc';
//                         break;
//                     case 'oldest'
//                     prams.sortBy = 'createdAt';
//                         prams.order = 'asc';
//                         break;

//                 }
//                 const data = await getAll('/articles', prams)
//                 setArticles(data.Articles);
//                 setTotalPages(data.totalPages)
//             } catch (error) {
//                 console.log('Error fetching  articles:', prams);

//             }

//         };
//         fetchArticles();
//     }, [searchQurey, selectedcategory, selectedusers, sortBy, currentPage]);

//     const handleSearch = () => {
//         setsearchQurey(search)
//     };
//     return (
//         <></>
//     );
// }
// export default HomeMain;
