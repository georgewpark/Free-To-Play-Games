import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GameDetailsAbout from '../components/game-details/GameDetailsAbout'
import GameDetailsBreadcrumbs from '../components/game-details/GameDetailsBreadcrumbs'
import GameDetailsError from '../components/game-details/GameDetailsError'
import GameDetailsHeader from '../components/game-details/GameDetailsHeader'
import GameDetailsLoader from '../components/game-details/GameDetailsLoader'
import GameDetailsRequirements from '../components/game-details/GameDetailsRequirements'
import Footer from '../components/shared/Footer'
import GameDetailsContext from '../context/GameDetailsContext'
import { apiBaseUrl, apiHost, apiKey } from '../data/ApiDetails'

const GameDetails = () => {
  const { setCurrentGame, loading, setLoading, error, setError } =
    useContext(GameDetailsContext)
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

        if (data.status === 0 || data.message) {
          document.title = `${document.title} - Error`
          setError(true)
        } else {
          document.title = `${document.title} - ${data.title}`
          setError(false)
        }
      })
      .catch(() => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })

    return () => fetchController.abort()
  }, [])

  return (
    <div aria-live='polite'>
      {error && <GameDetailsError />}
      {loading && !error && <GameDetailsLoader />}
      {!loading && !error && (
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
