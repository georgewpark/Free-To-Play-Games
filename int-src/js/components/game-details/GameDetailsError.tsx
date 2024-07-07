import { useNavigate } from 'react-router-dom'
import Container from '../shared/Container'

const GameDetailsError = () => {
  const navigate = useNavigate()

  return (
    <main>
      <Container classList='flex h-screen flex-col items-center justify-center gap-5 text-center'>
        <h1 className='text-3xl text-white md:text-4xl'>
          Error retrieving game details
        </h1>
        <p className='text-lg font-light'>
          Return to the{' '}
          <button
            className='underline underline-offset-2 transition-colors hover:text-yellow-400 focus:text-yellow-400'
            onClick={() => navigate(`/`)}
          >
            games list
          </button>
          .
        </p>
      </Container>
    </main>
  )
}

export default GameDetailsError
