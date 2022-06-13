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
import CartProvider from './components/context/cartContext';
import Cart from "./components/pages/Carrito";

function App() {
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Nosotros" element={<Nosotros/>} />
          <Route path="/Contacto" element={<Contacto/>} />
          <Route path="/Recetas" element={<Recetas/>} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:category" element={<ItemDetailContainer />} />
          <Route path="/Carrito" element={<Cart/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </CartProvider>
      {/* <ItemListContainer>
        <p>
          Greetings!
        </p>
      </ItemListContainer> */}
    </div>
  );
}

export default App;
