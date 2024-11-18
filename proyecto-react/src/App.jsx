import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pelicula from './components/Pelicula'
import TiraPeliculas from './components/TiraPeliculas'
import ContenedorPublicidad from './components/ContenedorDePublicidad'
import Contador from './components/Contador'
import MiComponente from './components/MiComponente'
import Gif from './components/Gif'
import Home from './components/home'
import Contact from './components/contact'
import About from './components/About'
import Error404 from './components/Error404'
import Products from './components/Products'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FrutasVersionFuncion from './components/FrutasVersionClase'
import RickMortyFuncion from './components/RickMortyClass'


function App() {
  const [count, setCount] = useState(0)

  return (
    /*
    <>
    <Gif />
    <ContenedorPublicidad>
      <h2>Wooow! Publicidad!</h2>
    </ContenedorPublicidad>
      <TiraPeliculas />
      <Contador inicial={0} />
      <ContenedorPublicidad >
      <MiComponente />
      <ul>
    <li>Publi 1</li>
    <li>Publi 2</li>
    <li>Publi 3</li>

      </ul>

    </ContenedorPublicidad>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      
    </>
    */
   <>
   <Link to="/">Home</Link> <br />
  <Link to="/about">About</Link> <br />
  <Link to= "/contact">Contact</Link> <br />
  <Link to='/products/1'>Products</Link> <br />
  <Link to= '/frutas-version-funcion'>Frutas Version Funcion</Link> <br />
  <Link to='/rick-morty-class'>Rick y Morty class</Link>
  <hr />
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/about" element={<About />} />
   <Route path='/contact' element={<Contact />} />
   <Route path="/products/:id" element={<Products />} />
   <Route path='/frutas-version-funcion' element={<FrutasVersionFuncion />} ></Route>
   <Route path='/rick-morty-class' element={<RickMortyFuncion /> }></Route>
   <Route path='*' element={<Error404 />} />
   
   </Routes>
   
   
   </>
  )
}

export default App
