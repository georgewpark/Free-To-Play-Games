import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from 'react'
import { Game } from '../types/types'

type GameDetailsContextType = {
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
  currentGame: Game
  setCurrentGame: Dispatch<SetStateAction<Game>>
}

type GameDetailsProviderProps = {
  children: ReactNode
}

const GameDetailsContext = createContext({} as GameDetailsContextType)

export const GameDetailsProvider = ({ children }: GameDetailsProviderProps) => {
  const [loading, setLoading] = useState(true)
  const [currentGame, setCurrentGame] = useState({} as Game)

  return (
    <GameDetailsContext.Provider
      value={{
        loading,
        setLoading,
        currentGame,
        setCurrentGame
      }}
    >
      {children}
    </GameDetailsContext.Provider>
  )
}

export default GameDetailsContext
