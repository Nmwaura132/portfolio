
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TerminalModal from './components/TerminalModal';
import AchievementToast from './components/AchievementToast';

function App() {
  return (
    <>
      <div className="layout-sidebar">
        <Sidebar />
      </div>

      <div className="layout-content">
        <main>
          <Hero />
          <Projects />
          <TechStack />
          <Contact />
        </main>
        <Footer />
      </div>

      <TerminalModal />
      <AchievementToast />
    </>
  );
}

export default App;
