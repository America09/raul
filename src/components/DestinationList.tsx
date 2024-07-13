import React from 'react';
import { Destination } from '../types/DestinosTs';
import DestinationItem from './DestinationItem';

interface Props {
  destinations: Destination[];
  filter: string;
}

const DestinationList: React.FC<Props> = ({ destinations, filter }) => {
  const filteredDestinations = filter 
    ? destinations.filter(dest => dest.category === filter) 
    : destinations;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredDestinations.map(dest => (
        <DestinationItem key={dest.id} destination={dest} />
      ))}
    </div>
  );
};

export default DestinationList;
