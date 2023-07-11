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

export type Game = {
  id: number
  title: string
  thumbnail: string
  developer: string
  short_description: string
  description: string
  game_url: string
  genre: string
  platform: string
  publisher: string
  release_date: string
  screenshots: Screenshot[]
  minimum_system_requirements: MinSystemReq
}
