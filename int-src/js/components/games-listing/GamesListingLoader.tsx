import { ReactElement, useContext } from 'react'
import GamesListingContext from '../../context/GamesListingContext'

const GamesListingLoader = () => {
  const { resultsPerPage } = useContext(GamesListingContext)

  let items: ReactElement[] = []

  for (let i = 1; i <= resultsPerPage; i++) {
    items.push(
      <li
        key={`item-${i}`}
        className='flex animate-pulse flex-col rounded-md border border-slate-500 bg-gradient-to-b from-slate-700 to-slate-800'
        aria-hidden='true'
      >
        <div className='aspect-video bg-slate-500'></div>
        <div className='flex grow flex-col p-4'>
          <div className='mb-2 h-7 rounded bg-slate-500'></div>
          <div className='mb-4 h-16 rounded bg-slate-500'></div>
          <div className='mt-auto flex items-center justify-between'>
            <div className='h-7 w-16 rounded bg-slate-500'></div>
            <div className='h-7 w-7 rounded bg-slate-500'></div>
          </div>
        </div>
      </li>
    )
  }

  return <>{[...items]}</>
}

export default GamesListingLoader
