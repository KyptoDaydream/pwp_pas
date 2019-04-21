import React from "react"
import styled from "styled-components"
import slide_1 from "../assets/slide_3.jpg"
import ButtonBig from "./button_big"

const SliderWrapper = styled.div `
  margin: 0;
  width: 100vw;
  height: 100vh;
  background: transparent;
  position: relative;
  background: url(${slide_1});
  background-size: cover;
  top: 0;
  `
const Slide = styled.div `
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg,rgba(0,17,39,0.44),rgba(0,17,39,0.44) 1%,rgba(0,17,39,0.6) 42%,rgba(0,17,39,1) 81%,rgba(0,17,39,1) 83%);
  /* background: -moz-linear-gradient(top, rgba(0,17,39,0) 0%, rgba(0,17,39,1) 100%); /* FF3.6-15 */
  /* background: -webkit-linear-gradient(top, rgba(0,17,39,0) 0%,rgba(0,17,39,1) 100%); /* Chrome10-25,Safari5.1-6 */
  /* background: linear-gradient(to bottom, rgba(0,17,39,0) 0%,rgba(0,17,39,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  /* filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00001127', endColorstr='#001127',GradientType=0 ); /* IE6-9 */

`
const SlideContent = styled.div`
  width: 500px;
  height: 400px;
  bottom: 0;
  right: 0;
  position: absolute;
  color: var(--main-white);
  font-weight: 700;
  .flavour_text {
    width: 276px;
    margin-left: 7px;
    margin-bottom: 50px;
  }
  /* background: #f7f8f9; */
  /* background: rgba(238,146,12,0.9); /* Old browsers */
  /* background: -moz-linear-gradient(45deg, rgba(238,146,12,0.9) 0%, rgba(255,61,23,0.9) 100%); /* FF3.6-15 */
  /* background: -webkit-linear-gradient(45deg, rgba(238,146,12,0.9) 0%,rgba(255,61,23,0.9) 100%); /* Chrome10-25,Safari5.1-6 */
  /* background: linear-gradient(45deg, rgba(238,146,12,0.9) 0%,rgba(255,61,23,0.9) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
`
class Slider extends React.Component  {
  constructor(props) {
    super(props);
    this.state = { showMenu: true };
  }
  

  render() {
    return (
      <SliderWrapper>
        <Slide/>
        <SlideContent>
          <p className="flavour_text">
          Sme stabilný partner pre Vaše dodávky služieb 
Sprostredkovateľská firma, ktorá pomáha firmám zabezpečiť pracovné miesta, podľa požiadaviek do 24h.
          </p>
          <ButtonBig buttonText="spolupráca s firmami" buttonLink="/ahoj/" />
          <ButtonBig buttonText="ponuka práce" buttonLink="/ahoj/" />
        </SlideContent>
      </SliderWrapper>
    )
  }
}

export default Slider