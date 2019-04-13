import React from "react"
import styled from "styled-components"
import arrow from "../assets/arrow.svg"
import arrow_orange from "../assets/arrow_orange.svg"

const ArrowWrapper = styled.div `
  width: 40px;
  height: 40px;
  bottom: 50px;
  left: ${props => props.props ? '50px' : '97px'};
  position: absolute;
  display: block;
  border-radius: 50px;
  background-color: white;
  background-image: url(${arrow});
  background-size: 40% 40%;
  background-position: center center;
  background-repeat: no-repeat;
  transform: ${props => props.props ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background-image: url(${arrow_orange});
    bottom: 47px;
    left: ${props => props.props ? '47px' : '94px'};
    width: 46px;
    height: 46px;
  }
`

class Arrow extends React.Component {

  render () {
    return (
      <ArrowWrapper props={this.props.side}/>
    );
  }
}

export default Arrow