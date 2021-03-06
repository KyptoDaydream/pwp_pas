import React from "react"
import styled from "styled-components"
import Header from "../components/header"
import "../styles/global.css"
import stripe_bg from "../assets/stripe_bg.png"
import Divider from "../components/divider"
import PageLayoutPersonalnaAgentura from "../components/PageLayoutPersonalnaAgentura"
import TitleImage from "../components/titleImage"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"

const PageWrapper = styled.div`
  margin: 0;
  width: 100vw;
  background: url(${stripe_bg});
`

class PageAgency extends React.Component {
  render() {
    return (
      <PageWrapper>
        <Helmet>
          <meta charSet="utf-8" />
          <title>PaS Services | personálna agentúra</title>
          <meta
            name="description"
            content="Spoločnosť PaS Services s.r.o. je firma, ktorá ponúka na trhu svoje služby v oblasti personálnych služieb, dočasného zamestnávania, dopravy, upratovacieho servisu, až po organizovanie rôznych firemných akcií."
          />
          <meta name="keywords" content="Pas Services, Agentura PaS" />
        </Helmet>
        <Header />
        <TitleImage
          componentClass="personal_agency"
          title="PERSONÁLNA AGENTÚRA"
        />
        <Divider height="100px" />
        <PageLayoutPersonalnaAgentura />
        <Divider height="100px" />
        <Footer />
      </PageWrapper>
    )
  }
}

export default PageAgency
