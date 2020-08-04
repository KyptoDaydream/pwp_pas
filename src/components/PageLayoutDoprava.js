import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import side_image from "../assets/side_image_5.jpg"
import Divider from "./divider"
import ButtonWrapper from "./buttonWrapper"

const ServicesWrapper = styled.div`
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
    -webkit-box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.05);
    box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.05);
  }
  @media (max-width: 980px) {
    :before {
      left: 30px;
      right: 30px;
    }
    .responsive_grid_1 {
      display: none;
    }
    .responsive_grid_2 {
      flex-basis: 100%;
      max-width: 100%;
    }
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
        color: var(--main-yellow);
      }
    }
  }
  .text_wrapper {
    position: relative;
  }
  .MuiPaper-rounded-5 {
    border-top: 1px solid black;
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
  .expanable_panel {
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    border-top: 1px solid var(--light-gray);
    margin-bottom: 20px;
    &:last-of-type {
      border-bottom: 1px solid var(--light-gray);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      padding-bottom: 20px;
    }
    &.last {
      border-bottom: 1px solid var(--light-gray);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      padding-bottom: 20px;
    }
    &:before {
      display: none;
    }
  }
  .expanable_title {
    font-weight: 600;
    transition: 0.3s;
    .MuiExpansionPanelSummary-expanded-130 {
      color: var(--main-yellow);
    }
    &:hover {
      color: var(--main-yellow);
    }
  }
`
const SideImage = styled.div`
  position: absolute;
  top: 150px;
  left: 0;
  background: url(${side_image});
  width: 20%;
  height: 600px;
  background-position: right;
  background-size: cover;
  -webkit-box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.2);
  @media (max-width: 980px) {
    display: none;
  }
`
class PageLayoutDoprava extends React.Component {
  render() {
    return (
      <ServicesWrapper>
        <SideImage />
        <ServicesMargin>
          <Grid container spacing={24}>
            <Grid item xs={4} className="responsive_grid_1" />
            <Grid item xs={8} className="text_wrapper responsive_grid_2">
              <div className="title_wrapper">
                <h1 className="service_name">dopravca</h1>
                <h1 className="services">
                  Váš partner v nákladnej cestnej doprave
                </h1>
                <ul>
                  <li>Dopravné služby pre kuriérske spoločnosti</li>
                  <li>Starostlivosť o pridelený rajón</li>
                  <li>Doprava tovaru na základe pridelených objednávok</li>
                  <li>Vyzdvihnutie tovaru z Košického a Prešovského kraja</li>
                  <li>Doprava v rámci SR</li>
                  <li>Vozový park</li>
                  <li>Dispečing - koordinácia dodania tovaru</li>
                </ul>
              </div>
              <Divider height="70px" />
              <ButtonWrapper
                buttonText="Prepravný poriadok"
                buttonLink="/Prepravny_poriadok-PaS_Services_sro.docx"
                smallPadding={true}
              />
              <ButtonWrapper
                buttonText="Nezáväzná cenová ponuka"
                buttonLink="mail"
              />
            </Grid>
          </Grid>
        </ServicesMargin>
      </ServicesWrapper>
    )
  }
}

export default PageLayoutDoprava
