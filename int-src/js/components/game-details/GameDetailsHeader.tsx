import { useContext, useRef, useState } from 'react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { Autoplay, EffectFade } from 'swiper/modules'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import GameDetailsContext from '../../context/GameDetailsContext'
import Container from '../shared/Container'
import { PauseIcon, PlayIcon } from '../shared/Icons'

const GameDetailsHeader = () => {
  const { currentGame } = useContext(GameDetailsContext)
  const [pauseAutoplay, setPauseAutoplay] = useState(false)
  const swiperRef = useRef<SwiperRef>(null)

  const hasScreenshot = currentGame.screenshots[0]?.image
  const hasMultipleScreenshots = currentGame.screenshots?.length > 1

  const toggleCarouselAutoplay = () => {
    if (pauseAutoplay) {
      // Resume autoplay
      swiperRef?.current?.swiper?.autoplay?.start()
      setPauseAutoplay(false)
    } else {
      // Pause autoplay
      swiperRef?.current?.swiper?.autoplay?.stop()
      setPauseAutoplay(true)
    }
  }

  return (
    <header className='h-80 translate-x-0 lg:h-96'>
      <Container classList='relative flex h-full'>
        <div className='fixed inset-0 -z-10 after:absolute after:inset-0 after:z-10 after:bg-black after:opacity-75'>
          {hasScreenshot ? (
            <Swiper
              ref={swiperRef}
              autoplay={{
                delay: 3000
              }}
              effect={'fade'}
              observer={true}
              modules={[Autoplay, EffectFade]}
              className='h-full w-full'
            >
              {currentGame.screenshots.map(screenshot => (
                <SwiperSlide key={screenshot.id}>
                  <img
                    src={screenshot.image}
                    alt=''
                    className='h-full w-full object-cover'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <img
              src={currentGame.thumbnail}
              alt=''
              className='h-full w-full object-cover'
            />
          )}
        </div>
        <h1 className='m-auto text-center text-4xl text-white lg:text-6xl'>
          {currentGame.title}
        </h1>
        {hasMultipleScreenshots && (
          <button
            className='absolute left-4 top-4 flex items-center gap-1 rounded border-2 border-gray-400 bg-gray-900/75 px-2.5 py-1.5 text-xs font-light leading-tight text-gray-200 transition-colors hover:border-gray-300 hover:bg-gray-900 hover:text-gray-100'
            onClick={toggleCarouselAutoplay}
          >
            <span>
              <span>{pauseAutoplay ? 'Resume' : 'Pause'}</span> Image Autoplay
            </span>
            <span className='hidden lg:block'>
              {pauseAutoplay ? (
                <PlayIcon classList='w-4 h-4' />
              ) : (
                <PauseIcon classList='w-4 h-4' />
              )}
            </span>
          </button>
        )}
      </Container>
    </header>
  )
}

export default GameDetailsHeader
