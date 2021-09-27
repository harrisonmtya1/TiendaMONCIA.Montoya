import './App.css';
import './componentes/NavBar';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer'

function App() {
  return (
    <div className="App">

      <NavBar></NavBar>
      <ItemListContainer greeting={"Bienvenido a Tienda MONCIA"} />
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
