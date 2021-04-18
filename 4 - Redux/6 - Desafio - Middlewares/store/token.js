const FETCH_STARTED = 'token/FETCH_STARTED';
const FETCH_SUCCESS = 'token/FETCH_SUCCESS';
const FETCH_ERROR = 'token/FETCH_ERROR';

export const fetchStarted = () => ({ type: FETCH_STARTED });
export const fetchSuccess = (token) => ({ type: FETCH_SUCCESS, localStorage: 'token', payload: token });
export const fetchError = (message) => ({ type: FETCH_ERROR, payload: message });

import getLocalStorage from './getLocalStorage.js';

const initialState = {
  loading: false,
  token: getLocalStorage('token', null),
  error: null,
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_STARTED: 
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { loading: false, token: action.payload, error: null }
    case FETCH_ERROR:
      return { loading: false, token: null, error: action.payload }
    default:
      return state
  }
}

export const fetchToken = (user) => {
  return async (dispatch) => {
    try {
      dispatch(fetchStarted());
      const response = await fetch(
        'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user),
        }
      );
      
      const { token } = await response.json();
      dispatch(fetchSuccess(token));
    } catch (error) {
      dispatch(fetchError(error.message))
    }
  }
}

export default reducer;