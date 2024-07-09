import React, { useState, useEffect, useMemo, useCallback } from 'react';

interface Publicacion {
  id: number;
  titulo: string;
  contenido: string;
  categoria: string;
  comentarios: string[];
}

const publicacionesSimuladas: Publicacion[] = [
  { id: 1, titulo: 'Publicación 1', contenido: 'Esta es la primera publicación', categoria: 'Tecnología', comentarios: [] },
  { id: 2, titulo: 'Publicación 2', contenido: 'Esta es la segunda publicación', categoria: 'Salud', comentarios: [] },
];

export const Examen: React.FC = () => {
  const [publicaciones, setPublicaciones] = useState<Publicacion[]>([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>('Todas');
  const [nuevoComentario, setNuevoComentario] = useState<string>('');
  const [idPublicacionActiva, setIdPublicacionActiva] = useState<number | null>(null);

  useEffect(() => {
    // Simular la carga de publicaciones
    setPublicaciones(publicacionesSimuladas);
  }, []);

  const publicacionesFiltradas = useMemo(() => {
    return categoriaSeleccionada === 'Todas' ? publicaciones : publicaciones.filter(publicacion => publicacion.categoria === categoriaSeleccionada);
  }, [publicaciones, categoriaSeleccionada]);

  const manejarAgregarComentario = useCallback(() => {
    if (idPublicacionActiva !== null && nuevoComentario.trim()) {
      setPublicaciones(prevPublicaciones =>
        prevPublicaciones.map(publicacion =>
          publicacion.id === idPublicacionActiva ? { ...publicacion, comentarios: [...publicacion.comentarios, nuevoComentario] } : publicacion
        )
      );
      setNuevoComentario('');
    }
  }, [idPublicacionActiva, nuevoComentario]);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Blog</h1>
      <div className="mb-6">
        <label htmlFor="categoria" className="mr-2 text-lg font-medium">Filtrar por categoría:</label>
        <select
          id="categoria"
          value={categoriaSeleccionada}
          onChange={(e) => setCategoriaSeleccionada(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="Todas">Todas</option>
          <option value="Tecnología">Tecnología</option>
          <option value="Salud">Salud</option>
        </select>
      </div>
      <div className="space-y-6">
        {publicacionesFiltradas.map(publicacion => (
          <div key={publicacion.id} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">{publicacion.titulo}</h2>
            <p className="mb-4">{publicacion.contenido}</p>
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Comentarios</h3>
              <ul className="list-disc list-inside mb-4">
                {publicacion.comentarios.map((comentario, index) => (
                  <li key={index}>{comentario}</li>
                ))}
              </ul>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Agregar un comentario"
                  value={idPublicacionActiva === publicacion.id ? nuevoComentario : ''}
                  onChange={(e) => {
                    setIdPublicacionActiva(publicacion.id);
                    setNuevoComentario(e.target.value);
                  }}
                  className="p-2 border rounded flex-grow"
                />
                <button
                  onClick={manejarAgregarComentario}
                  className="p-2 bg-blue-500 text-white rounded"
                >
                  Agregar Comentario
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
