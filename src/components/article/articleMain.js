import { useEffect, useState } from 'react';
import './articleMain.css';
import { FaEdit, FaTrash } from 'react-icons/fa';

import { deleteData, getAll, postData, updateData } from '../../services/api';
import AddArticleModal from './addArticleModal';
import EditArticleModal from './editArticleModal';

const ArticleMain = () => {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    fetchArticles();
    fetchCategories();
  }, []);

  const fetchArticles = async () => {
    try {
      const data = await getAll('/articles');
      setArticles(data.articles);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const data = await getAll('/categories');
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };


  //jab hum delete k icon per click keryian gay to ye funciton call
  //ho ga.ye us record ki id receive kerye ga jis ko hum delete kerna 
  //cahatay hain.akir main hum fetchArticles ko call keryian gay ta
  // k table refresh ho jaye.
  const handleDelete = async (id) => {
    try {
      await deleteData('/articles', id);
      fetchArticles();
    } catch (error) {
      console.error('Error deleting article:', error);
    }
  };


  //ye function isAddModalOpen ki state ko true ker day ga
  //jis ki wajah se hamara addModal open ho jaye ga.
  const handleClickAddButton = () => {
    setIsAddModalOpen(true);
  };


    //ye function isEditModalOpen ki state ko true ker day ga
  //jis ki wajah se hamara editModal open ho jaye ga.
  //edit modal open ho ga to humyain usay wo record dayna peray ga
  //jis ko edit ker rahay hain.

  const handleClickEditButton = (article) => {
    setEditData(article);
    setIsEditModalOpen(true);
  };


  //Jab hum add ka form fill ker k submit keryian gayain
  //to ye function call ho ga.ye formData ko receive kere ga
  //or usay backend per save honay k liye post ker day ga.
  //us k baad hum fetchArticles ko call keryain gay ta k 
  //latest records table main a jayain.
  //akhir main hum addModal ki state ko false ker 
  //dayain gay ta k modal close ho jaye
  const handleAddSubmit = async (formData) => {
    try {
      await postData('/articles', formData, {file:true}); // 'true' for file upload
      fetchArticles();
      setIsAddModalOpen(false);
    } catch (error) {
      console.error('Error adding article:', error);
    }
  };


    //Jab hum edit ka form fill ker k submit keryian gayain
  //to ye function call ho ga.ye formData ko receive kere ga
  //or usay backend per update honay k liye send ker day ga.
  //us k baad hum fetchArticles ko call keryain gay ta k 
  //latest records table main a jayain.
  //akhir main hum editmodal ki state ko false ker 
  //dayain gay ta k modal close ho jaye
  const handleEditSubmit = async (formData) => {
    try {
      await updateData('/articles', editData._id, formData, {file:true});
      fetchArticles();
      setIsEditModalOpen(false);
    } catch (error) {
      console.error('Error updating article:', error);
    }
  };

  return (
    <div className="table-container">
      <div className="add-category-button-container">
        <h2>All Articles</h2>
        {/* yah per hum nay onClick event lagaya howa hai.jab is div per click keryain gay to handleClickAddButton function call ho ga. */}
        <div className="add-category-button" onClick={handleClickAddButton}>
          Add Article
        </div>
      </div>

      <table className="custom-table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {articles?.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.categoryId?.name}</td>
              <td>
                <img src={`http://localhost:5000/api/uploads/${item.image}`} alt="article" width="50" height="50" />
              </td>
              <td>
                <FaEdit onClick={() => handleClickEditButton(item)} className="icon" />
              </td>
              <td>
                <FaTrash onClick={() => handleDelete(item._id)} className="icon delete-icon" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
{
isAddModalOpen &&
      <AddArticleModal
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddSubmit}
        categories={categories}
      />
}

     { isEditModalOpen && 
      <EditArticleModal
        onClose={() => setIsEditModalOpen(false)}
        onSubmit={handleEditSubmit}
        initialData={editData}
        categories={categories}
      />
      }
    </div>
  );
};

export default ArticleMain;


// hum yahan crud operations ker rahay hain.
// c=create (naya record banao)
// r=read Kero (yani jitnay records ban chukay hain unay show kerwao)
// u=kisi record ko update kero( yani us ka name,description,image kisi cheez ko change kero)
// d=kisi record ko delete kero

// jab hamara componet show ho ga (render ya load ho ga) to app nay useEffect main api calls kerni hain.
// yahan hum categories ko fetch  ker k la rahay hain ta k drop down main show kewa sakyain. or jitnay articles
// add ho chukay hain wo b fetch ker k la rahay hian.articles hum articles state main set kewa rahay hia 
// us state ko hum table main map kerwa rahay hian.


// useEffect(() => {
//   fetchArticles();
//   fetchCategories();
// }, []);

// const fetchArticles = async () => {
//   try {
//     const data = await getAll('/articles');
//     setArticles(data.articles);
//   } catch (error) {
//     console.error('Error fetching articles:', error);
//   }
// };

// const fetchCategories = async () => {
//   try {
//     const data = await getAll('/categories');
//     setCategories(data);
//   } catch (error) {
//     console.error('Error fetching categories:', error);
//   }
// };




