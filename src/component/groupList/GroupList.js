// src/groupList/GroupList.js

import React from 'react';
import Group from '../group/Group';
import './GroupList.css';

const GroupList = ({ groups, addGroup, deleteGroup, updateGroup, statuses }) => {
  return (
    <div className="group-list">
      {groups.map((group, index) => (
        <div key={index} className="group-list-item">
          <div className="group-list-item-header">
            <button className="delete-button" onClick={() => deleteGroup(index)}>
              Delete
            </button>
            <span className="group-list-item-title">Group {index + 1}</span>
            <div className="group-list-controls">
              <label className="group-list-label">
                From:
                <input
                  className="group-list-input"
                  type="number"
                  value={group.from}
                  onChange={(e) => updateGroup(index, e.target.value, group.to)}
                  min="1"
                  max="10"
                />
              </label>
              <span className="group-list-arrow">→</span>
              <label className="group-list-label">
                To:
                <input
                  className="group-list-input"
                  type="number"
                  value={group.to}
                  onChange={(e) => updateGroup(index, group.from, e.target.value)}
                  min="1"
                  max="10"
                />
              </label>
            </div>
          </div>
          <div className="statuses">
            
          </div>
        </div>
      ))}
      <button className="btn btn-add" onClick={addGroup}>
        Add Group
      </button>
    </div>
  );
};

export default GroupList;