import alunos from './alunos.js';
import aulas from './aulas.js';

const reducer = Redux.combineReducers({ alunos, aulas });

const store = Redux.createStore(reducer);

export default store;