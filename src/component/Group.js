// component/Group.js
// import React from 'react';
// import { AiFillDelete } from "react-icons/ai";
// import './Group.css';

// const Group = ({ index, group, deleteGroup, updateGroup, statuses }) => {
//   const handleFromChange = (e) => {
//     updateGroup(index, e.target.value, group.to);
//   };

//   const handleToChange = (e) => {
//     updateGroup(index, group.from, e.target.value);
//   };

//   const groupStatuses = statuses.filter(status => 
//     status.id >= group.from && status.id <= group.to
//   );

//   return (
//     <div className="group">
//       <div className="group-header">
//         <button className="btn btn-danger delete-button" onClick={() => deleteGroup(index)}>
//           <AiFillDelete />
//         </button>
//         <h2 className="group-title">Group {index + 1}</h2>
//         <div className="group-controls">
//           <label className="group-label">
//             From:
//             <input className="group-input" type="number" value={group.from} onChange={handleFromChange} />
//           </label>
//           <span className="group-arrow">→</span>
//           <label className="group-label">
//             To:
//             <input className="group-input" type="number" value={group.to} onChange={handleToChange} />
//           </label>
//         </div>
//       </div>
//       <div className="statuses">
//         {groupStatuses.map(status => (
//           <span key={status.id} className="status-item">
//             ({status.id}) {status.completed ? 'True' : 'False'}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Group;



// // component/Group.js
// import React from 'react';
// import { AiFillDelete } from "react-icons/ai";
// import './Group.css';

// const Group = ({ index, group, deleteGroup, updateGroup, statuses }) => {
//   const handleFromChange = (e) => {
//     updateGroup(index, e.target.value, group.to);
//   };

//   const handleToChange = (e) => {
//     updateGroup(index, group.from, e.target.value);
//   };

//   const groupStatuses = statuses.filter(status => 
//     status.id >= group.from && status.id <= group.to
//   );

//   return (
//     <div className="group">
//       <div className="group-header">
//         <button className="delete-button" onClick={() => deleteGroup(index)}>
//           <AiFillDelete />
//         </button>
//         <span className="group-title">Group {index + 1}</span>
//         <div className="group-controls">
//           <label className="group-label">
//             From:
//             <input 
//               className="group-input" 
//               type="number" 
//               value={group.from} 
//               onChange={handleFromChange} 
//               min="1" 
//               max="10" 
//             />
//           </label>
//           <span className="group-arrow">→</span>
//           <label className="group-label">
//             To:
//             <input 
//               className="group-input" 
//               type="number" 
//               value={group.to} 
//               onChange={handleToChange} 
//               min="1" 
//               max="10" 
//             />
//           </label>
//         </div>
//       </div>
//       <div className="statuses">
//         {groupStatuses.map(status => (
//           <span key={status.id} className="status-item">
//             ({status.id}) {status.completed ? 'True' : 'False'}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Group;


import React from 'react';
import { AiFillDelete } from "react-icons/ai";
import './Group.css';

const Group = ({ index, group, deleteGroup, updateGroup, statuses }) => {
  const handleFromChange = (e) => {
    updateGroup(index, e.target.value, group.to);
  };

  const handleToChange = (e) => {
    updateGroup(index, group.from, e.target.value);
  };

  const groupStatuses = statuses.filter(status => 
    status.id >= group.from && status.id <= group.to
  );

  return (
    <div className="group">
      <div className="group-header">
        <button className="delete-button" onClick={() => deleteGroup(index)}>
          <AiFillDelete />
        </button>
        <span className="group-title">Group {index + 1}</span>
        <div className="group-controls">
          <label className="group-label">
            From:
            <input 
              className="group-input" 
              type="number" 
              value={group.from} 
              onChange={handleFromChange} 
              min="1" 
              max="10" 
            />
          </label>
          <span className="group-arrow">→</span>
          <label className="group-label">
            To:
            <input 
              className="group-input" 
              type="number" 
              value={group.to} 
              onChange={handleToChange} 
              min="1" 
              max="10" 
            />
          </label>
        </div>
      </div>
      <div className="statuses">
        {groupStatuses.map(status => (
          <span key={status.id} className="status-item">
            ({status.id}) {status.completed ? 'True' : 'False'}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Group;
