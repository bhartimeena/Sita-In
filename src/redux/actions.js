//src/ redux/ actions.js

export const ADD_GROUP = 'ADD_GROUP';
export const DELETE_GROUP = 'DELETE_GROUP';
export const UPDATE_GROUP = 'UPDATE_GROUP';
export const FETCH_STATUSES_REQUEST = 'FETCH_STATUSES_REQUEST';
export const FETCH_STATUSES_SUCCESS = 'FETCH_STATUSES_SUCCESS';
export const FETCH_STATUSES_FAILURE = 'FETCH_STATUSES_FAILURE';

export const addGroup = () => ({
  type: ADD_GROUP
});

export const deleteGroup = (index) => ({
  type: DELETE_GROUP,
  payload: index
});

export const updateGroup = (index, from, to) => ({
  type: UPDATE_GROUP,
  payload: { index, from, to }
});

export const fetchStatusesRequest = () => ({
  type: FETCH_STATUSES_REQUEST
});

export const fetchStatusesSuccess = (statuses) => ({
  type: FETCH_STATUSES_SUCCESS,
  payload: statuses
});

export const fetchStatusesFailure = (error) => ({
  type: FETCH_STATUSES_FAILURE,
  payload: error
});

export const fetchStatuses = () => {
  return async (dispatch) => {
    dispatch(fetchStatusesRequest());
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      dispatch(fetchStatusesSuccess(data));
    } catch (error) {
      dispatch(fetchStatusesFailure(error.message));
    }
  };
};