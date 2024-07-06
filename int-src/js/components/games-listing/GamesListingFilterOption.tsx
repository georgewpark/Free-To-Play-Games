type GamesListingFilterOptionProps = {
  label: string
  options: (string | number)[]
  currentValue?: string | number
  valueModifier?: (value: string) => string
  onFilterChange: (value: string) => void
}

const GamesListingFilterOption = ({
  label,
  options,
  currentValue,
  onFilterChange,
  valueModifier
}: GamesListingFilterOptionProps) => {
  const filterId = label.toLowerCase().replaceAll(' ', '-')

  return (
    <li className='flex flex-col'>
      <label className='mb-1.5 text-center' htmlFor={filterId}>
        {label}
      </label>
      <select
        id={filterId}
        className='cursor-pointer rounded border border-slate-800 bg-slate-700 bg-gradient-to-b from-slate-700 to-slate-800 p-1.5 text-center text-white transition-colors hover:bg-slate-800'
        value={currentValue}
        onChange={e => onFilterChange(e.target.value)}
      >
        {options.map(option => {
          const formattedValue = valueModifier
            ? valueModifier(option.toString().toLowerCase())
            : option
          return (
            <option key={option} value={formattedValue}>
              {option}
            </option>
          )
        })}
      </select>
    </li>
  )
}

export default GamesListingFilterOption
