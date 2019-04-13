import React from "react"
import styled from "styled-components"
import slide_1 from "../assets/slide_1.jpg"
import arrow from "../assets/arrow.svg"
import Button from "./button"
import Arrow from "./arrow"

const SliderWrapper = styled.div `
  margin: 0;
  width: 100vw;
  height: 100vh;
  background: transparent;
  position: relative;
  top: 0;
`
const Slide = styled.div `
  width: 100%;
  height: 100%;
  background: url(${slide_1});
  background-size: cover;
`
const SlideContent = styled.div`
  width: 500px;
  height: 100vh;
  right: 0;
  top: 0;
  position: absolute;
  /* background: #f7f8f9; */
  background: rgba(238,146,12,0.9); /* Old browsers */
  background: -moz-linear-gradient(45deg, rgba(238,146,12,0.9) 0%, rgba(255,61,23,0.9) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(45deg, rgba(238,146,12,0.9) 0%,rgba(255,61,23,0.9) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(45deg, rgba(238,146,12,0.9) 0%,rgba(255,61,23,0.9) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
`
const SlideHeader = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 900;
  font-size: 60px;
  line-height: 60px;
  margin-left: -100px;
  margin-top: 130px;
  text-transform: uppercase;
  max-width: 400px;
  color: black;
`
const SliderText = styled.div`
  color: white;
  line-height: 20px;
  margin: 50px 50px 50px 50px;
  span {
    display: block;
    margin-top: 15px;
  }
  ul {
    margin-top: 50px;
    padding-left: 0;
    li {
      margin-left: 30px;
      margin-top: 10px;
      font-weight: 700;
      list-style: none;
      position: relative;
    }
    li:before {
      content: '';
      background: url(${arrow});
      background-size: cover;
      position: absolute;
      left: -30px;
      top: 5px;
      height: 10px;
      width: 10px;
    }
  }
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
        <Arrow />
        <Arrow side="right" />
        <SlideContent>
          <SlideHeader>
            Spolupráca s firmami
          </SlideHeader>
          <SliderText>
          <span>Sprostredkovateľská firma, ktorá pomáha firmám zabezpečiť pracovné miesta, podľa požiadaviek. Dokáže spoločnosti dodávať široké spektrum služieb, potrebných k podnikaniu.</span>
          <ul>
            <li>
              Expresné zabezpečenie služby do 24h
            </li>
            <li>
              Servis k poskytovaným službám 24/7
            </li>
            <li>
              Konzultácia s klientom a vytvorenie optimálnych podmienok
            </li>
          </ul>
          <Button buttonText="viac info" />
          </SliderText>
        </SlideContent>
      </SliderWrapper>
    )
  }
}

export default Slider