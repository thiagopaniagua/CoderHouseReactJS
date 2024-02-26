
import './App.css'
import NavBar from './componens/NavBar'
import ItemListContainer from './componens/ItemListContainer'
import ItemDetailContainer from './componens/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './componens/Footer'
import Cart from './componens/Cart'
import CartContextProvider from './componens/context/CartContext'
import CheckOut from './componens/CheckOut'




function App() {

  return (
    <CartContextProvider>
   <BrowserRouter>
   <NavBar />
   <Routes>
    <Route path={'/'} element={<ItemListContainer />}/>
    <Route path={'/category/:id'} element={<ItemListContainer />}/>
    <Route path={'/item/:id'} element={<ItemDetailContainer />}/>
    <Route path={'/cart'} element={<Cart />}/>
    <Route path={'/checkout'} element={<CheckOut />}/>
   </Routes>
    <Footer/>
    </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
