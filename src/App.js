import logo from './logo.svg';
import './App.css';
import Greet from './1.components/1.function/Greet';
import GreetOne from './1.components/1.function/GreetOne';
import { Named } from './1.components/1.function/Named';
import { NamedOne } from './1.components/1.function/NamedOne';


function App() {
  return (
    <div className="App">
      <Greet />
      <GreetOne />
      <Named />
      <NamedOne />
    </div>
  );
}

export default App;
