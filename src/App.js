import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

// import AirHome from './Pages/AirHome';
// import AA from './components/airHome/a';
// import CalculatorPage from './Pages/calculatorPage';
// import CalculatorMain from './components/calculatorMain/calculatorMain';
// import AirbanbCloneProject from './components/airHome/airbanbCloneProject';
// import Linkdink from './components/test/linkdink';
// import Linkdink1 from './components/test/linkdink1';
// import Netflix from './components/Netflix/Netflix';


function App() {
  return (
    <>
      {/* <Router>
        <Routes>

          <Route path="c" element={< CalculatorPage />} />
        </Routes>
      </Router>
      <Router>
        <Routes>
          <Route path="/airHome" element={<AirHome />} />
          <Route path="air" element={<AA />} />
          <Route path="Airbanb" element={< AirbanbCloneProject />} />
          <Route path="CalculatorMain" element={< CalculatorMain />} />


        </Routes>
      </Router>
      <Router>
        <Routes>


          <Route path="/" element={< Linkdink />} />
          <Route path="main" element={< Linkdink1 />} />










        </Routes>
      </Router> 
      <Router>
        <Routes>
          <Route path="" element={< Netflix />} />
        </Routes>
      </Router> */}


    </>
  );
}

export default App;

// import React, { useState } from "react";

// export default function App() {
//   const [todos, setTodos] = useState([]);

//   // Add Modal State
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//   const [newTodo, setNewTodo] = useState("");

//   // Edit Modal State
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [editTodo, setEditTodo] = useState({ id: "", text: "" });

//   // Add Todo
//   const handleAddTodo = (e) => {
//     e.preventDefault();
//     if (!newTodo.trim()) return;
//     setTodos([...todos, { id: Date.now().toString(), text: newTodo }]);
//     setNewTodo("");
//     setIsAddModalOpen(false);
//   };

//   // Edit Todo
//   const handleEditTodo = (e) => {
//     e.preventDefault();
//     setTodos(
//       todos.map((t) =>
//         t.id === editTodo.id ? { ...t, text: editTodo.text } : t
//       )
//     );
//     setIsEditModalOpen(false);
//     setEditTodo({ id: "", text: "" });
//   };

//   // Delete Todo
//   const handleDelete = (id) => {
//     setTodos(todos.filter((t) => t.id !== id));
//   };

//   return (
//     <div style={styles.container}>
//       <h1>Todo App</h1>
//       <button style={styles.addBtn} onClick={() => setIsAddModalOpen(true)}>
//         + Add Todo
//       </button>

//       <ul style={styles.list}>
//         {todos.map((todo) => (
//           <li key={todo.id} style={styles.listItem}>
//             <span>{todo.text}</span>
//             <div>
//               <button
//                 style={styles.editBtn}
//                 onClick={() => {
//                   setEditTodo(todo);
//                   setIsEditModalOpen(true);
//                 }}
//               >
//                 Edit
//               </button>
//               <button
//                 style={styles.deleteBtn}
//                 onClick={() => handleDelete(todo.id)}
//               >
//                 Delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>

//       {/* Add Modal */}
//       {isAddModalOpen && (
//         <div style={styles.modalOverlay}>
//           <div style={styles.modal}>
//             <h2>Add Todo</h2>
//             <form onSubmit={handleAddTodo}>
//               <input
//                 type="text"
//                 value={newTodo}
//                 onChange={(e) => setNewTodo(e.target.value)}
//                 style={styles.input}
//                 placeholder="Enter todo"
//               />
//               <div style={styles.modalActions}>
//                 <button type="submit" style={styles.saveBtn}>
//                   Save
//                 </button>
//                 <button
//                   type="button"
//                   style={styles.cancelBtn}
//                   onClick={() => setIsAddModalOpen(false)}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Edit Modal */}
//       {isEditModalOpen && (
//         <div style={styles.modalOverlay}>
//           <div style={styles.modal}>
//             <h2>Edit Todo</h2>
//             <form onSubmit={handleEditTodo}>
//               <input
//                 type="text"
//                 value={editTodo.text}
//                 onChange={(e) =>
//                   setEditTodo({ ...editTodo, text: e.target.value })
//                 }
//                 style={styles.input}
//                 placeholder="Edit todo"
//               />
//               <div style={styles.modalActions}>
//                 <button type="submit" style={styles.saveBtn}>
//                   Update
//                 </button>
//                 <button
//                   type="button"
//                   style={styles.cancelBtn}
//                   onClick={() => setIsEditModalOpen(false)}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// // Inline Styles
// const styles = {
//   container: {
//     fontFamily: "Arial, sans-serif",
//     maxWidth: "500px",
//     margin: "50px auto",
//     padding: "20px",
//     border: "1px solid #ddd",
//     borderRadius: "8px",
//   },
//   addBtn: {
//     padding: "10px 15px",
//     background: "green",
//     color: "white",
//     border: "none",
//     cursor: "pointer",
//     borderRadius: "5px",
//   },
//   list: {
//     listStyle: "none",
//     padding: 0,
//     marginTop: "20px",
//   },
//   listItem: {
//     display: "flex",
//     justifyContent: "space-between",
//     padding: "10px",
//     borderBottom: "1px solid #ccc",
//   },
//   editBtn: {
//     marginRight: "10px",
//     padding: "5px 10px",
//     background: "blue",
//     color: "white",
//     border: "none",
//     cursor: "pointer",
//     borderRadius: "4px",
//   },
//   deleteBtn: {
//     padding: "5px 10px",
//     background: "red",
//     color: "white",
//     border: "none",
//     cursor: "pointer",
//     borderRadius: "4px",
//   },
//   modalOverlay: {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     background: "rgba(0,0,0,0.5)",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   modal: {
//     background: "white",
//     padding: "20px",
//     borderRadius: "8px",
//     width: "300px",
//   },
//   input: {
//     width: "100%",
//     padding: "8px",
//     marginBottom: "15px",
//   },
//   modalActions: {
//     display: "flex",
//     justifyContent: "flex-end",
//   },
//   saveBtn: {
//     background: "green",
//     color: "white",
//     border: "none",
//     padding: "8px 12px",
//     marginRight: "10px",
//     borderRadius: "4px",
//     cursor: "pointer",
//   },
//   cancelBtn: {
//     background: "gray",
//     color: "white",
//     border: "none",
//     padding: "8px 12px",
//     borderRadius: "4px",
//     cursor: "pointer",
//   },
// };
