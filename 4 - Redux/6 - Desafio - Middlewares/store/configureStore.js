import user from './user.js';
import token from './token.js';

const thunk = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }

  return next(action);
}

const localStorage = (store) => (next) => (action) => {
  if (action.localStorage !== undefined) {
    window.localStorage.setItem((action.localStorage), JSON.stringify(action.payload));
  }

  return next(action);
}

const { applyMiddleware, compose } = Redux;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, localStorage))

const reducer = Redux.combineReducers({ user, token })

const store = Redux.createStore(reducer, enhancer);

export default store;