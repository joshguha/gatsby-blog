import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

export default function Blog(props) {
  return (
    <div>
      <Layout>
      
      </Layout>
    </div>
  )
}
