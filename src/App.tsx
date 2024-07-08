import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Formulario from './pages/formularioPage';
import ReducerPage from './pages/reducerPage';
import TodoPage from './pages/TodoPage';
import CronometroPage from './pages/CronometroPage';
import ChatPage from './pages/ChatPage';
import HeroPage from './pages/HeroPage';
import LazyPage from './pages/LazyPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Formulario />} />
        <Route path="/reducer" element={<ReducerPage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/cronometro" element={<CronometroPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/lazy" element={<LazyPage />} />
        <Route path="/hero/:id" element={<HeroPage />} />
      </Routes>
    </Router>
  );
};


export default App;
