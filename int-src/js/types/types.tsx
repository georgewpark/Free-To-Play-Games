type Screenshot = {
  id: number
  image: string
}

type MinSystemReq = {
  graphics: string
  memory: string
  os: string
  processor: string
  storage: string
}

export type GameSummary = {
  developer: string
  genre: string
  id: number
  platform: string
  short_description: string
  thumbnail: string
  title: string
}

export type GameDetails = {
  description: string
  developer: string
  game_url: string
  genre: string
  id: number
  minimum_system_requirements: MinSystemReq
  platform: string
  publisher: string
  release_date: string
  screenshots: Screenshot[]
  short_description: string
  status: string
  thumbnail: string
  title: string
}
