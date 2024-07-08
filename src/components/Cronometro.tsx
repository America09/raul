// Cronometro.tsx
import { useReducer, useEffect } from 'react';
import { initialState, ReducerCronometro } from './ReducerCronometro';

const CronometroComponent: React.FC = () => {
  const [state, dispatch] = useReducer(ReducerCronometro, initialState);

  useEffect(() => {
    let interval: number;
    if (state.corriendo) {
      interval = window.setInterval(() => {
        dispatch({ type: 'TICK' });
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [state.corriendo]);

  return (
    <div className="flex flex-col items-center justify-center min-h-48 bg-white rounded-lg shadow-2xl p-8">
    <h1 className="text-4xl font-bold mb-4 p-4">{state.tiempo}s</h1>
    <div className="space-x-4">
      <button
        onClick={() => dispatch({ type: 'INICIAR' })}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
      >
        Iniciar
      </button>
      <button
        onClick={() => dispatch({ type: 'DETENER' })}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
      >
        Detener
      </button>
      <button
        onClick={() => dispatch({ type: 'REINICIAR' })}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
      >
        Reiniciar
      </button>
    </div>
  </div>
  );
};

export default CronometroComponent;
