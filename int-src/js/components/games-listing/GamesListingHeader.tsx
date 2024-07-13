import Container from '../shared/Container'

const GamesListingHeader = () => {
  return (
    <header>
      <Container classList='pb-8 pt-12 md:pt-16'>
        <h1 className='text-center text-3xl text-white md:text-4xl'>
          Free-To-Play Games
        </h1>
      </Container>
    </header>
  )
}

export default GamesListingHeader
