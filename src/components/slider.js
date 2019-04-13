import React from "react"
import styled from "styled-components"
import slide_1 from "../assets/slide_1.jpg"

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
  /* width: 500px; */
  width: 50%;
  height: 100vh;
  right: 0;
  top: 0;
  position: absolute;
  background: #f7f8f9;
  /* background: rgba(238,146,12,0.9); /* Old browsers */
  /* background: -moz-linear-gradient(45deg, rgba(238,146,12,0.9) 0%, rgba(255,61,23,0.9) 100%); /* FF3.6-15 */
  /* background: -webkit-linear-gradient(45deg, rgba(238,146,12,0.9) 0%,rgba(255,61,23,0.9) 100%); /* Chrome10-25,Safari5.1-6 */
  /* background: linear-gradient(45deg, rgba(238,146,12,0.9) 0%,rgba(255,61,23,0.9) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
`
const SlideHeader = styled.div`
  font-weight: 900;
  font-size: 60px;
  margin-left: -100px;
  margin-top: 100px;
  text-transform: uppercase;
  max-width: 400px;
  color: white;
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
          <SlideHeader>
            Spolupráca s firmami
          </SlideHeader>
        </SlideContent>
      </SliderWrapper>
    )
  }
}

export default Slider