import React from "react"
import styled from "styled-components"
import arrow_white from "../assets/arrow_white.svg"

const Button = styled.div`
  background-color: black;
  border-radius: 5px;
  padding: 10px 25px;
  font-size: 12px;
  font-weight: 700;
  color: white;
  cursor: pointer;
  display: inline-block;
  margin-top: 30px;
  position: relative;
  span.buttonText {
    margin-top: 0px;
  }
  span:after {
    content: '';
    background: url(${arrow_white});
    fill: white;
    display: inline-block;
    background-size: cover;
    margin-left: 15px;
    height: 10px;
    width: 10px;
    transition: 0.4s;
  }
  &:hover {
    color: orange;
    transition: 0.4s;
    span.buttonText:after{
      margin-left: 25px;
    }
  }  
`
export default (props) => (
  <Button>
    <span className="buttonText">{props.buttonText}</span>
  </Button>
)