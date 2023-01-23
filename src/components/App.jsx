import './App.css';
import ItemCount from './ItemCount/ItemCount';
import ItemListContainer from './ItemListcContainer/ItemListContainer';
import NavBar from './NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <div className='container p-3'>
        <ItemListContainer greeting={'Welcome to MyTech!'} description={'Find the best in technology and receive it at your doorstep.'} />
      </div>
    </>
  );
}

export default App;
