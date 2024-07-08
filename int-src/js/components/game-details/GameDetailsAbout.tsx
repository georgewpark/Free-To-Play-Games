import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import { useContext } from 'react'
import GameDetailsContext from '../../context/GameDetailsContext'
import Container from '../shared/Container'
import { ExternalLinkIcon } from '../shared/Icons'

dayjs.extend(advancedFormat)

const GameDetailsAbout = () => {
  const { currentGame } = useContext(GameDetailsContext)

  const releaseDate = dayjs(currentGame.release_date)

  return (
    <section className='py-10'>
      <Container>
        <h2 className='mb-5 text-2xl'>
          About <span className='text-yellow-400'>{currentGame.title}</span>
        </h2>
        <div className='grid gap-20 lg:grid-cols-2'>
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
                <ExternalLinkIcon classList='absolute -right-3 top-1.5 w-2' />
              </a>
            )}
          </div>
          <div className='flex w-full flex-col gap-14'>
            <ul className='grid grid-cols-2 gap-6 text-center'>
              <li>
                <h3 className='mb-1 text-yellow-400'>Status</h3>
                <p>
                  <span
                    className={`inline-block rounded px-3 py-1.5 leading-none ${currentGame.status === 'Live' ? 'bg-lime-700' : 'bg-amber-700'}`}
                  >
                    {currentGame.status}
                  </span>
                </p>
              </li>
              <li>
                <h3 className='mb-0.5 text-yellow-400'>FTP Since</h3>
                <p className='font-light'>
                  <span className='sm:hidden'>
                    {releaseDate.format('D MMM YYYY')}
                  </span>
                  <span className='hidden sm:inline-block'>
                    {releaseDate.format('Do MMMM YYYY')}
                  </span>
                </p>
              </li>
              <li>
                <h3 className='mb-0.5 text-yellow-400'>Developer</h3>
                <p className='font-light'>{currentGame.developer}</p>
              </li>
              <li>
                <h3 className='mb-0.5 text-yellow-400'>Publisher</h3>
                <p className='font-light'>{currentGame.publisher}</p>
              </li>
            </ul>
            {currentGame.thumbnail && (
              <img src={currentGame.thumbnail} alt='' className='m-auto' />
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default GameDetailsAbout
