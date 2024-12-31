import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header
        setActiveSection={setActiveSection}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
      <main className="flex-grow">
        {activeSection === 'home' && <Home />}
        {activeSection === 'about' && <About />}
        {activeSection === 'services' && <Services />}
        {activeSection === 'contact' && <Contact />}
      </main>
      <Footer setActiveSection={setActiveSection} />
    </div>
  );
}

export default App;