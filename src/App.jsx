
import { Home } from './components/Home'
import { Routes, Route } from 'react-router-dom'
import { PokemonView } from './components/PokemonView'
import './index.css'
import { Login } from './components/Login'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/pokemon-view" element={<PokemonView />} />
        <Route path="/home/login" element={<Login />} />
      </Routes>
    </> 
  )
}

export default App
