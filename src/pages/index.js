import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout data={data}>
    <SEO title="Mombo" site={data.site} />
  </Layout>
)

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    videoImage: file(name: { eq: "video" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imgParticulares: file(name: { eq: "imgParticulares" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nosotrosImage: file(name: { eq: "imagenNosotros" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
