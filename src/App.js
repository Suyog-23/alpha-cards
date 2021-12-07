import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Menu';

function App() {
  return (
    <div className="App">
      <Navbar brand={new Date().toLocaleTimeString()} />
      <HeroSection />
    </div>
  );
}


export default App;
