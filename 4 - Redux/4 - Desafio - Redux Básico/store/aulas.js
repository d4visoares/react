const COMPLETAR_AULA = 'aulas/COMPLETAR_AULA';
const COMPLETAR_CURSO = 'aulas/COMPLETAR_CURSO';
const RESETAR_CURSO = 'aulas/RESETAR_CURSO';

export const completarAula = (payload) => ({ type: COMPLETAR_AULA, payload });
export const completarCurso = () => ({ type: COMPLETAR_CURSO });
export const resetarCurso = () => ({ type: RESETAR_CURSO});

const initialState = [
  {
    id: 1,
    nome: 'Design',
    completa: true,
  },
  {
    id: 2,
    nome: 'HTML',
    completa: false,
  },
  {
    id: 3,
    nome: 'CSS',
    completa: false,
  },
  {
    id: 4,
    nome: 'JavaScript',
    completa: false,
  },
]

const reducer = immer.produce((state, action) => {
  switch (action.type) {
    case COMPLETAR_AULA:
      state = state.map(item => {
        if (item.id === action.payload) {
          item.completa = true;
          return item;
        }

        return item;
      })
      break;
    case COMPLETAR_CURSO:
      state = state.forEach(item => {
        item.completa = true;
        return item;
      });
      break;
    case RESETAR_CURSO:
      state = state.forEach(item => {
        item.completa = false;
        return item;
      })
  }
}, initialState);

export default reducer;