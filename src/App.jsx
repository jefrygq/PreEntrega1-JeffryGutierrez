import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Welcome to MyTech!'} description={'Find the best in technology and receive it at your doorstep.'} />} />
          <Route path='/product/:id' element={<ItemDetailsContainer/>} />
          <Route path='/category/:idCategory' element={<ItemListContainer/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
