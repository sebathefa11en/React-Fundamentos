import './App.css';
import Contador from './components/Contador';
import Eventos from './components/eventos';
import Parrafo from './components/parrafo';
import Variables from './components/variables';

function App() {
  return (
    <div>
      <h1>Hola Mundo desde ReactJS!</h1>
      <Parrafo />
      <Variables />
      <Eventos />
      <Contador />
    </div>
  );
}

export default App;
