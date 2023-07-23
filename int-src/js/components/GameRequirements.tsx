import { useContext } from 'react'
import GamesContext from '../context/GamesContext'

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
          <div className='container mx-auto px-4'>
            <h2 className='mb-5 text-2xl'>System Requirements</h2>
            <ul className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-8'>
              {hasRequirement(currentGame.minimum_system_requirements.os) && (
                <li>
                  <h3 className='mb-0.5 text-yellow-400'>Operating System</h3>
                  <span className='font-light leading-tight'>
                    {currentGame.minimum_system_requirements.os}
                  </span>
                </li>
              )}
              {hasRequirement(
                currentGame.minimum_system_requirements.graphics
              ) && (
                <li>
                  <h3 className='mb-0.5 text-yellow-400'>Graphics Card</h3>
                  <span className='font-light leading-tight'>
                    {currentGame.minimum_system_requirements.graphics}
                  </span>
                </li>
              )}
              {hasRequirement(
                currentGame.minimum_system_requirements.processor
              ) && (
                <li>
                  <h3 className='mb-0.5 text-yellow-400'>Processor</h3>
                  <span className='font-light leading-tight'>
                    {currentGame.minimum_system_requirements.processor}
                  </span>
                </li>
              )}
              {hasRequirement(
                currentGame.minimum_system_requirements.memory
              ) && (
                <li>
                  <h3 className='mb-0.5 text-yellow-400'>Memory</h3>
                  <span className='font-light leading-tight'>
                    {currentGame.minimum_system_requirements.memory}
                  </span>
                </li>
              )}
              {hasRequirement(
                currentGame.minimum_system_requirements.storage
              ) && (
                <li>
                  <h3 className='mb-0.5 text-yellow-400'>Storage</h3>
                  <span className='font-light leading-tight'>
                    {currentGame.minimum_system_requirements.storage}
                  </span>
                </li>
              )}
            </ul>
          </div>
        </section>
      )}
    </>
  )
}

export default GameRequirements
