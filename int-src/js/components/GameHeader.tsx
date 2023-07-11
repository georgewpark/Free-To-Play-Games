import { useContext } from 'react'
import GamesContext from '../context/GamesContext'

const GameHeader = () => {
  const { currentGame } = useContext(GamesContext)

  return (
    <header className='relative h-96'>
      <div className='container mx-auto flex h-full px-4'>
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
      </div>
    </header>
  )
}

export default GameHeader
