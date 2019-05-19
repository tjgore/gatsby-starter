import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            Title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
  `)

  return (
    <Layout>
      <h1>Blog</h1>
      <p>Check out our latest post about trends in tech</p>
      <ol>
      { data.allMarkdownRemark.edges.map((content, index) => {
        return (
          <li key={index}>
            <Link to={`/blog/${content.node.fields.slug}`}>
            <h2>{content.node.frontmatter.Title}</h2>
            <p>{content.node.frontmatter.date}</p>
            </Link>
          </li>
        )
      }) }
      </ol>
    </Layout>
  )
}

export default BlogPage