import React, { useState } from 'react';
import { Destination } from '../types/DestinosTs';
import ReservationModal from './Reservation';

interface Props {
  destination: Destination;
}

const DestinationItem: React.FC<Props> = ({ destination }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="border p-4 rounded-lg">
      <img src={destination.image} alt={destination.name} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-xl font-bold mt-2">{destination.name}</h2>
      <p>{destination.description}</p>
      <button 
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={openModal}
      >
        Reservar
      </button>
      {isModalOpen && <ReservationModal destination={destination} onClose={closeModal} />}
    </div>
  );
};

export default DestinationItem;
