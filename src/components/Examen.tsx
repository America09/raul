import React, { useState, useEffect, useCallback, useMemo } from 'react';

// Definimos los tipos para las publicaciones y comentarios
interface Article {
  source: { id: string | null; name: string };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
}

interface Comment {
  articleTitle: string;
  id: number;
  body: string;
}

const API_KEY = '746ed976930b4c5fad9a88d06bfef569'; // Reemplaza con tu clave de API
const CATEGORIES = ['business', 'entertainment', 'health', 'science', 'sports', 'technology'];

export const Examen = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>('');
  const [category, setCategory] = useState<string>(''); // Estado para la categoría

  // Fetch articles from the API
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
        const data = await response.json();
        setArticles(data.articles); // La API de NewsAPI devuelve los artículos en una propiedad "articles"
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
    fetchArticles();
  }, []);

  // Handle adding a new comment
  const handleAddComment = useCallback(() => {
    if (newComment.trim() === '') return;
    const newCommentData: Comment = {
      articleTitle: selectedArticle!.title,
      id: comments.length + 1,
      body: newComment,
    };
    setComments((prevComments) => [...prevComments, newCommentData]);
    setNewComment('');
  }, [newComment, selectedArticle, comments.length]);

  // Memoized list of articles filtered by category
  const filteredArticles = useMemo(() => {
    return category
      ? articles.filter((article) =>
          article.title.toLowerCase().includes(category.toLowerCase())
        )
      : articles;
  }, [articles, category]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <div className="mb-4">
        <label htmlFor="category" className="mr-2">Filtrar por categoría:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">Todas</option>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <div className="flex">
        <div className="w-1/3">
          {filteredArticles.map((article) => (
            <div key={article.url} onClick={() => setSelectedArticle(article)} className="cursor-pointer mb-4 p-4 bg-white shadow rounded">
              <h2 className="text-xl font-bold">{article.title}</h2>
              <p>{article.description}</p>
              <p className="text-sm text-gray-500">Fuente: {article.source.name}</p>
            </div>
          ))}
        </div>
        <div className="w-2/3">
          {selectedArticle && (
            <div>
              <h2 className="text-2xl font-bold">{selectedArticle.title}</h2>
              <p>{selectedArticle.content}</p>
              <h3 className="text-xl font-bold mt-4">Comentarios</h3>
              {comments
                .filter((comment) => comment.articleTitle === selectedArticle.title)
                .map((comment) => (
                  <div key={comment.id} className="bg-gray-100 p-2 my-2 rounded">
                    <p>{comment.body}</p>
                  </div>
                ))}
              <div className="mt-4">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="Escribe un comentario..."
                />
                <button
                  onClick={handleAddComment}
                  className="bg-blue-500 text-white p-2 rounded mt-2"
                >
                  Agregar Comentario
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Examen;
