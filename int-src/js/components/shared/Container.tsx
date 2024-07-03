import { ReactNode } from 'react'

type ContainerProps = {
  classList?: string
  children: ReactNode
}

const Container = ({ classList, children }: ContainerProps) => {
  return <div className={`container mx-auto px-4 ${classList}`}>{children}</div>
}

export default Container
