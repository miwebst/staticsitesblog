import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to the Blog!</h1>
    <p>This page is pretty meta...but you should try out static sites!</p>
    <p>What are you looking for?</p>
    <div>
      <Link to="/static/">Working with Purely Static Sites</Link>
    </div>
    <div>
      <Link to="/angular/">Working with Angular</Link>
    </div>
    <div>
      <Link to="/react/">Working with React</Link>
    </div>
    <div>
      <Link to="/vue/">Working with Vue</Link>
    </div>
    <div>
      <Link to="/deploy/">Advanced Deployment Options</Link>
    </div>
    <div></div>
  </Layout>
)

export default IndexPage
