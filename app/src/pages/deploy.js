import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const DeployPage = () => (
  <Layout>
    <SEO title="Deploy" />
    <h1>If you can build it, you can deploy it!</h1>
    <p>Getting started with Static Sites is easy, but this is an advanced scenario. Here are some steps to get it right:</p>
    <ol>
      <li>Create or go to an existing Github repository (i.e. <a href="https://github.com/miwebst/staticsitesblog">This Blog</a>)
        <ul>
          <li>We recommend structuring your repository with an <i>app</i> folder and an <i>api</i> folder at the root of the repository.</li>
        </ul>
      </li>
      <li>Create a new Github Actions workflow file or start from an <a href="https://github.com/miwebst/staticsitesblog/blob/master/.github/workflows/staticsites.yml">existing one.</a>
        <ul>
          <li>In the example workflow, there is a step in the <i>azure_pages_build_and_upload_job</i> called <i>shell: bash</i>. For custom deployments, you can utilize this to specify the commands to run for building your app. For example, this blog is built on Gatsby, so we install our NPM dependencies then build.</li>
          <li>Different frameworks output artificats in different folders. Ensure that the line <i>app_artifact_location: 'app/public'</i> points to the build output location for your app.</li>
          <li>NOTE: If you created your own workflow file this is an advanced scenario. This may work incorrectly if the Jobs are not setup correctly. </li>
        </ul>
      </li>
      <li>Once you have saved your Workflow file, it will kick off a Github Action. You can view this by going to the Actions tab in your repository. If everything is configured correctly, you should see things are able to build correctly but the Static Sites job fails with an error regarding the Api Token.</li>
      <li>Now we need to get an ApiToken by registering our repository with the Static Sites service. Talk to Mitch about how to do this :)</li>
      <li>Once you have your ApiToken, go to your repository and in the Settings panel, there is a section called 'Secrets'. Add a new secret. The name should correspond to the secret defined in the workflow file. The value is the ApiToken received from the service.</li>
      <li>At this point, everything should be setup correctly and on your next Push, the Action should complete successfully.</li>
    </ol>
  </Layout>
)

export default DeployPage
