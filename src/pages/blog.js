import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"

import blogStyles from "./blog.module.scss"

export default function BlogPage() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "Do MMMM, YYYY")
          }
        }
      }
    }
  `)

  return (
    <div>
      <Layout>
        <h1>My blog</h1>
        <ol className={blogStyles.posts}>
          {data.allContentfulBlogPost.edges.map((edge, index) => (
            <li className={blogStyles.post} key={index}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.date}</p>
              </Link>
            </li>
          ))}
        </ol>
      </Layout>
    </div>
  )
}
