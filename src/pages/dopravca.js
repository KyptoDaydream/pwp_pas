import React from "react"
import styled from "styled-components"
import Header from "../components/header"
import "../styles/global.css"
import stripe_bg from "../assets/stripe_bg.png"
import Divider from '../components/divider'
import PageLayoutDoprava from '../components/PageLayoutDoprava'
import TitleImage from '../components/titleImage'
import Footer from '../components/footer'
import { Helmet } from "react-helmet"

const PageWrapper = styled.div`
  margin: 0;
  width: 100vw;
  background: url(${stripe_bg});
`

class PageAbout extends React.Component {
  render() {
    return (
      <PageWrapper>
        <Helmet>
          <meta charSet="utf-8" />
          <title>PaS Services | dopravca do 3.5t</title>
          <meta name="description" content="agentura prace, agentura sluzieb"/>
          <meta name="keywords" content="Pas Services, Agentura PaS"/>
        </Helmet>
        <Header />
        <TitleImage componentClass="about_us" title="Zabezpečenie dopravy v rámci SR a EÚ"/>
        <Divider height="100px" />
        <PageLayoutDoprava />
        <Divider height="100px" />
        <Footer />
      </PageWrapper>
    )
  }
}  

export default PageAbout
