import React from "react"
import styled from "styled-components"
import Header from "../components/header"
import "../styles/global.css"
import stripe_bg from "../assets/stripe_bg.png"
import Divider from '../components/divider'
import TitleImage from '../components/titleImage'
import Footer from '../components/footer'
import { Helmet } from "react-helmet"
import favicon from "../assets/favicon.png"

const PageWrapper = styled.div`
  margin: 0;
  width: 100vw;
  background: url(${stripe_bg});
  .message_wrapper {
    width: 900px;
    background: white;
    margin: 0 auto;
    padding: 50px;
  }
`

class PageServices extends React.Component {
  render() {
    return (
      <PageWrapper>
        <Helmet link={[
            {rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
          ]}>
          <meta charSet="utf-8" />
          <title>PaS Services | správa odoslaná</title>
          <meta name="description" content="Spoločnosť PaS Services s.r.o. je firma, ktorá ponúka na trhu svoje služby v oblasti personálnych služieb, dočasného zamestnávania, dopravy, upratovacieho servisu, až po organizovanie rôznych firemných akcií."/>
          <meta name="keywords" content="Pas Services, Agentura PaS"/>
        </Helmet>
        <Header />
        <TitleImage componentClass="blog" title="Správa úspešne odoslaná"/>
        <Divider height="100px" />
          <div className="message_wrapper">
            <p>Správa bola úspešne odoslaná a budeme Vás čo najskôr kontaktovať.</p>
            <p>V prípade akýchkoľvek dotazov nás neváhajte kontaktovať telefonicky.</p>
          </div>
        <Divider height="100px" />
        <Footer />
      </PageWrapper>
    )
  }
}  

export default PageServices
