import React from "react"
import styled from "styled-components"
import Header from "../components/header"
import "../styles/global.css"
import stripe_bg from "../assets/stripe_bg.png"
import Divider from '../components/divider'
import PageLayoutEvents from '../components/PageLayoutEvents'
import TitleImage from '../components/titleImage'
import Footer from '../components/footer'
import { Helmet } from "react-helmet"

const PageWrapper = styled.div`
  margin: 0;
  width: 100vw;
  background: url(${stripe_bg});
`

class PageEvents extends React.Component {
  render() {
    return (
      <PageWrapper>
        <Helmet>
          <meta charSet="utf-8" />
          <title>PaS Services | organizovanie eventov</title>
          <meta name="description" content="agentura prace, agentura sluzieb"/>
          <meta name="keywords" content="Pas Services, Agentura PaS"/>
        </Helmet>
        <Header />
        <TitleImage componentClass="about_us" title="Zabezpečenie a organizovanie firemných akcií"/>
        <Divider height="100px" />
        <PageLayoutEvents />
        <Divider height="100px" />
        <Footer />
      </PageWrapper>
    )
  }
}  

export default PageEvents
