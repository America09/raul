import React from 'react';
import { Destination } from '../types/DestinosTs';

interface Props {
  destination: Destination;
  onClose: () => void;
}

const ReservationModal: React.FC<Props> = ({ destination, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg">
        <h2 className="text-2xl font-bold">{destination.name}</h2>
        <p className="mt-2">{destination.description}</p>
        <button 
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ReservationModal;
