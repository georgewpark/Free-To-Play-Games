import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GamesProvider } from '../context/GamesContext'
import Games from './Games'
import GameDetails from './GameDetails'

const FreeToPlayGames = () => {
  return (
    <GamesProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Games />} />
          <Route path='*' element={<Games />} />
          <Route path='/game/:gameId' element={<GameDetails />} />
        </Routes>
      </BrowserRouter>
    </GamesProvider>
  )
}

export default FreeToPlayGames
