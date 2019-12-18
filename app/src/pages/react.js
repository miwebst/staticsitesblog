import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ReactPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Using Angular with Static Sites</h1>

    <p>Here are some instructions for setting up the repository:</p>
    <ol>
      <li>git init</li>
      <li>type nul > README.md && git add README.md</li>
      <li>npx create-react-app app</li>
      <li>git add .</li>
      <li>git commit -m "Initial Commit"</li>
      <li>git remote add origin https://github.com/[your username]/[project name].git</li>
      <li>git push -u origin master</li>
    </ol>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ReactPage
