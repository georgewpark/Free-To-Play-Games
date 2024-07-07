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
      <p className='mb-4 text-center empty:hidden md:text-left'>
        {loading && (
          <>
            Loading games<span aria-hidden='true'>...</span>
          </>
        )}
        {!loading && gameItems.length > 0 && (
          <>
            Showing {firstItem + 1}-{lastItem} of {gameItems.length} games
          </>
        )}
      </p>
      <ul className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {loading && <GamesListingLoader />}
        {!loading &&
          gameItems.length > 0 &&
          gameItems
            .slice(firstItem, lastItem)
            .map((game, i) => (
              <GamesListingItem key={game.id} game={game} index={i} />
            ))}
        {!loading && gameItems.length === 0 && (
          <li className='col-span-full text-center text-xl'>
            No games found for selected filters.
          </li>
        )}
      </ul>
    </section>
  )
}

export default GamesListingResults
