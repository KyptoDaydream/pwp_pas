import React from "react"
import styled from "styled-components"
import slide_1 from "../assets/slide_5.jpg"
import slide_6 from "../assets/slide_6.jpg"
import slide_3 from "../assets/slide_7.jpg"
import slide_4 from "../assets/slide_8.jpg"
import slide_9 from "../assets/slide_9.jpg"
import slide_10 from "../assets/slide_10.jpg"
import slide_11 from "../assets/slide_11.jpg"
import slide_12 from "../assets/slide_12.jpg"
import slide_13 from "../assets/slide_13.jpg"

const SliderWrapper = styled.div`
  margin: 0;
  width: 100vw;
  height: 400px;
  background: transparent;
  position: relative;
  top: 0;
  &.about_us {
    background: url(${slide_13});
    background-size: cover;
  }
  &.personal_agency {
    background: url(${slide_1});
    background-size: cover;
  }
  &.services {
    background: url(${slide_12});
    background-size: cover;
  }
  &.work_application {
    background: url(${slide_3});
    background-size: cover;
  }
  &.blog {
    background: url(${slide_4});
    background-size: cover;
  }
  &.contact {
    background: url(${slide_9});
    background-size: cover;
  }
  &.logistic {
    background: url(${slide_6});
    background-size: cover;
  }
  &.cleaning {
    background: url(${slide_10});
    background-size: cover;
  }
  &.events {
    background: url(${slide_11});
    background-size: cover;
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
`
const SlideContent = styled.div`
  bottom: 100px;
  left: 20%;
  max-width: ${props => props.width};
  position: absolute;
`
class titleImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showMenu: true }
  }

  render() {
    const width = this.props.width ? this.props.width : "500px"
    return (
      <SliderWrapper className={this.props.componentClass}>
        <Slide />
        <SlideContent width={width}>
          <h2>{this.props.title}</h2>
        </SlideContent>
      </SliderWrapper>
    )
  }
}

export default titleImage
