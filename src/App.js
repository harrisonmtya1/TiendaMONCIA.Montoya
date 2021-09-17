import logo from './logo.svg';
import './App.css';
import './componentes/NavBar';
import NavBar from './componentes/NavBar';
import Producto from './componentes/Producto';

function App() {
  return (
    <div className="App">
      
        <NavBar></NavBar>
        <Producto/>
       
    </div>
  );
}

export default App;
