import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GamesProvider } from '../context/GamesContext'
import GameDetails from './GameDetails'
import GamesListing from './GamesListing'

const FreeToPlayGames = () => {
  return (
    <GamesProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GamesListing />} />
          <Route path='*' element={<GamesListing />} />
          <Route path='/game/:gameId' element={<GameDetails />} />
        </Routes>
      </BrowserRouter>
    </GamesProvider>
  )
}

export default FreeToPlayGames
