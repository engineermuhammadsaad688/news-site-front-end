// src/components/CategoryModal.js
import { useState, useEffect } from 'react';
import './categoryModal.css';

const CategoryModal = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [categoryName, setCategoryName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (initialData) {
      setCategoryName(initialData.name);
      setDescription(initialData.description);
    } else {
      setCategoryName('');
      setDescription('');
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name:categoryName, description:description });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>{initialData ? 'Edit Category' : 'Add Category'}</h3>
        <form onSubmit={handleSubmit}>
          <label>Category Name:</label>
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
          />

          <label>description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <div className="modal-buttons">
            <button type="submit">{initialData ? 'Update' : 'Add'}</button>
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryModal;
