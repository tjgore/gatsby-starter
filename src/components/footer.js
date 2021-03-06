import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <div>
      <p>Created by {data.site.siteMetadata.author} 2019</p>
    </div>
  )
}
export default Footer