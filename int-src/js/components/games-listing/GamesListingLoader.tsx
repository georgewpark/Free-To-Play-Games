import { ReactElement, useContext } from 'react'
import GamesContext from '../../context/GamesContext'

const GamesListingLoader = () => {
  const { resultsPerPage } = useContext(GamesContext)

  let items: ReactElement[] = []

  for (let i = 1; i <= resultsPerPage; i++) {
    items.push(
      <div
        key={`item-${i}`}
        className='flex flex-col rounded-md border border-slate-500 bg-gradient-to-b from-slate-700 to-slate-800'
      >
        <div className='aspect-video bg-slate-500'></div>
        <div className='flex grow flex-col p-4'>
          <div className='mb-2 h-7 rounded bg-slate-500'></div>
          <div className='mb-4 h-20 rounded bg-slate-500'></div>
          <div className='mt-auto flex items-center justify-between'>
            <div className='h-7 w-16 rounded bg-slate-500'></div>
            <div className='h-7 w-7 rounded bg-slate-500'></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='animate-pulse'>
      <div className='mb-4 h-6 w-52 rounded bg-slate-500'></div>
      <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {[...items]}
      </div>
    </div>
  )
}

export default GamesListingLoader
