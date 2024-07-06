import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GameDetailsProvider } from '../context/GameDetailsContext'
import { GamesListingProvider } from '../context/GamesListingContext'
import GameDetails from './GameDetails'
import GamesListing from './GamesListing'

const FreeToPlayGames = () => {
  return (
    <GamesListingProvider>
      <GameDetailsProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<GamesListing />} />
            <Route path='*' element={<GamesListing />} />
            <Route path='/game/:gameId' element={<GameDetails />} />
          </Routes>
        </BrowserRouter>
      </GameDetailsProvider>
    </GamesListingProvider>
  )
}

export default FreeToPlayGames
