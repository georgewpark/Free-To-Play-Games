import { useContext, useEffect, useRef } from 'react'
import GamesListingFilters from '../components/games-listing/GamesListingFilters'
import GamesListingHeader from '../components/games-listing/GamesListingHeader'
import GamesListingPagination from '../components/games-listing/GamesListingPagination'
import GamesListingResults from '../components/games-listing/GamesListingResults'
import Container from '../components/shared/Container'
import Footer from '../components/shared/Footer'
import GamesContext from '../context/GamesContext'
import { apiBaseUrl, apiHost, apiKey } from '../data/ApiDetails'

const GamesListing = () => {
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
      <GamesListingHeader />
      <main>
        <Container classList='pb-10'>
          <GamesListingFilters />
          <GamesListingResults />
          <GamesListingPagination />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default GamesListing
