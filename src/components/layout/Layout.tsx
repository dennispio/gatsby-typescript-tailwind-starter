import React, { ReactNode } from "react"
import Footer from "@components/footer/Footer"

import "./Layout.scss"

interface ILayoutProps {
  children: ReactNode
}

const Layout = ({ children }: ILayoutProps): JSX.Element => {
  return (
    <>
      <main>{children}</main>
      <Footer>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsum
        libero doloremque eaque atque iusto temporibus sit repellat eum
        provident. Amet inventore voluptate libero itaque quasi cumque accusamus
        suscipit esse.
      </Footer>
    </>
  )
}

export default Layout
