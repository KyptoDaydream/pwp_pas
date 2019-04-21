import React from "react"
import styled from "styled-components"
import arrow_white from "../assets/arrow_white.svg"

const Button = styled.div`
  background-color: black;
  border-radius: 5px;
  padding: 10px 25px;
  font-size: 12px;
  font-weight: 700;
  display: inline-block;
  margin-top: 30px;
  position: relative;
  a.buttonText {
    margin-top: 0px;
    color: white;
    text-decoration: none;
    cursor: pointer;
  }
  a:after {
    content: '';
    background: url(${arrow_white});
    display: inline-block;
    background-size: cover;
    margin-left: 15px;
    height: 10px;
    width: 10px;
    transition: 0.4s;
  }
  &:hover {
    transition: 0.4s;
    a.buttonText {
      color: orange;
    }
    a.buttonText:after{
      margin-left: 25px;
    }
  }  
`
export default (props) => (
  <Button>
    <a className="buttonText" href={props.buttonLink}>{props.buttonText}</a>
  </Button>
)