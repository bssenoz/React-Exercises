import './App.css';
import { WheatherProvider } from './context/WeatherContext';
import { Cards } from './components/Cards';
import { Input } from './components/Input';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <WheatherProvider>
        <Input />
        <Cards />
        <Footer />
      </WheatherProvider>
    </div>
  );
}

export default App;