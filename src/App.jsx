import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-accent selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />

      {/* minimal footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 bg-surface/10">
        <p>© {new Date().getFullYear()} Mohammad Abdul Lateef. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;
