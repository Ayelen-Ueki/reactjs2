import './App.css';
import NavBar from './components/NavBar/NavBar';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <ItemListContainer>
        <p>
          Greetings!
        </p>
      </ItemListContainer> */}
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
