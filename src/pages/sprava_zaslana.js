import React from "react"
import styled from "styled-components"
import Header from "../components/header"
import "../styles/global.css"
import stripe_bg from "../assets/stripe_bg.png"
import Divider from '../components/divider'
import Footer from '../components/footer'
import { Helmet } from "react-helmet"
import favicon from "../assets/favicon.png"
import Grid from '@material-ui/core/Grid';
import ButtonWrapper from '../components/buttonWrapper'

const PageWrapper = styled.div`
  margin: 0;
  width: 100vw;
  background: url(${stripe_bg});
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

class PageServices extends React.Component {
  render() {
    return (
      <PageWrapper>
        <Helmet link={[
            {rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
          ]}>
          <meta charSet="utf-8" />
          <title>PaS Services | správa bola zaslaná</title>
          <meta name="description" content="agentura prace, agentura sluzieb"/>
          <meta name="keywords" content="Pas Services, Agentura PaS"/>
        </Helmet>
        <Header blog={true}/>
        <Divider height="150px" />
        <ServicesWrapper>
        <ServicesMargin>
        <Grid container spacing={24}>
            <Grid item xs={4}></Grid>
            <Grid item xs={8} className="text_wrapper">
              <div className="title_wrapper">
              <h1 className="service_name">Ďakujeme za správu</h1>
              <h1 className="services">Budeme Vás čoskoro kontaktovať</h1>
              </div>
              <div>
                <p>V prípade akýchkoľvek dotazov nás neváhajte kontaktovať</p>
                </div>
              <Divider height="70px" />
              <ButtonWrapper buttonText='Kontakt' buttonLink='/kontakt/' />
            </Grid>
          </Grid>
        </ServicesMargin>
      </ServicesWrapper>
      <Divider height="70px" />
      <Footer />
      </PageWrapper>
    )
  }
}  

export default PageServices
