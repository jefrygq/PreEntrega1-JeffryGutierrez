import './App.css';
import ItemCount from './ItemCount/ItemCount';
import NavBar from './NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <ItemCount initialValue={1} stock={10} />
    </>
  );
}

export default App;
