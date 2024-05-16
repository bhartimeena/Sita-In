// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import GroupList from './component/GroupList';

const App = () => {
  const [groups, setGroups] = useState([{ from: 1, to: 10 }]);
  const [statuses, setStatuses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addGroup = () => {
    setGroups([...groups, { from: '', to: '' }]);
  };

  const deleteGroup = (index) => {
    const newGroups = groups.filter((_, i) => i !== index);
    setGroups(newGroups);
  };

  const updateGroup = (index, from, to) => {
    const newGroups = groups.map((group, i) => 
      i === index ? { from: parseInt(from, 10), to: parseInt(to, 10) } : group
    );
    setGroups(newGroups);
  };

  const validateGroups = () => {
    let valid = true;
    let previousTo = 0;

    groups.forEach(group => {
      if (group.from < 1 || group.to > 10 || group.from > group.to || group.from !== previousTo + 1) {
        valid = false;
      }
      previousTo = group.to;
    });

    return valid && previousTo === 10;
  };

  const showStatus = async () => {
    if (!validateGroups()) {
      setError('Invalid groups. Please ensure groups cover the entire range 1-10 without gaps or overlaps.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const statuses = [];
      for (const group of groups) {
        for (let i = group.from; i <= group.to; i++) {
          const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${i}`);
          statuses.push({ id: i, completed: response.data.completed });
        }
      }
      setStatuses(statuses);
    } catch (error) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Todo List Status</h1>
      <GroupList
        groups={groups}
        addGroup={addGroup}
        deleteGroup={deleteGroup}
        updateGroup={updateGroup}
        statuses={statuses}
      />
      {/* <button className="btn btn-primary" onClick={showStatus} disabled={loading}>
        {loading ? 'Loading...' : 'Show Status'}
      </button>
      {error && <p className="error">{error}</p>} */}
    </div>
  );
};

export default App;

