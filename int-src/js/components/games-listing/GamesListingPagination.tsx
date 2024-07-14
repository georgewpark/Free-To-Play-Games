import { useContext, useMemo } from 'react'
import GamesListingContext from '../../context/GamesListingContext'
import { ChevronLeftIcon, ChevronRightIcon } from '../shared/Icons'

const GamesListingPagination = () => {
  const { gameItems, currentPage, setCurrentPage, resultsPerPage, loading } =
    useContext(GamesListingContext)

  const totalPages = useMemo(
    () => Math.ceil((gameItems.length + 1) / resultsPerPage),
    [gameItems, resultsPerPage]
  )

  const showPagination = !loading && gameItems.length > 0 && totalPages > 1

  return (
    <>
      {showPagination && (
        <nav className='mt-8' aria-label='page navigation'>
          <p className='text-center'>
            Page {currentPage} of {totalPages}
          </p>
          <ul className='mt-3 flex justify-center gap-1.5'>
            {currentPage > 1 && (
              <li>
                <button
                  aria-label={`previous page (page ${currentPage - 1})`}
                  className={`flex h-8 w-8 rounded border border-slate-800 bg-slate-700 leading-none transition-colors hover:bg-slate-800 hover:text-yellow-400`}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  <ChevronLeftIcon classList='m-auto w-3' />
                </button>
              </li>
            )}
            {[...Array(totalPages)].map((item, i) => {
              const pageIndex = i + 1
              const isCurrentPageBtn = currentPage === pageIndex

              return (
                <li
                  key={`page ${pageIndex}`}
                  className={`${!isCurrentPageBtn ? `hidden` : 'flex'} md:flex`}
                >
                  <button
                    className={`h-8 w-8 rounded border border-slate-800 bg-slate-700 font-light leading-none transition-colors hover:bg-slate-800 hover:text-yellow-400 ${
                      isCurrentPageBtn
                        ? `bg-slate-800 !font-medium text-yellow-400`
                        : ''
                    }`}
                    aria-label={`page ${pageIndex}`}
                    aria-current={isCurrentPageBtn ? 'page' : false}
                    onClick={() => setCurrentPage(pageIndex)}
                  >
                    {pageIndex}
                  </button>
                </li>
              )
            })}
            {currentPage < totalPages && (
              <li>
                <button
                  aria-label={`next page (page ${currentPage + 1})`}
                  className={`h-8 w-8 rounded border border-slate-800 bg-slate-700 leading-none transition-colors hover:bg-slate-800 hover:text-yellow-400`}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  <ChevronRightIcon classList='m-auto w-3' />
                </button>
              </li>
            )}
          </ul>
        </nav>
      )}
    </>
  )
}

export default GamesListingPagination
