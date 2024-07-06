import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GameDetailsAbout from '../components/game-details/GameDetailsAbout'
import GameDetailsBreadcrumbs from '../components/game-details/GameDetailsBreadcrumbs'
import GameDetailsHeader from '../components/game-details/GameDetailsHeader'
import GameDetailsLoader from '../components/game-details/GameDetailsLoader'
import GameDetailsRequirements from '../components/game-details/GameDetailsRequirements'
import Footer from '../components/shared/Footer'
import GamesContext from '../context/GamesContext'
import { apiBaseUrl, apiHost, apiKey } from '../data/ApiDetails'

const GameDetails = () => {
  const { setCurrentGame, loading, setLoading } = useContext(GamesContext)
  const { gameId } = useParams()

  useEffect(() => {
    const fetchController = new AbortController()
    const { signal } = fetchController

    setLoading(true)

    fetch(`${apiBaseUrl}/game?id=${gameId}`, {
      headers: {
        'X-RapidAPI-Host': apiHost,
        'X-RapidAPI-Key': apiKey
      },
      signal
    })
      .then(res => res.json())
      .then(data => {
        setCurrentGame(data)
        setLoading(false)
      })

    return () => fetchController.abort()
  }, [])

  return (
    <div aria-live='polite'>
      {loading ? (
        <GameDetailsLoader />
      ) : (
        <>
          <GameDetailsBreadcrumbs />
          <GameDetailsHeader />
          <main className='py-4 lg:py-10'>
            <GameDetailsAbout />
            <GameDetailsRequirements />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}

export default GameDetails
