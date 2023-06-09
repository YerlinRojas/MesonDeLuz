
import NavBar from './components/NavBar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './components/context/CartContext';
import Cart from './components/Cart';
import Home from './components/Home';


function App() {
  return (
<BrowserRouter>
<CartProvider> 
<NavBar/>

<Routes>
<Route path='/' element={<Home/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/category/:categoryId' element= {<ItemListContainer/>}/>
    <Route path='/item/:itemId' element= {<ItemDetailContainer/>} />
    <Route path='/cart' element= {<Cart/>}/>
</Routes>
</CartProvider>
</BrowserRouter>
  );
}

export default App;
