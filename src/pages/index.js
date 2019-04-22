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
import stripe_bg from "../assets/stripe_bg.png"
import Divider from '../components/divider'
import ButtonWrapperDouble from '../components/buttonWrapperDouble'
import ButtonWrapper from '../components/buttonWrapper'
import Pros from '../components/pros'
import { Helmet } from "react-helmet"
import favicon from "../assets/favicon.png"

const PageWrapper = styled.div`
  margin: 0;
  width: 100vw;
  background: url(${stripe_bg});
`

class Index extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <PageWrapper>
        <Helmet link={[
            {rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
          ]}>
          <meta charSet="utf-8" />
          <title>PaS Services</title>
          <meta name="description" content="agentura prace, agentura sluzieb"/>
          <meta name="keywords" content="Pas Services, Agentura PaS"/>
        </Helmet>
        <Header />
        <Slider />
        <Divider height="100px" />
        <Pros />
        <Divider height="100px" />
        <Services/>
        <ButtonWrapperDouble buttonLink="/o_nas" buttonText='viac o nás' buttonLink2="/sluzby" buttonText2='viac o našich službách' />
        <WorkTable data={data}/>
        <BlogShowcase data={data}/>
        <ButtonWrapper buttonLink="/blog" buttonText='všetky články' />
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