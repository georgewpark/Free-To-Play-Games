import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from 'react'
import { GameDetails } from '../types/types'

type GameDetailsContextType = {
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
  error: boolean
  setError: Dispatch<SetStateAction<boolean>>
  currentGame: GameDetails
  setCurrentGame: Dispatch<SetStateAction<GameDetails>>
}

type GameDetailsProviderProps = {
  children: ReactNode
}

const GameDetailsContext = createContext({} as GameDetailsContextType)

export const GameDetailsProvider = ({ children }: GameDetailsProviderProps) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [currentGame, setCurrentGame] = useState({} as GameDetails)

  return (
    <GameDetailsContext.Provider
      value={{
        loading,
        setLoading,
        error,
        setError,
        currentGame,
        setCurrentGame
      }}
    >
      {children}
    </GameDetailsContext.Provider>
  )
}

export default GameDetailsContext
