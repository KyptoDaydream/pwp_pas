import React from "react"
import styled from "styled-components"
import Header from "../components/header"
import "../styles/global.css"
import stripe_bg from "../assets/stripe_bg.png"
import Divider from '../components/divider'
import PageLayoutCleaning from '../components/PageLayoutCleaning'
import TitleImage from '../components/titleImage'
import Footer from '../components/footer'
import { Helmet } from "react-helmet"

const PageWrapper = styled.div`
  margin: 0;
  width: 100vw;
  background: url(${stripe_bg});
`

class PageCleaning extends React.Component {
  render() {
    return (
      <PageWrapper>
        <Helmet>
          <meta charSet="utf-8" />
          <title>PaS Services | upratovací servis</title>
          <meta name="description" content="agentura prace, agentura sluzieb"/>
          <meta name="keywords" content="Pas Services, Agentura PaS"/>
        </Helmet>
        <Header />
        <TitleImage componentClass="about_us" title="Kompletná údržba vaších priestorov"/>
        <Divider height="100px" />
        <PageLayoutCleaning />
        <Divider height="100px" />
        <Footer />
      </PageWrapper>
    )
  }
}  

export default PageCleaning
