import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"

const NotFoundPage = ({ data }) => (
  <div>
    <SEO title="404: Not found" site={data.site} />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
)

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

export default NotFoundPage
