import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/contacto' element={<Contacto />} />
          <Route exact path='/productos' element={<ItemListContainer />} />
          <Route exact path='/category/:category' element={<ItemListContainer />} />
          <Route exact path='/Item/:id' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// 👆 ITEMLISTCONTAINER RENDERIZA TODOS LOS PRODUCTOS (LINEA 17)
//  Y SI RECIBE UN PARÁMETRO DINÁMICO (:CATEGORY), RENDERIZA
// LA CATEGORÍA CORRESPONDIENTE, SEGUN LA LÓGICA EN EL COMPONENTE.
// EL COMPONENTE CATEGORY LO ELIMINÉ YA QUE NO HACÍA FALTA PORQUE TODO ESTABA GENERADO
// A TRAVÉS DE ITEMLISTCONTAINER

export default App;

