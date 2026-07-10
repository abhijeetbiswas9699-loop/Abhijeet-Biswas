import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ShopByRoom from './components/ShopByRoom';
import ModularKitchen from './components/ModularKitchen';
import Process from './components/Process';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <Hero />
      <ShopByRoom />
      <ModularKitchen />
      <Process />
      <Reviews />
      <Contact />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
