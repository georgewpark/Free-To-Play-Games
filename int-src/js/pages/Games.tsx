import { useContext, useEffect, useRef } from 'react'
import FiltersList from '../components/games-listing/FiltersList'
import GamesList from '../components/games-listing/GamesList'
import Pagination from '../components/games-listing/Pagination'
import Container from '../components/shared/Container'
import Footer from '../components/shared/Footer'
import GamesContext from '../context/GamesContext'
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
        <Container>
          <h1 className='text-center text-3xl text-white md:text-4xl'>
            Free-To-Play Games
          </h1>
        </Container>
      </header>
      <main>
        <Container classList='pb-10'>
          <FiltersList />
          <GamesList />
          <Pagination />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default Games
