import './App.css';
import Navbar from './components/Menu';

function App() {
  return (
    <div className="App">
      <Navbar brand={new Date().toLocaleTimeString()} />
    </div>
  );
}


export default App;
