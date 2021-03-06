import React from "react"
import styled from "styled-components"
import slide_1 from "../assets/slide_3.jpg"
import ButtonBig from "./button_big"

const SliderWrapper = styled.div`
  margin: 0;
  width: 100vw;
  height: 100vh;
  background: transparent;
  position: relative;
  background: url(${slide_1});
  background-size: cover;
  top: 0;
  h2 {
    position: absolute;
    bottom: 290px;
    left: 140px;
    max-width: 400px;
    font-size: 24px;
  }
  .flavour_text {
    color: var(--main-white);
    position: absolute;
    width: 276px;
    bottom: 140px;
    left: 140px;
  }
  ul {
    color: var(--main-white);
    position: absolute;
    width: 276px;
    bottom: 140px;
    left: 140px;
    margin: 0;
    padding: 0;
    li {
        list-style: none;
        padding-left: 30px;
        padding-bottom: 15px;
        position: relative;
        a {
          color: var(--main-white);
          font-weight: bold;
        }
        a:hover {
          color: var(--white);
          text-decoration: underline;
          text-decoration-color: var(--main-yellow);
        }
        &:before {
          content: "•";
          position: absolute;
          left: 0px;
          color: var(--main-yellow);
        } 
      }
  }
  @media (min-width: 1400px) {
    h2 {
      max-width: 700px;
      font-size: 32px;
    }
    .flavour_text {
    font-size:1.1em;
    width: 600px;
  }
  }
  @media (max-width: 980px) {
    h2 {
      position: relative;
      margin: 0 auto;
      padding-top: 150px;
      left: auto;
      bottom: auto;
    }
    .flavour_text {
      position: relative;
      margin: 0 auto;
      left: auto;
      bottom: auto;
      width: 400px;
    }
    ul {
      position: relative;
      margin: 0 auto;
      padding-top: 25px;
      left: auto;
      bottom: auto;
      width: 400px;
    }
  }
  @media (max-width: 400px) {
    h2 {
      padding-top: 150px;
      max-width: 270px;
    }
    .flavour_text {
      position: relative;
      margin: 0 auto;
      left: auto;
      bottom: auto;
      width: 270px;
    }
    ul {
      margin: 0 auto;
      left: auto;
      bottom: auto;
      width: 270px;
      position: relative;
    }
`
const Slide = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 17, 39, 0.44),
    rgba(0, 17, 39, 0.44) 1%,
    rgba(0, 17, 39, 0.6) 42%,
    rgba(0, 17, 39, 1) 81%,
    rgba(0, 17, 39, 1) 83%
  );
  background: -moz-linear-gradient(
    180deg,
    rgba(0, 17, 39, 0.44),
    rgba(0, 17, 39, 0.44) 1%,
    rgba(0, 17, 39, 0.6) 42%,
    rgba(0, 17, 39, 1) 81%,
    rgba(0, 17, 39, 1) 83%
  );
  background: -webkit-linear-gradient(
    180deg,
    rgba(0, 17, 39, 0.44),
    rgba(0, 17, 39, 0.44) 1%,
    rgba(0, 17, 39, 0.6) 42%,
    rgba(0, 17, 39, 1) 81%,
    rgba(0, 17, 39, 1) 83%
  );
  background: linear-gradient(
    180deg,
    rgba(0, 17, 39, 0.44),
    rgba(0, 17, 39, 0.44) 1%,
    rgba(0, 17, 39, 0.6) 42%,
    rgba(0, 17, 39, 1) 81%,
    rgba(0, 17, 39, 1) 83%
  );
  @media (max-width: 980px) {
    position: absolute;
    left: 0;
    top: 0;
  }
`
const SlideContent = styled.div`
  width: 500px;
  /* height: 300px; */
  height: 220px;
  bottom: 0;
  right: 0;
  position: absolute;
  color: var(--main-white);
  font-weight: 700;
  @media (max-width: 980px) {
    position: relative;
    margin: 0 auto;
    margin-top: 70px;
    width: 340px;
  }
`
class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showMenu: true }
  }

  render() {
    return (
      <SliderWrapper>
        <Slide />
        <h2>Partner pre servis vašej firmy, na ktorého sa môžete spoľahnúť</h2>

        <ul>
          <li>
            <a href="/personalna_agentura">personálna agentúra</a>
          </li>
          <li>
            <a href="/dopravca">dopravca cestnej nákladnej prepravy</a>
          </li>
          <li>
            <a href="/upratovaci_servis">upratovací servis</a>
          </li>
          <li>
            <a href="/organizovanie_eventov">organizovanie eventov</a>
          </li>
        </ul>
        {/*<p className="flavour_text">
        Sme agentúra v oblasti poskytovania komplexného servisu personalistiky, logistiky, cateringu a teambuildingu
        </p>*/}
        <SlideContent>
          <ButtonBig
            buttonText="Nezáväzná cenová ponuka"
            buttonLink="https://www.agenturapas.sk/kontakt"
          />
          {/* <ButtonBig buttonText="ponuka práce" buttonLink="/ponuka_prace" /> */}
        </SlideContent>
      </SliderWrapper>
    )
  }
}

export default Slider
