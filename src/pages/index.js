import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>Lista de articulos</h1>
    <h2>{data.allMarkdownRemark.totalCount} artículos</h2>
    {
      data.allMarkdownRemark.edges.map(post=> (
        <div key={post.node.id}>
          <h2>{post.node.frontmatter.title}</h2>
          <h4>{post.node.frontmatter.date} - {post.node.timeToRead} min de lectura</h4>
          <p>{post.node.excerpt}</p>
          <Link to={post.node.fields.slug}>Leer más...</Link>
        </div>
      ))
    }
  </Layout>
)

export const query = graphql`
  query {
  allMarkdownRemark {
    totalCount
    edges {
      node {
        id
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          date
        }
        timeToRead
      }
    }
  }
}
`

export default IndexPage
