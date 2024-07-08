import { useState } from 'react';

const Input = () => {
  const [valorEntrada, setValorEntrada] = useState<string>('');

  const textoUsuario = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValorEntrada(e.target.value);
  };

  const mostrarAlert = () => {
    alert(`Valor de entrada: ${valorEntrada}`);
  };

  return (
    <div className="flex flex-col space-y-8 mb-4">
      <h1 className="text-white text-2xl font-medium">Formulario América</h1>
      <label htmlFor="entradaTexto" className="block text-lg font-medium text-white">
        Texto ingresado
      </label>
      <input
        type="text"
        id="entradaTexto"
        value={valorEntrada}
        onChange={textoUsuario}
        className="mt-1 p-2 border border-pink-300 shadow-xl rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <button
        onClick={mostrarAlert}
        className="p-2 bg-pink-500 text-white rounded-md shadow-xl hover:bg-pink-700"
      >
        Alerta
      </button>
    </div>
  );
};

export default Input;
