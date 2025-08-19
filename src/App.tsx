/*
 * Notion-style Interface
 * 
 * To add new blocks:
 * 1. Create component in components/blocks/
 * 2. Import and use in content area below
 * 3. Follow block wrapper pattern with space-y-6 md:space-y-8
 */

import Header from './components/Header';
import Hero from './components/Hero';
import HomeContent from './components/content/HomeContent';
import ProjectsContent from './components/content/ProjectsContent';
import ExperienceContent from './components/content/ExperienceContent';
import SkillsContent from './components/content/SkillsContent';
import ContactContent from './components/content/ContactContent';

function App() {
  return (
    <div className="min-h-screen bg-white text-umber">
      <Header />
      <Hero />
      
      <main>
        <section id="about" className="max-w-6xl mx-auto px-6 py-16 border-b border-umber/10">
          <HomeContent />
        </section>
        
        <section id="projects" className="max-w-6xl mx-auto px-6 py-16 border-b border-umber/10">
          <ProjectsContent />
        </section>
        
        <section id="experience" className="max-w-6xl mx-auto px-6 py-16 border-b border-umber/10">
          <ExperienceContent />
        </section>
        
        <section id="skills" className="max-w-6xl mx-auto px-6 py-16 border-b border-umber/10">
          <SkillsContent />
        </section>
        
        <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
          <ContactContent />
        </section>
      </main>
    </div>
  );
}

export default App;