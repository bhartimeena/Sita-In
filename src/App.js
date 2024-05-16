//src/App.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addGroup, deleteGroup, updateGroup, fetchStatuses } from './redux/actions';
import Group from './component/group/Group';
import './App.css';

const App = () => {
  const groups = useSelector(state => state.groups);
  const statuses = useSelector(state => state.statuses);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);
  const dispatch = useDispatch();

  const handleAddGroup = () => {
    dispatch(addGroup());
  };

  const handleDeleteGroup = (index) => {
    dispatch(deleteGroup(index));
  };

  const handleUpdateGroup = (index, from, to) => {
    dispatch(updateGroup(index, from, to));
  };

  const handleShowStatus = () => {
    dispatch(fetchStatuses());
  };

  return (
    <div className="container">
      <h1>Todo List Status</h1>
      {groups.map((group, index) => (
        <Group 
          key={index}
          index={index}
          group={group}
          onDelete={handleDeleteGroup}
          onUpdate={handleUpdateGroup}
          statuses={statuses}
        />
      ))}
      <button className="btn btn-add" onClick={handleAddGroup}>Add Group</button>
      <button className="btn btn-status" onClick={handleShowStatus} disabled={loading}>
        {loading ? 'Loading...' : 'Show Status'}
      </button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default App;
