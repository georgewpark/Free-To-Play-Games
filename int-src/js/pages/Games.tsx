import { useEffect, useContext, useRef } from 'react'
import GamesContext from '../context/GamesContext'
import FiltersList from '../components/FiltersList'
import GamesList from '../components/GamesList'
import Pagination from '../components/Pagination'
import { apiBaseUrl, apiHost, apiKey } from '../data/ApiDetails'

const Games = () => {
  const {
    selectedPlatform,
    selectedSort,
    selectedCategory,
    gameItems,
    setGameItems,
    firstGame,
    currentPage,
    setCurrentPage,
    setLoading
  } = useContext(GamesContext)

  const initialRender = useRef(true)

  const platform = `platform=${selectedPlatform}`
  const sortBy = `&sort-by=${selectedSort}`
  const category =
    selectedCategory !== 'all' ? `&category=${selectedCategory}` : ''

  useEffect(() => {
    const fetchController = new AbortController()
    const { signal } = fetchController

    setLoading(true)

    fetch(`${apiBaseUrl}/games?${platform}${sortBy}${category}`, {
      headers: {
        'X-RapidAPI-Host': apiHost,
        'X-RapidAPI-Key': apiKey
      },
      signal
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 0) {
          setGameItems([])
        } else {
          setGameItems(data)
        }
      })
      .catch(() => setGameItems([]))
      .finally(() => {
        setLoading(false)

        if (!initialRender.current) {
          setCurrentPage(1)
        } else {
          initialRender.current = false
        }
      })

    return () => fetchController.abort()
  }, [selectedPlatform, selectedSort, selectedCategory])

  useEffect(() => {
    if (gameItems.length > 0) {
      firstGame.current?.focus()
    }
  }, [currentPage])

  return (
    <>
      <header className='pb-8 pt-12 md:pt-16'>
        <h1 className='text-center text-3xl text-white md:text-4xl'>
          Free-To-Play Games
        </h1>
      </header>
      <main>
        <div className='container mx-auto px-4 pb-10'>
          <FiltersList />
          <GamesList />
          <Pagination />
        </div>
      </main>
    </>
  )
}

export default Games
