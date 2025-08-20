/*
 * Notion-style Interface
 * 
 * To add new blocks:
 * 1. Create component in components/blocks/
 * 2. Import and use in content area below
 * 3. Follow block wrapper pattern with space-y-6 md:space-y-8
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './pages/About';
import ProjectsPage from './pages/Projects';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-umber">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
            </>
          } />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;