import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import GamesContext from '../context/GamesContext'
import Breadcrumbs from '../components/Breadcrumbs'
import GameHeader from '../components/GameHeader'
import GameAbout from '../components/GameAbout'
import GameRequirements from '../components/GameRequirements'
import Loader from '../components/Loader'
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
        </>
      )}
    </div>
  )
}

export default GameDetails
