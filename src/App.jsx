
import { Home } from './components/Home'
import { Routes, Route } from 'react-router-dom'
import { PokemonView } from './components/PokemonView'
import './index.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/pokemon-view" element={<PokemonView />} />
      </Routes>
    </> 
  )
}

export default App
