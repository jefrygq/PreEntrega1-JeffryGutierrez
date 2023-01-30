import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer';
import ItemListContainer from './components/ItemListcContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <div className='container p-3'>
        <ItemListContainer greeting={'Welcome to MyTech!'} description={'Find the best in technology and receive it at your doorstep.'} />
        <ItemDetailsContainer />
      </div>
    </>
  );
}

export default App;
