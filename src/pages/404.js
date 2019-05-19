import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const NotFound = () => {
  return (
    <Layout>
      <h1>404 Not Found</h1>
      <Link to="/">Back to Home</Link>
    </Layout>
  )
}

export default NotFound