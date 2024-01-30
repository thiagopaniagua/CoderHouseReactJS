
import './App.css'
import NavBar from './componens/NavBar'
import ItemListContainer from './componens/ItemListContainer'
import ItemDetailContainer from './componens/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './componens/Footer'


function App() {

  return (
   <BrowserRouter>
   <NavBar />
   <Routes>
    <Route path={'/'} element={<ItemListContainer />}/>
    <Route path={'/category/:id'} element={<ItemListContainer />}/>
    <Route path={'/item/:id'} element={<ItemDetailContainer />}/>
   </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
