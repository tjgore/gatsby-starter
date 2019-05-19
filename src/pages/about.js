import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
  return(
    <Layout>
      <h1>About Me</h1>
      <h2>I love build app. I am always build cool apps for clients</h2>
      <p>Need a developer? <Link to="/contact">Contact me</Link></p>
    </Layout>
  )
}

export default AboutPage