import { useEffect, useState } from 'react';
import './dashboardMain.css';



import { getAll } from '../../services/api';


const DashboardMain = () => {
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const data = await getAll('/users');
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };
  return (
    <div className="table-container">
      <div className="heading-container">
        <div className="add-category-button-container">
          <div><h2>Dashboard</h2></div>
        </div>
      </div>

      <table className="custom-table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((item, index) => (
            <tr key={item._id || index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default DashboardMain;
