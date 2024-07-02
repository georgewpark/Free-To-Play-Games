const Loader = () => {
  return (
    <div className='fixed left-0 right-0 top-0 z-10 flex h-screen flex-col items-center justify-center gap-4'>
      <h1 className='sr-only'>Loading</h1>
      <div className='h-14 w-14 animate-spin rounded-full border-4 border-white border-t-transparent'></div>
    </div>
  )
}

export default Loader
