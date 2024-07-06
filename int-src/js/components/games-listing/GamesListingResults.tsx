import { useContext } from 'react'
import GamesListingContext from '../../context/GamesListingContext'
import GamesListingItem from './GamesListingItem'
import GamesListingLoader from './GamesListingLoader'

const GamesListingResults = () => {
  const { currentPage, resultsPerPage, gameItems, loading } =
    useContext(GamesListingContext)

  const firstItem = currentPage * resultsPerPage - resultsPerPage
  const lastItem = Math.min(gameItems.length, currentPage * resultsPerPage)

  return (
    <section aria-live='polite' aria-label='games list'>
      {loading ? (
        <GamesListingLoader />
      ) : (
        <>
          {gameItems.length > 0 ? (
            <>
              <p className='mb-4 text-center md:text-left'>
                Showing {firstItem + 1}-{lastItem} of {gameItems.length} games
              </p>
              <ul className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {gameItems.slice(firstItem, lastItem).map((game, i) => (
                  <GamesListingItem key={game.id} game={game} index={i} />
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

export default GamesListingResults
