import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/fonts.css';
import './styles/tokens.css';
import './styles/global.css';
import './styles/header.css';
import './styles/hero.css';
import './styles/story.css';
import './styles/memorial.css';
import './styles/footer.css';

const root = document.getElementById('root');
if (!root) throw new Error('Не найден корневой элемент приложения.');

createRoot(root).render(<StrictMode><App /></StrictMode>);
