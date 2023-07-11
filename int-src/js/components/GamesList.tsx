import { useContext } from 'react'
import GamesContext from '../context/GamesContext'
import GridSkeleton from './GridSkeleton'
import GameItem from '../components/GameItem'

const GamesList = () => {
  const { currentPage, resultsPerPage, gameItems, loading } =
    useContext(GamesContext)

  const firstItem = currentPage * resultsPerPage - resultsPerPage
  const lastItem = Math.min(gameItems.length + 1, currentPage * resultsPerPage)

  return (
    <section aria-live='polite' aria-label='games list'>
      {loading ? (
        <GridSkeleton />
      ) : (
        <>
          {gameItems.length > 0 ? (
            <>
              <p className='mb-4 text-center md:text-left'>
                Showing {firstItem + 1}-{lastItem} of {gameItems.length + 1}{' '}
                games
              </p>
              <ul className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {gameItems.slice(firstItem, lastItem).map(game => (
                  <GameItem key={game.id} game={game} />
                ))}
              </ul>
            </>
          ) : (
            <p className='text-center text-xl'>
              No games found for selected filters.
            </p>
          )}
        </>
      )}
    </section>
  )
}

export default GamesList
