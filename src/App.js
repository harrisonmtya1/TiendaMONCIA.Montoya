import './App.css';
import './componentes/NavBar';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer'

function App() {
  return (
    <div className="App">

      <NavBar></NavBar>
      <ItemListContainer greeting={"Bienvenido a Tienda MONCIA"} />
    </div>
  );
}

export default App;
