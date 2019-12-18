import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const VuePage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Using Angular with Static Sites</h1>
    <p>If vue is not installed, install it with: npm install -g @vue/cli</p>
    <p>Here are some instructions for setting up the repository:</p>
    <ol>
      <li>git init</li>
      <li>type nul > README.md && git add README.md</li>
      <li>vue create app</li>
      <li>git add .</li>
      <li>git commit -m "Initial Commit"</li>
      <li>git remote add origin https://github.com/[your username]/[project name].git</li>
      <li>git push -u origin master</li>
    </ol>
  </Layout>
)

export default VuePage
