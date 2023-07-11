import { createRoot } from 'react-dom/client'
import FreeToPlayGames from './pages/FreeToPlayGames'

const container = document.querySelector('#ftp-games')
const root = container && createRoot(container)

root && root.render(<FreeToPlayGames />)
