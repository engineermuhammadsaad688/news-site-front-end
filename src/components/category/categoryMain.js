import { useEffect, useState } from 'react';
import './categoryMain.css';
import { FaEdit, FaTrash } from 'react-icons/fa';

import CategoryModal from './categoryModal';
import { deleteData, getAll, postData, updateData } from '../../services/api';



const CategoryMain = () => {
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

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
      await deleteData('/categories', id);
      fetchCategories();
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  const handleAdd = () => {
    setEditData(null);
    setIsModalOpen(true);
  };

  const handleEdit = (category) => {
    setEditData(category);
    setIsModalOpen(true);
  };

  const handleSubmit = async (formData) => {
    try {
      if (editData) {
        await updateData('/categories', editData._id, formData);
      } else {
        await postData('/categories', formData);
      }
      fetchCategories();
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="table-container">
      <div className='heading-container'>
        
        <div className='add-category-button-container'>
            <div><h2>All Categories</h2></div>
          <div className='add-category-button' onClick={handleAdd}>
            Add Category
          </div>
        </div>
      </div>

      <table className="custom-table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Category Name</th>
            <th>No. of Article</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((item, index) => (
            <tr key={item._id || index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <FaEdit onClick={() => handleEdit(item)} className="icon" />
              </td>
              <td>
                <FaTrash
                  onClick={() => handleDelete(item._id)}
                  className="icon delete-icon"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <CategoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        initialData={editData}
      />
    </div>
  );
};

export default CategoryMain;
