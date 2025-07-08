import { useState } from 'react';
import './articleMain.css';

const AddArticleModal = ({ isOpen, onClose, onSubmit, categories }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    categoryId: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'image' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('categoryId', formData.categoryId);
    data.append('image', formData.image);
    onSubmit(data);
    setFormData({ title: '', description: '', categoryId: '', image: null });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Add Article</h3>
        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <label>Category:</label>
          <select
            name="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Category --</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>

          <label>Image:</label>
          <input type="file" name="image" onChange={handleChange} required />

          <div className="modal-buttons">
            <button type="submit">Add</button>
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddArticleModal;
