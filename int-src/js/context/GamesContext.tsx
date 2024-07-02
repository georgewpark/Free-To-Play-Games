import {
  createContext,
  Dispatch,
  ReactNode,
  RefObject,
  SetStateAction,
  useRef,
  useState
} from 'react'
import { Game } from '../types/types'

type GamesContextType = {
  gameItems: Game[]
  setGameItems: Dispatch<SetStateAction<Game[]>>
  firstGame: RefObject<HTMLButtonElement>
  selectedPlatform: string
  setSelectedPlatform: Dispatch<SetStateAction<string>>
  selectedSort: string
  setSelectedSort: Dispatch<SetStateAction<string>>
  selectedCategory: string
  setSelectedCategory: Dispatch<SetStateAction<string>>
  currentPage: number
  setCurrentPage: Dispatch<SetStateAction<number>>
  resultsPerPage: number
  setResultsPerPage: Dispatch<SetStateAction<number>>
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
  currentGame: Game
  setCurrentGame: Dispatch<SetStateAction<Game>>
}

type GamesProviderProps = {
  children: ReactNode
}

const GamesContext = createContext({} as GamesContextType)

export const GamesProvider = ({ children }: GamesProviderProps) => {
  const [gameItems, setGameItems] = useState<Game[]>([])
  const [selectedPlatform, setSelectedPlatform] = useState('all')
  const [selectedSort, setSelectedSort] = useState('relevance')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [resultsPerPage, setResultsPerPage] = useState(40)
  const [loading, setLoading] = useState(true)
  const [currentGame, setCurrentGame] = useState({} as Game)
  const firstGame = useRef<HTMLButtonElement>(null)

  return (
    <GamesContext.Provider
      value={{
        gameItems,
        setGameItems,
        firstGame,
        selectedPlatform,
        setSelectedPlatform,
        selectedSort,
        setSelectedSort,
        selectedCategory,
        setSelectedCategory,
        currentPage,
        setCurrentPage,
        resultsPerPage,
        setResultsPerPage,
        loading,
        setLoading,
        currentGame,
        setCurrentGame
      }}
    >
      {children}
    </GamesContext.Provider>
  )
}

export default GamesContext
