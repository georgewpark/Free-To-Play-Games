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

type GamesListingContextType = {
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
}

type GamesListingProviderProps = {
  children: ReactNode
}

const GamesListingContext = createContext({} as GamesListingContextType)

export const GamesListingProvider = ({
  children
}: GamesListingProviderProps) => {
  const [gameItems, setGameItems] = useState<Game[]>([])
  const [selectedPlatform, setSelectedPlatform] = useState('all')
  const [selectedSort, setSelectedSort] = useState('relevance')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [resultsPerPage, setResultsPerPage] = useState(40)
  const [loading, setLoading] = useState(true)
  const firstGame = useRef<HTMLButtonElement>(null)

  return (
    <GamesListingContext.Provider
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
        resultsPerPage,
        setResultsPerPage,
        currentPage,
        setCurrentPage,
        loading,
        setLoading
      }}
    >
      {children}
    </GamesListingContext.Provider>
  )
}

export default GamesListingContext
