import React, { useState } from 'react';
import DestinationList from '../components/DestinationList';
import Filter from '../components/Filter';
import { Destination } from '../types/DestinosTs';

const destinations: Destination[] = [
  { id: 1, name: 'Playa del Carmen', category: 'Playa', description: 'Hermosa playa en México', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZpwLsD7MweXCfOtZJCG3yYyYUWzIQTl9C8g&s' },
  { id: 2, name: 'Ciudad de México', category: 'Ciudad', description: 'Capital de México', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZpwLsD7MweXCfOtZJCG3yYyYUWzIQTl9C8g&s' },
];

const categories = ['Playa', 'Ciudad', 'Montaña'];

const DestinosPage: React.FC = () => {
  const [filter, setFilter] = useState('');

  return (
    <div className="container mx-auto p-4">
      <Filter categories={categories} onFilterChange={setFilter} />
      <DestinationList destinations={destinations} filter={filter} />
    </div>
  );
};

export default DestinosPage;
