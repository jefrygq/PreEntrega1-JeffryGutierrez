import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';
import { DarkModeProvider } from './context/DarkmodeContext';
// import { loadDB } from './firebase/firebase';

function App() {
  // loadDB();

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <DarkModeProvider>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/product/:id' element={<ItemDetailsContainer/>} />
              <Route path='/category/:categoryName' element={<ItemListContainer/>} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </DarkModeProvider>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
