import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Game } from '../types/types'
import GamesContext from '../context/GamesContext'
import { WindowsIcon, WebBrowserIcon } from './Icons'

type GameItemProps = {
  game: Game
  index: number
}

const GameItem = ({ game, index }: GameItemProps) => {
  const { firstGame } = useContext(GamesContext)
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
        <h2 className='mb-2 text-xl transition-colors group-focus-within:text-yellow-400 group-hover:text-yellow-400'>
          {game.title}
        </h2>
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
          className='absolute inset-0'
          onClick={() => navigate(`/game/${game.id}`)}
        >
          <span className='sr-only'>learn more about "{game.title}"</span>
        </button>
      </div>
    </li>
  )
}

export default GameItem
