import React, { ReactNode } from "react"

interface ILayoutProps {
  children: ReactNode
}

const Footer = ({ children }: ILayoutProps): JSX.Element => {
  return (
    <footer>
      <h5>Footer Content</h5>
      {children}
    </footer>
  )
}

export default Footer
