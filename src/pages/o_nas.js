import React from "react"
import styled from "styled-components"
import Header from "../components/header"
import "../styles/global.css"
import stripe_bg from "../assets/stripe_bg.png"
import Divider from '../components/divider'
import PageLayoutAbout from '../components/pageLayoutAbout'
import TitleImage from '../components/titleImage'
import Footer from '../components/footer'

const PageWrapper = styled.div`
  margin: 0;
  width: 100vw;
  background: url(${stripe_bg});
`

class PageAbout extends React.Component {
  render() {
    return (
      <PageWrapper>
        <Header />
        <TitleImage componentClass="about_us" title="Stabilný partner pre Vaše podnikanie"/>
        <Divider height="100px" />
        <PageLayoutAbout />
        <Divider height="100px" />
        <Footer />
      </PageWrapper>
    )
  }
}  

export default PageAbout
