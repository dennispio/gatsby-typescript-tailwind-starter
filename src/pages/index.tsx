import React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout/Layout"
import Seo from "../components/seo/Seo"

interface ISiteDataProps {
  frontmatter: IFrontmatterProps
  html: string
}

interface IFrontmatterProps {
  seoTitle: string
  seoDescription: string
}

interface IDataProps {
  siteData: ISiteDataProps
}

export interface IIndexProps {
  data: IDataProps
}

const IndexPage = ({
  data: {
    siteData: {
      frontmatter: { seoDescription, seoTitle },
      html,
    },
  },
}: IIndexProps): JSX.Element => {
  return (
    <Layout>
      <Seo title={seoTitle} description={seoDescription} />
      <p
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["auto", "png"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
      </p>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query imprintPage {
    siteData: markdownRemark(frontmatter: { pageKey: { eq: "page_index" } }) {
      frontmatter {
        seoTitle
        seoDescription
      }
      html
    }
  }
`
