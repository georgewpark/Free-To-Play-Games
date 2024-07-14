import { memo } from 'react'
import Container from './Container'
import { ExternalLinkIcon } from './Icons'

const Footer = memo(() => {
  return (
    <footer className='mt-auto bg-gray-950'>
      <Container classList='py-4'>
        <p className='text-center font-light'>
          Game information retrieved from the{' '}
          <a
            href='https://www.freetogame.com/api-doc'
            target='_blank'
            className='relative whitespace-nowrap pr-3 underline underline-offset-2 transition-colors hover:text-yellow-400 focus:text-yellow-400'
          >
            FreeToGame API
            <ExternalLinkIcon classList='absolute right-0 top-1.5 w-2 h-2' />
          </a>
        </p>
      </Container>
    </footer>
  )
})

export default Footer
