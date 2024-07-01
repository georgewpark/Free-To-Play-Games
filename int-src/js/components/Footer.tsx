import { ExternalLinkIcon } from './Icons'

const Footer = () => {
  return (
    <footer className='mt-auto bg-gray-950'>
      <div className='container mx-auto px-4 py-4'>
        <p className='text-center font-light'>
          Game information retrieved from the{' '}
          <a
            href='https://www.freetogame.com/api-doc'
            target='_blank'
            className='relative underline underline-offset-2 transition-colors hover:text-yellow-400 focus:text-yellow-400'
          >
            FreeToGame API
            <ExternalLinkIcon classList='absolute -right-3 top-1.5 w-2' />
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
