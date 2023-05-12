
import NavBar from './components/NavBar';
import {BrowserRouter, Form, Route, Routes} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './components/context/CartContext';
import Cart from './components/Cart';


function App() {
  return (
<BrowserRouter>
<CartProvider> 
<NavBar/>
<Routes>
    <Route path='/' element={<ItemListContainer/>} />
    <Route path='/category/:categoryId' element= {<ItemListContainer/>}/>
    <Route path='/item/:itemId' element= {<ItemDetailContainer/>} />
    <Route path='/cart' element= {<Cart/>}/>
    <Route path='/form' element ={<Form/>} /> 
</Routes>
</CartProvider>
</BrowserRouter>
  );
}

export default App;
