import "./App.css";
import NavBar from "./components/NavBar/NavBar";
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import Inicio from "./components/pages/Inicio";
import Nosotros from "./components/pages/Nosotros";
import Contacto from "./components/pages/Contacto";
import Recetas from "./components/pages/Recetas"; 
import NotFound from "./components/pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Nosotros" element={<Nosotros/>} />
          <Route path="/Contacto" element={<Contacto/>} />
          <Route path="/Recetas" element={<Recetas/>} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {/* <ItemListContainer>
        <p>
          Greetings!
        </p>
      </ItemListContainer> */}
    </div>
  );
}

export default App;
