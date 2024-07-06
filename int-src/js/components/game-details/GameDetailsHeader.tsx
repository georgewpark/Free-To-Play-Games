import { useContext } from 'react'
import GameDetailsContext from '../../context/GameDetailsContext'
import Container from '../shared/Container'

const GameDetailsHeader = () => {
  const { currentGame } = useContext(GameDetailsContext)

  return (
    <header className='relative h-96'>
      <Container classList='flex h-full'>
        <div className='absolute inset-0 -z-10 after:absolute after:inset-0 after:bg-black after:opacity-75'>
          <img
            src={
              (currentGame.screenshots && currentGame.screenshots[0]?.image) ||
              currentGame.thumbnail
            }
            alt=''
            className='h-full w-full object-cover'
          />
        </div>
        <h1 className='m-auto text-center text-4xl text-white md:text-6xl'>
          {currentGame.title}
        </h1>
      </Container>
    </header>
  )
}

export default GameDetailsHeader
