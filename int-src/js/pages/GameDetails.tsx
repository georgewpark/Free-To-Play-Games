import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../components/game-details/Breadcrumbs'
import GameAbout from '../components/game-details/GameAbout'
import GameHeader from '../components/game-details/GameHeader'
import GameRequirements from '../components/game-details/GameRequirements'
import Footer from '../components/shared/Footer'
import Loader from '../components/shared/Loader'
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
        <Loader />
      ) : (
        <>
          <Breadcrumbs />
          <GameHeader />
          <main className='py-4 lg:py-10'>
            <GameAbout />
            <GameRequirements />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}

export default GameDetails
