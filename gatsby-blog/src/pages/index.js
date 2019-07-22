import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import styled from 'styled-components'

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  margin-bottom: 10px;
  color: #666;
`

export default ({ data }) => {
  console.log(data);

  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h1>Jordi's thoughts...</h1>
        {
          data.allMarkdownRemark.edges.map(({node}) => (
            <div key={node.id}>
              <BlogLink to={node.fields.slug }>
                <BlogTitle>{node.frontmatter.title} - {node.frontmatter.date}</BlogTitle>
              </BlogLink>
              <p>{node.excerpt}</p>
            </div>
          ))
        }
      </div>


      {/* <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}

      <Link to="/page-2/">Go to page 2 </Link>
      &nbsp;
      <Link to="/page-3/">Go to page 3</Link>
      <div className=""><br/></div>
      <h4>Number of thoughts to date: { data.allMarkdownRemark.totalCount }</h4>
    </Layout>
  )
}

// export default IndexPage

export const query = graphql`
  query{
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
          excerpt
        }
      }
    totalCount
    }
  }
`
