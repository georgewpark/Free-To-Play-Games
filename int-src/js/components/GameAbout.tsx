import { useContext } from 'react'
import GamesContext from '../context/GamesContext'
import { ExternalLinkIcon } from './Icons'

const GameAbout = () => {
  const { currentGame } = useContext(GamesContext)

  return (
    <section className='py-10'>
      <div className='container mx-auto px-4'>
        <h2 className='mb-5 text-2xl'>
          About <span className='text-yellow-400'>{currentGame.title}</span>
        </h2>
        <div className='grid justify-items-center gap-20 lg:grid-cols-2'>
          <div>
            {currentGame.description && (
              <p className='whitespace-pre-line font-light'>
                {currentGame.description}
              </p>
            )}
            {currentGame.game_url && (
              <a
                className='relative mt-6 inline-block underline underline-offset-8 transition-colors hover:text-yellow-400 focus:text-yellow-400'
                href={currentGame.game_url}
                target='_blank'
              >
                Play {currentGame.title}
                <ExternalLinkIcon classList='absolute -right-3 top-1 w-2' />
              </a>
            )}
          </div>
          {currentGame.thumbnail && <img src={currentGame.thumbnail} alt='' />}
        </div>
      </div>
    </section>
  )
}

export default GameAbout
