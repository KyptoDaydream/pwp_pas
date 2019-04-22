import React from "react"
import styled from "styled-components"
import Header from "../components/header"
import "../styles/global.css"
import stripe_bg from "../assets/stripe_bg.png"
import Divider from '../components/divider'
import PageLayoutWork from '../components/pageLayoutWork'
import TitleImage from '../components/titleImage'
import Footer from '../components/footer'
import { Helmet } from "react-helmet"
import favicon from "../assets/favicon.png"

const PageWrapper = styled.div`
  margin: 0;
  width: 100vw;
  background: url(${stripe_bg});
`

class PageWork extends React.Component {
  render() {
    return (
      <PageWrapper>
        <Helmet link={[
            {rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
          ]}>
          <meta charSet="utf-8" />
          <title>PaS Services | ponuka práce</title>
          <meta name="description" content="agentura prace, agentura sluzieb"/>
          <meta name="keywords" content="Pas Services, Agentura PaS"/>
        </Helmet>
        <Header />
        <TitleImage componentClass="work_application" title="Ponuka práce"/>
        <Divider height="100px" />
        <PageLayoutWork />
        <Divider height="100px" />
        <Footer />
      </PageWrapper>
    )
  }
}  

export default PageWork
