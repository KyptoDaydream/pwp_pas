import React from "react"
import styled from "styled-components"
import Header from "../components/header"
import Slider from "../components/slider"
import "../styles/global.css"

const PageWrapper = styled.div`
  margin: 0;
  width: 100vw;
`

export default () => 
  <PageWrapper>
    <Header />
    <Slider />
  </PageWrapper>
