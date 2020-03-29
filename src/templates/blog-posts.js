import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'


const BlogPost = ({data}) => {
    const post = data.markdownRemark
    return(
        <Layout>
            <h1>{post.frontmatter.title}</h1>
            <h3>{post.frontmatter.date} - {post.timeToRead} min de lectura</h3>
            <div dangerouslySetInnerHTML={{__html: post.html}} />
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
    markdownRemark(fields: {slug: { eq: $slug }}) {
            html
            timeToRead
            frontmatter {
                date
                title
            }
        }
    }
`

export default BlogPost