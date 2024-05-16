// // // component/GroupContainer.js
// import React, { useState } from 'react';
// import Group from './Group';
// import './GroupList.css';

// const GroupContainer = () => {
//   const [groups, setGroups] = useState([{ from: 1, to: 10 }]);
//   const [statuses, setStatuses] = useState([]);

//   const addGroup = () => {
//     setGroups([...groups, { from: 1, to: 10 }]);
//   };

//   const deleteGroup = (index) => {
//     setGroups(groups.filter((_, i) => i !== index));
//   };

//   const updateGroup = (index, from, to) => {
//     const newGroups = [...groups];
//     newGroups[index] = { from: parseInt(from), to: parseInt(to) };
//     setGroups(newGroups);
//   };

//   const fetchStatuses = async () => {
//     const promises = [];
//     for (let i = 1; i <= 10; i++) {
//       promises.push(fetch(`https://jsonplaceholder.typicode.com/todos/${i}`).then(res => res.json()));
//     }
//     const results = await Promise.all(promises);
//     setStatuses(results);
//   };

//   return (
//     <div className="group-container">
//       {groups.map((group, index) => (
//         <Group 
//           key={index}
//           index={index}
//           group={group}
//           deleteGroup={deleteGroup}
//           updateGroup={updateGroup}
//           statuses={statuses}
//         />
//       ))}
//       <button className="btn btn-add" onClick={addGroup}>Add Group</button>
//       <button className="btn btn-status" onClick={fetchStatuses}>Show Status</button>
//     </div>
//   );
// };

// export default GroupContainer;

// import React, { useState } from 'react';
// import axios from 'axios';
// import Group from './Group';
// import './GroupList.css';

// const GroupContainer = () => {
//   const [groups, setGroups] = useState([{ from: 1, to: 10 }]);
//   const [statuses, setStatuses] = useState([]);

//   const addGroup = () => {
//     setGroups([...groups, { from: '', to: '' }]);
//   };

//   const deleteGroup = (index) => {
//     setGroups(groups.filter((_, i) => i !== index));
//   };

//   const updateGroup = (index, from, to) => {
//     const newGroups = [...groups];
//     newGroups[index] = { from: parseInt(from), to: parseInt(to) };
//     setGroups(newGroups);
//   };

//   const fetchStatuses = async () => {
//     const promises = [];
//     for (let i = 1; i <= 10; i++) {
//       promises.push(axios.get(`https://jsonplaceholder.typicode.com/todos/${i}`).then(res => res.data));
//     }
//     const results = await Promise.all(promises);
//     setStatuses(results);
//   };

//   return (
//     <div className="group-container">
//       {groups.map((group, index) => (
//         <Group 
//           key={index}
//           index={index}
//           group={group}
//           deleteGroup={deleteGroup}
//           updateGroup={updateGroup}
//           statuses={statuses}
//         />
//       ))}
//       <button className="btn btn-add" onClick={addGroup}>Add Group</button>
//       <button className="btn btn-status" onClick={fetchStatuses}>Show Status</button>
//     </div>
//   );
// };

// export default GroupContainer;


import React, { useState } from 'react';
import axios from 'axios';
import Group from './Group';
import './GroupList.css';

const GroupContainer = () => {
  const [groups, setGroups] = useState([{ from: 1, to: 10 }]);
  const [statuses, setStatuses] = useState([]);

  const addGroup = () => {
    setGroups([...groups, { from: '', to: '' }]);
  };

  const deleteGroup = (index) => {
    setGroups(groups.filter((_, i) => i !== index));
  };

  const updateGroup = (index, from, to) => {
    const newGroups = [...groups];
    newGroups[index] = { from: parseInt(from), to: parseInt(to) };
    setGroups(newGroups);
  };

  const fetchStatuses = async () => {
    const promises = [];
    for (let i = 1; i <= 10; i++) {
      promises.push(axios.get(`https://jsonplaceholder.typicode.com/todos/${i}`).then(res => res.data));
    }
    const results = await Promise.all(promises);
    setStatuses(results);
  };

  return (
    <div className="group-container">
      {groups.map((group, index) => (
        <Group 
          key={index}
          index={index}
          group={group}
          deleteGroup={deleteGroup}
          updateGroup={updateGroup}
          statuses={statuses}
        />
      ))}
      <button className="btn btn-add" onClick={addGroup}>Add Group</button>
      <button className="btn btn-status" onClick={fetchStatuses}>Show Status</button>
    </div>
  );
};

export default GroupContainer;
