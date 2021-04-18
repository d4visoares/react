const FETCH_STARTED = 'user/FETCH_STARTED';
const FETCH_SUCCESS = 'user/FETCH_SUCCESS';
const FETCH_ERROR = 'user/FETCH_ERROR';

export const fetchStarted = () => ({ type: FETCH_STARTED });
export const fetchSuccess = (payload) => ({ type: FETCH_SUCCESS, payload });
export const fetchError = (payload) => ({ type: FETCH_ERROR, payload });

const initialState = {
  loading: false,
  data: null,
  error: null,
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_STARTED: 
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { loading: false, data: action.payload, error: null }
    case FETCH_ERROR:
      return { loading: false, data: null, error: action.payload }
    default:
      return state
  }
}

export const fetchUser = (token) => {
  return async (dispatch) => {

    console.log(token);
    try {
      dispatch(fetchStarted());
      const response = await fetch('https://dogsapi.origamid.dev/json/api/user', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      const data = await response.json();
      dispatch(fetchSuccess(data))
    } catch (error) {
      dispatch(fetchError(error.message))
    }
  }
}

export default reducer;