import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AngularPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi this is a page about Angular!</h1>
    <p>Here are some instructions for setting up the repository.</p>
    <ol>
      <li>git init</li>
      <li>git add README.md</li>
      <li>ng new TestApp --directory app</li>
      <li>git add .</li>
      <li>git commit -m "Initial Commit"</li>
      <li>git remote add origin https://github.com/miwebst/angularapp.git</li>
      <li>git push -u origin master</li>
    </ol>
    <p>Then setup the github workflow file with 'app/dist/testapp' as the app location</p>
  </Layout>
)

export default AngularPage
