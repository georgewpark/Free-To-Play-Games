import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import GameDetailsContext from '../../context/GameDetailsContext'
import Container from '../shared/Container'

const GameDetailsBreadcrumbs = () => {
  const navigate = useNavigate()
  const { currentGame } = useContext(GameDetailsContext)

  return (
    <nav aria-label='breadcrumbs'>
      <Container>
        <ul className='flex h-full py-5'>
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
      </Container>
    </nav>
  )
}

export default GameDetailsBreadcrumbs
