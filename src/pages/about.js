import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function AboutPage() {
  return (
    <div>
      <Layout>
        <h1>About</h1>
        <p>I am currently working on the KCSoc website.</p>
        <p>
          Need a developer? <Link to="/contact">Contact me</Link>
        </p>
      </Layout>
    </div>
  )
}
