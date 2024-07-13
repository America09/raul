import { useState } from "react";

const Destinos = () => {
const [valorEntrada, setValorEntrada] = useState<string>('');

const textoUsuario = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValorEntrada(e.target.value);
  };

const mostrarAlert = () => {
    alert(`Reservado${valorEntrada}`);
  };

  return (
    <div>
        <div>
            <input 
                className="h-10 w-full p-2 my-5 rounded" 
                placeholder="Buscar destino" 
                type="search" 
                name="destinos" 
                id="destinos" 
                onChange={textoUsuario}
            />
        </div>
        <ul className="space-y-8 max-w-60">
            <li >
                <img className="rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZpwLsD7MweXCfOtZJCG3yYyYUWzIQTl9C8g&s" alt="imagen1" />
                <label htmlFor="">Imagen 1</label>
                <label htmlFor="">Categoria 1</label>
            </li>
            <li>
                <img className="rounded" src="https://www.destinosmayas.com/Tours%20Culturales/destinos-mayas-sitioweb-1x1.jpg" alt="imagen2" />
                <label htmlFor="">Imagen 2</label>
                <label htmlFor="">Categoria 2</label>
            </li>
            <li>
                <img className="rounded" src="https://viajes.nationalgeographic.com.es/medio/2019/01/30/phuket_50f1fccf_1200x630.jpg" alt="imagen2" />
                <label htmlFor="">Imagen 3</label>
                <label htmlFor="">Categoria 3</label>
            </li>
            <button
        onClick={mostrarAlert}
        className="p-2 bg-pink-500 text-white rounded-md shadow-xl hover:bg-pink-700"
      >
        Reservar
      </button>
        </ul>
        
    </div>
  );
};

export default Destinos;