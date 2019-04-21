import React from "react"
import styled from "styled-components"
import Header from "../components/header"
import "../styles/global.css"
import stripe_bg from "../assets/stripe_bg.png"
import Divider from '../components/Divider'
import PageLayoutWork from '../components/pageLayoutWork'
import TitleImage from '../components/titleImage'
import Footer from '../components/footer'

const PageWrapper = styled.div`
  margin: 0;
  width: 100vw;
  background: url(${stripe_bg});
`

class PageWork extends React.Component {
  render() {
    return (
      <PageWrapper>
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
