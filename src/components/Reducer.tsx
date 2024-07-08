import { useReducer } from 'react';

type Accion = { tipo: 'incrementar' } | { tipo: 'decrementar' };

const estadoInicial = { cuenta: 0 };

function reducer(estado: typeof estadoInicial, accion: Accion) {
  const acciones = {
    incrementar: { cuenta: estado.cuenta + 1 },
    decrementar: { cuenta: estado.cuenta - 1 }
  };

  return acciones[accion.tipo] || estado;
}

const Contador = () => {
  const [estado, despachar] = useReducer(reducer, estadoInicial);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-2xl border text-center">
        <h1 className="text-2xl font-bold mb-4">Contador América</h1>
        <div className="text-4xl mb-4">{estado.cuenta}</div>
        <div className="space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={() => despachar({ tipo: 'incrementar' })}
          >
            Incrementar
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
            onClick={() => despachar({ tipo: 'decrementar' })}
          >
            Decrementar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contador;
