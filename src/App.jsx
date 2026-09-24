import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import AboutPage from './pages/AboutPage';

export default function App() {
 return (
 <BrowserRouter>
 <Routes>
 <Route element={<MainLayout />}>
 <Route path="/" element={<Home />} />
 <Route path="/projects" element={<Projects />} />
 <Route path="/about" element={<AboutPage />} />
 </Route>
 </Routes>
 </BrowserRouter>
 );
}