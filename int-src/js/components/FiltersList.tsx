import { useContext } from 'react'
import GamesContext from '../context/GamesContext'
import {
  platformOptions,
  sortOptions,
  categoryOptions,
  resultsPerPageOptions
} from '../data/FilterOptions'
import FilterOption from './FilterOption'

const FiltersList = () => {
  const {
    selectedPlatform,
    setSelectedPlatform,
    selectedSort,
    setSelectedSort,
    selectedCategory,
    setSelectedCategory,
    setCurrentPage,
    resultsPerPage,
    setResultsPerPage
  } = useContext(GamesContext)

  return (
    <section className='pb-9' aria-label='games filter options'>
      <ul className='mx-auto grid max-w-4xl grid-cols-2 gap-x-4 gap-y-3 md:grid-cols-4 lg:gap-x-9'>
        <FilterOption
          label={'Sort By'}
          options={sortOptions}
          currentValue={selectedSort}
          valueModifier={(value: string) => value.replaceAll(' ', '-')}
          onFilterChange={(value: string) => setSelectedSort(value)}
        />
        <FilterOption
          label={'Platform'}
          options={platformOptions}
          currentValue={selectedPlatform}
          valueModifier={(value: string) => value.split(' ')[0]}
          onFilterChange={(value: string) => setSelectedPlatform(value)}
        />
        <FilterOption
          label={'Category'}
          options={categoryOptions}
          currentValue={selectedCategory}
          valueModifier={(value: string) => value.replaceAll(' ', '-')}
          onFilterChange={(value: string) => setSelectedCategory(value)}
        />
        <FilterOption
          label={'Results Per Page'}
          options={resultsPerPageOptions}
          currentValue={resultsPerPage}
          onFilterChange={(value: string) => {
            setCurrentPage(1)
            setResultsPerPage(parseInt(value))
          }}
        />
      </ul>
    </section>
  )
}

export default FiltersList
