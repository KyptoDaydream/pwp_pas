import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Divider from '../components/divider'
import ButtonWrapper from '../components/buttonWrapper'
import Grid from '@material-ui/core/Grid';
import stripe_bg from "../assets/stripe_bg.png"
import Footer from '../components/footer'
import Header from '../components/header'

const PostWrapper = styled.div`
  background-image: url(${stripe_bg});
`
const ServicesWrapper = styled.div `
  width: 100%;
  padding: 50px;
  position: relative;
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: calc(30% + 15px);
    bottom: 0;
    right: 15px;
    background-color: #fff;
    -webkit-box-shadow: 0 20px 40px 0 rgba(0,0,0,.05);
    box-shadow: 0 20px 40px 0 rgba(0,0,0,.05);
  }
`
const ServicesMargin = styled.div`
  max-width: 940px;
  margin: 0 auto;
  z-index: 999;
  ul {
      margin: 0;
      padding: 0;
      li {
        list-style: none;
        padding-left: 30px;
        padding-bottom: 15px;
        position: relative;
        &:before {
          content: "•";
          position: absolute;
          left: 0px;
          color: var(--main-yellow)
        } 
      }
    }
  .text_wrapper {
    position: relative;
  }  
  .MuiPaper-rounded-5 {
    border-top: 1px solid black;;
    box-shadow: none;
  }
  .MuiPaper-rounded-5:before {
    display: none;
  }
  .title_wrapper {
    position: relative;
  }
  .text_title {
    font-weight: 900;
    color: var(--main-yellow);
  }
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <PostWrapper>
    <Header blog={true}/>
    <Divider height="120px" />
    <ServicesWrapper>
        <ServicesMargin>
        <Grid container spacing={24}>
            <Grid item xs={4}></Grid>
            <Grid item xs={8} className="text_wrapper">
              <div className="title_wrapper">
              <h1 className="service_name">{frontmatter.start}</h1>
              <h1 className="services">{frontmatter.title}</h1>
              </div>
              <div
                  className="blog-post-content"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              <Divider height="70px" />
              <ButtonWrapper buttonText='Všetky články' buttonLink='/blog/' />
            </Grid>
          </Grid>
        </ServicesMargin>
      </ServicesWrapper>
      <Divider height="70px" />
      <Footer />
    </PostWrapper>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        start
        path
        title
      }
    }
  }
`