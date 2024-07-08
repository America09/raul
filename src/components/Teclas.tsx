import { useState } from 'react';

const Teclas = () => {
  const [ultimaTecla, setUltimaTecla] = useState<string>('');

  const manejarTecla = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setUltimaTecla(e.key);
  };

  return (
    <div className="space-y-8">
      <label htmlFor="inputTecla" className="block text-lg font-medium text-white">
        Tecla presionada
      </label>
      <input
        type="text"
        id="inputTecla"
        onKeyDown={manejarTecla}
        className="mt-1 w-full p-2 border border-pink-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <p className="text-lg text-white">Tecla presionada: {ultimaTecla}</p>
    </div>
  );
};

export default Teclas;
