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
      setArticles(data);
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

  const handleDelete = async (id) => {
    try {
      await deleteData('/articles', id);
      fetchArticles();
    } catch (error) {
      console.error('Error deleting article:', error);
    }
  };

  const handleAdd = () => {
    setIsAddModalOpen(true);
  };

  const handleEdit = (article) => {
    setEditData(article);
    setIsEditModalOpen(true);
  };

  const handleAddSubmit = async (formData) => {
    try {
      await postData('/articles', formData, {file:true}); // 'true' for file upload
      fetchArticles();
      setIsAddModalOpen(false);
    } catch (error) {
      console.error('Error adding article:', error);
    }
  };

  const handleEditSubmit = async (formData) => {
    try {
      await updateData('/articles', editData._id, formData, {file:true});
      fetchArticles();
      setIsEditModalOpen(false);
      setEditData(null);
    } catch (error) {
      console.error('Error updating article:', error);
    }
  };

  return (
    <div className="table-container">
      <div className="add-category-button-container">
        <h2>All Articles</h2>
        <div className="add-category-button" onClick={handleAdd}>
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
          {articles.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.categoryId?.name}</td>
              <td>
                <img src={`http://localhost:5000/api/uploads/${item.image}`} alt="article" width="50" height="50" />
              </td>
              <td>
                <FaEdit onClick={() => handleEdit(item)} className="icon" />
              </td>
              <td>
                <FaTrash onClick={() => handleDelete(item._id)} className="icon delete-icon" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <AddArticleModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddSubmit}
        categories={categories}
      />

      <EditArticleModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSubmit={handleEditSubmit}
        initialData={editData}
        categories={categories}
      />
    </div>
  );
};

export default ArticleMain;
