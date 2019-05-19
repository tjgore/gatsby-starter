import React from "react"
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Homepage" />
      <h1>Hello There!</h1>
      <h2>Welcome to this Awesome Gatsby Website</h2>
      <p>My name is John Doe and I am a Full Stack Developer based in D.C</p>
    </Layout>
  )
}

export default IndexPage 