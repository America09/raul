// reducer.ts
import { Cronometro, Acciones } from '../types/Types';

const initialState: Cronometro = {
  corriendo: false,
  tiempo: 0,
};

const ReducerCronometro = (state: Cronometro, action: Acciones): Cronometro => {
  switch (action.type) {
    case 'INICIAR':
      return { ...state, corriendo: true };
    case 'DETENER':
      return { ...state, corriendo: false };
    case 'REINICIAR':
      return { corriendo: false, tiempo: 0 };
    case 'TICK':
      return state.corriendo ? { ...state, tiempo: state.tiempo + 1 } : state;
    default:
      return state;
  }
};

export { initialState, ReducerCronometro };
