import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-surface font-sans text-white">
      <Navbar />
      <main>
        <Hero />
        <FeatureSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;