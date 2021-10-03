import './App.css';
import './componentes/NavBar';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import RouterApp from './componentes/RouterApp'

function App() {
  return (
    <div className="App">

      <NavBar></NavBar>
      <RouterApp/>
    </div>
  );
}

export default App;
