import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import GamesContext from '../context/GamesContext'

const Breadcrumbs = () => {
  const navigate = useNavigate()
  const { currentGame } = useContext(GamesContext)

  return (
    <nav aria-label='breadcrumbs'>
      <ul className='container mx-auto flex h-full px-4 py-5'>
        <li>
          <button
            className='underline underline-offset-2 transition-colors hover:text-yellow-400 focus:text-yellow-400'
            onClick={() => navigate(`/`)}
          >
            Games
          </button>
        </li>
        <li className='font-light text-yellow-400 before:px-2.5 before:text-slate-50 before:content-["|"]'>
          {currentGame.title}
        </li>
      </ul>
    </nav>
  )
}

export default Breadcrumbs
