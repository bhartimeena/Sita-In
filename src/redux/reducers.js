//src/ redux/ reducers.js

import { combineReducers } from 'redux';
import {
  ADD_GROUP,
  DELETE_GROUP,
  UPDATE_GROUP,
  FETCH_STATUSES_REQUEST,
  FETCH_STATUSES_SUCCESS,
  FETCH_STATUSES_FAILURE
} from './actions';

const groupsReducer = (state = [{ from: 1, to: 10 }], action) => {
  switch (action.type) {
    case ADD_GROUP:
      return [...state, { from: '', to: '' }];
    case DELETE_GROUP:
      return state.filter((_, index) => index !== action.payload);
    case UPDATE_GROUP:
      return state.map((group, index) => (
        index === action.payload.index ?
        { from: parseInt(action.payload.from), to: parseInt(action.payload.to) } :
        group
      ));
    default:
      return state;
  }
};

const statusesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_STATUSES_REQUEST:
      return [];
    case FETCH_STATUSES_SUCCESS:
      return action.payload;
    case FETCH_STATUSES_FAILURE:
      return [];
    default:
      return state;
  }
};

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case FETCH_STATUSES_REQUEST:
      return true;
    case FETCH_STATUSES_SUCCESS:
    case FETCH_STATUSES_FAILURE:
      return false;
    default:
      return state;
  }
};

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_STATUSES_FAILURE:
      return action.payload;
    case FETCH_STATUSES_REQUEST:
    case FETCH_STATUSES_SUCCESS:
      return null;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  groups: groupsReducer,
  statuses: statusesReducer,
  loading: loadingReducer,
  error: errorReducer
});

export default rootReducer;

