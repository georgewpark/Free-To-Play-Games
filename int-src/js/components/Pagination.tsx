import { useContext, ReactElement } from 'react'
import GamesContext from '../context/GamesContext'
import { ChevronLeftIcon, ChevronRightIcon } from './Icons'

const Pagination = () => {
  const { gameItems, currentPage, setCurrentPage, resultsPerPage } =
    useContext(GamesContext)

  const totalPages = Math.ceil((gameItems.length + 1) / resultsPerPage)

  let pageButtons: ReactElement[] = []

  for (let i = 1; i <= totalPages; i++) {
    const isCurrentPageBtn = currentPage === i

    pageButtons.push(
      <li
        key={`page ${i}`}
        className={`${!isCurrentPageBtn ? `hidden` : 'flex'} md:flex`}
      >
        <button
          className={`h-8 w-8 rounded border border-slate-800 bg-slate-700 font-light leading-none transition-colors hover:bg-slate-800 hover:text-yellow-400 ${
            isCurrentPageBtn ? `bg-slate-800 !font-medium text-yellow-400` : ''
          }`}
          aria-label={`page ${i}`}
          aria-current={isCurrentPageBtn ? 'page' : false}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      </li>
    )
  }

  return (
    <>
      {gameItems.length > 0 && totalPages > 1 && (
        <nav className='mt-8' aria-label='page navigation'>
          <p className='text-center'>
            Page {currentPage} of {totalPages}
          </p>
          {pageButtons.length > 1 && (
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
              {[...pageButtons]}
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
          )}
        </nav>
      )}
    </>
  )
}

export default Pagination
