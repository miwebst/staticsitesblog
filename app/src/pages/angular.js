import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AngularPage = () => (
  <Layout>
    <SEO title="Using Angular with Static Sites" />
    <h1>Using Angular with Static Sites</h1>
    
    <p>If angular is not installed, install it with: npm install -g @angular/cli</p>
    <p>Here are some instructions for setting up the repository.</p>
    <ol>
      <li>git init</li>
      <li>type nul > README.md && git add README.md</li>
      <li>ng new TestApp --directory app</li>
      <li>git add .</li>
      <li>git commit -m "Initial Commit"</li>
      <li>git remote add origin https://github.com/[your username]/[project name].git</li>
      <li>git push -u origin master</li>
    </ol>
    <p><a href="https://github.com/BrandonHopcraft/staticsitesangularapp">Example repository</a></p>
    <p>Then <Link to="/workflow/">setup the github workflow file</Link> with 'app/dist/testapp' as the app location</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AngularPage
