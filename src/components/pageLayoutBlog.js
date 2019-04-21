import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import BlogShowcaseFull from './blogshowcaseFull';

const ServicesWrapper = styled.div `
  width: 100%;
  padding: 0px 50px 50px 50px;
  position: relative;
  }
`
const ServicesMargin = styled.div`
  max-width: 940px;
  margin: 0 auto;
  z-index: 999;
`
export default () => (
  <StaticQuery
    query={graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___start] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              title
              thumbnail
              space
              city
              position
              type
            }
          }
        }
      }
    }
    `}
    render={data => (
      <ServicesWrapper>
        <ServicesMargin>
          <BlogShowcaseFull data={data}/>
        </ServicesMargin>
      </ServicesWrapper>
    )}
  />
)
