import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import GamesListingContext from '../../context/GamesListingContext'
import { GameSummary } from '../../types/types'
import { WebBrowserIcon, WindowsIcon } from '../shared/Icons'

type GamesListingItemProps = {
  game: GameSummary
  index: number
}

const GamesListingItem = ({ game, index }: GamesListingItemProps) => {
  const { firstGame } = useContext(GamesListingContext)
  const navigate = useNavigate()

  return (
    <li
      key={game.id}
      className='group relative flex flex-col overflow-hidden rounded-md border border-slate-800 bg-slate-700 bg-gradient-to-b from-slate-700 to-slate-800 transition-colors focus-within:border-slate-50'
    >
      <div className='relative aspect-video overflow-hidden border-b border-slate-800'>
        <img
          src={game.thumbnail}
          alt=''
          className='absolute h-full w-full object-cover transition group-focus-within:saturate-150 group-hover:saturate-150'
        />
      </div>
      <div className='flex grow flex-col p-4'>
        <h2 className='text-xl transition-colors group-focus-within:text-yellow-400 group-hover:text-yellow-400'>
          {game.title}
        </h2>
        <p className='mb-2 text-sm'>
          By <span className='text-yellow-400'>{game.developer}</span>
        </p>
        <p className='mb-4 font-light leading-snug'>{game.short_description}</p>
        <div className='mt-auto flex items-center justify-between gap-1'>
          <p className='inline-block rounded bg-yellow-400 p-1.5 leading-none text-slate-900'>
            {game.genre}
          </p>
          {game.platform.split(' ')[0] === 'PC' ? (
            <WindowsIcon title='PC' classList='w-5 opacity-60' />
          ) : (
            <WebBrowserIcon title='Web Browser' classList='w-5 opacity-60' />
          )}
        </div>
        <button
          ref={index === 0 ? firstGame : null}
          className='absolute left-0 top-0 h-full w-full'
          onClick={() => navigate(`/game/${game.id}`)}
        >
          <span className='sr-only'>learn more about "{game.title}"</span>
        </button>
      </div>
    </li>
  )
}

export default GamesListingItem
