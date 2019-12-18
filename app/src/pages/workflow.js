import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const blockCodeStyle = {
    display:'block',
    whiteSpace:'pre-wrap'
}

const boilerPlateYaml = `name: Azure Pages CI
on:
  push:
    branches:
    - master
  pull_request:
    types: [opened, synchronize, reopened, closed]
    branches:
    - master

jobs:
  azure_pages_build_and_upload_job:
    if: github.event_name == 'push' || (github.event_name == 'pull_request' && github.event.action != 'closed')
    runs-on: ubuntu-latest
    name: Azure Pages Build And Deploy
    steps:
    - uses: actions/checkout@v1
    - shell: bash
      run: *build_commands
    - uses: joslinmicrosoft/staticsitesaction@master
      with:
        azure_pages_api_token: \${{ secrets.AZURE_PAGES_API_TOKEN_CANARY }}
        action: 'upload'
        app_artifact_location: *app_dir
        api_artifact_location: ''
  
  azure_pages_close_pr_job:
    if: github.event_name == 'pull_request' && github.event.action == 'closed'
    runs-on: ubuntu-latest
    name: Azure Pages Close Pull Request Job
    steps:
    - uses: joslinmicrosoft/staticsitesaction@master
      with:
        azure_pages_api_token: \${{ secrets.AZURE_PAGES_API_TOKEN_CANARY }}
        action: 'close'`

const exampleAnchors = `&build_commands |
  cd app
  npm install
  npx gatsby build

&app_dir app/public`

const workflowPage = () => (
  <Layout>
    <SEO title="Creating a workflow yaml file" />
    <h1>Creating a workflow yaml file</h1>
    
    <p>The yaml is mostly prebuilt, but it needs 2 anchors to give specifics on how to build the application</p>
    <p>necessary anchors:</p>
    <ol>
      <li>build_instructions: the cmd commands to build your application, starting from the root of the project</li>
      <li>build_dir:the relative path from the root of the project to the built app directory</li>
    </ol>
    <p>
        example anchors for gatsby:
        <code style={blockCodeStyle}>{exampleAnchors}</code></p>
    <p>
        The boilerplate code that should go below that is:
        <code style={blockCodeStyle}>{boilerPlateYaml}</code>
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default workflowPage
