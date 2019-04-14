import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Header from "../components/header"
import Slider from "../components/slider"
import BlogShowcase from "../components/blogshowcase"
import WorkTable from '../components/workTable';
import Services from '../components/services'
import Footer from '../components/footer'
import "../styles/global.css"

const PageWrapper = styled.div`
  margin: 0;
  width: 100vw;
`

class Index extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <PageWrapper>
        <Header />
        <Slider />
        <WorkTable data={data}/>
        <Services/>
        <BlogShowcase data={data}/>
        <Footer />
      </PageWrapper>
    )
  }
}  

export default Index

export const pageQuery = graphql`
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
`