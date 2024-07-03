import { useContext } from 'react'
import GamesContext from '../../context/GamesContext'
import Container from '../shared/Container'

const GameRequirements = () => {
  const { currentGame } = useContext(GamesContext)

  const hasMinimumRequirements =
    currentGame.minimum_system_requirements &&
    !Object.values(currentGame.minimum_system_requirements).every(
      req => req === null
    )

  const hasRequirement = (requirement: string) => {
    return requirement && requirement !== '?'
  }

  return (
    <>
      {hasMinimumRequirements && (
        <section className='py-10'>
          <Container>
            <h2 className='mb-5 text-2xl'>System Requirements</h2>
            <ul className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-8'>
              {hasRequirement(currentGame.minimum_system_requirements.os) && (
                <li>
                  <h3 className='mb-0.5 text-yellow-400'>Operating System</h3>
                  <p className='font-light'>
                    {currentGame.minimum_system_requirements.os}
                  </p>
                </li>
              )}
              {hasRequirement(
                currentGame.minimum_system_requirements.graphics
              ) && (
                <li>
                  <h3 className='mb-0.5 text-yellow-400'>Graphics Card</h3>
                  <p className='font-light'>
                    {currentGame.minimum_system_requirements.graphics}
                  </p>
                </li>
              )}
              {hasRequirement(
                currentGame.minimum_system_requirements.processor
              ) && (
                <li>
                  <h3 className='mb-0.5 text-yellow-400'>Processor</h3>
                  <p className='font-light'>
                    {currentGame.minimum_system_requirements.processor}
                  </p>
                </li>
              )}
              {hasRequirement(
                currentGame.minimum_system_requirements.memory
              ) && (
                <li>
                  <h3 className='mb-0.5 text-yellow-400'>Memory</h3>
                  <p className='font-light'>
                    {currentGame.minimum_system_requirements.memory}
                  </p>
                </li>
              )}
              {hasRequirement(
                currentGame.minimum_system_requirements.storage
              ) && (
                <li>
                  <h3 className='mb-0.5 text-yellow-400'>Storage</h3>
                  <p className='font-light'>
                    {currentGame.minimum_system_requirements.storage}
                  </p>
                </li>
              )}
            </ul>
          </Container>
        </section>
      )}
    </>
  )
}

export default GameRequirements
