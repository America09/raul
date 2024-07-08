import React from 'react';
import { useParams } from 'react-router-dom';

const heroes = [
    { id: 1, title: 'Spider-Man', description: 'Tu amigable vecino el hombre araña', imageUrl: 'https://cdn.unotv.com/images/2023/07/spider-man-155456-1024x576.jpg' },
    { id: 2, title: 'Iron Man', description: 'genio, millonario, playboy, filantropo', imageUrl: 'https://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg' },
    { id: 3, title: 'Captain America', description: 'el primer vengador', imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi3o4zDBI6WJ6MBs2Yn6GZesQ_28ABt8PdsXEBmsTMbjml0Qf5wK0cjJgcoc2pkxnExdCOntNnaPTOJcA9mwFk5mKZcFnw_GVZt7A8DZ4feF2OCs6SFeBV7blnh6aOl0CtG6acvuw/w1200-h630-p-k-no-nu/liefeld-cap.jpg' },
];

const HeroDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const hero = heroes.find((hero) => hero.id === parseInt(id || '', 10));

  if (!hero) {
    return <h5 className="text-center text-xl font-semibold mt-10">Hero not found</h5>;
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <img className="w-full h-64 object-cover" src={hero.imageUrl} alt={hero.title} />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{hero.title}</h2>
          <p className="text-gray-700 text-base">{hero.description}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroDetail;
