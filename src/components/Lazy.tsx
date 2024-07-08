import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

interface CardItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const cardItems: CardItem[] = [
    { id: 1, title: 'Spider-Man', description: 'Tu amigable vecino el hombre araña', imageUrl: 'https://cdn.unotv.com/images/2023/07/spider-man-155456-1024x576.jpg' },
    { id: 2, title: 'Iron Man', description: 'genio, millonario, playboy, filantropo', imageUrl: 'https://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg' },
    { id: 3, title: 'Captain America', description: 'el primer vengador', imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi3o4zDBI6WJ6MBs2Yn6GZesQ_28ABt8PdsXEBmsTMbjml0Qf5wK0cjJgcoc2pkxnExdCOntNnaPTOJcA9mwFk5mKZcFnw_GVZt7A8DZ4feF2OCs6SFeBV7blnh6aOl0CtG6acvuw/w1200-h630-p-k-no-nu/liefeld-cap.jpg' },
];

const LazyLoadCard: React.FC<{ item: CardItem }> = ({ item }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate(`/hero/${item.id}`);
  };

  return (
    <div ref={ref} className="max-w-sm mx-2 my-4 bg-white shadow-md rounded-lg overflow-hidden">
      {inView ? (
        <img className="w-full h-36 object-cover" src={item.imageUrl} alt={item.title} />
      ) : (
        <div className="w-full h-36 bg-gray-200"></div>
      )}
      <div className="p-4">
        <div onClick={handleTitleClick} className="cursor-pointer">
          <h2 className="text-xl font-bold mb-2">{item.title}</h2>
        </div>
        <p className="text-gray-700 text-base">{item.description}</p>
      </div>
    </div>
  );
};

const LazyLoadCardList: React.FC = () => {
  return (
    <div className="container mx-auto flex flex-wrap justify-center">
      {cardItems.map((item) => (
        <LazyLoadCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default LazyLoadCardList;
