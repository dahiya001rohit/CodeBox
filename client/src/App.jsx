import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import EditorPage from './pages/EditorPage.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/editor" element={<EditorPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
