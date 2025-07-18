import { useEffect, useState } from 'react';
import './categoryMain.css';
import { FaEdit, FaTrash } from 'react-icons/fa';


import { deleteData, getAll, postData, updateData } from '../../services/api';
import AddCategoryModal from './addCategoryModal';
import EditCategoryModal from './editCategoryModal';

const CategoryMain = () => {
  const [categories, setCategories] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
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
    setIsAddModalOpen(true);
  };

  const handleEdit = (category) => {
    setEditData(category);
    setIsEditModalOpen(true);
  };

  const handleAddSubmit = async (formData) => {
    try {
      await postData('/categories', formData);
      fetchCategories();
      setIsAddModalOpen(false);
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  const handleEditSubmit = async (formData) => {
    try {
      await updateData('/categories', editData._id, formData);
      fetchCategories();
      setIsEditModalOpen(false);
      setEditData(null);
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  return (
    <div className="table-container">
      <div className="heading-container">
        <div className="add-category-button-container">
          <div><h2>All Categories</h2></div>
          <div className="add-category-button" onClick={handleAdd}>
            Add Category
          </div>
        </div>
      </div>

      <table className="custom-table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Category Name</th>
            <th>Description</th>
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

      <AddCategoryModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddSubmit}
      />

      <EditCategoryModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSubmit={handleEditSubmit}
        initialData={editData}
      />
    </div>
  );
};

export default CategoryMain;
