import ItemListContainer from './components/ItemListcContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Welcome to MyTech!'} description={'Find the best in technology and receive it at your doorstep.'} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
