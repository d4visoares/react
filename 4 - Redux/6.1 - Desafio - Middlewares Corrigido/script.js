import store from './store/configureStore.js';
import { tokenFetch } from './store/token.js';
import { userFetch } from './store/user.js';

async function login (user) {
  const state = store.getState();
  if (state.token.data === null) {
    await store.dispatch(tokenFetch(user));
  }
  // console.log(state)
  // await store.dispatch(userFetch(state.token.data));
}
login({ username: 'dog', password: 'dog' })