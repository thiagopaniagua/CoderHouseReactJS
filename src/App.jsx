import { useState } from 'react'
import './App.css'
import NavBar from './componens/NavBar'
import ItemListContainer from './componens/itemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <NavBar/>
   <ItemListContainer greeting={"Página en construcción"}/>
   </>
  )
}

export default App
