import React from "react"
import styled from "styled-components"
import arrow from '../assets/arrow_white.svg'

const ButtonBig = styled.div`
  background: linear-gradient(90deg,var(--main-pink) 0%,var(--main-yellow) 50%, var(--main-yellow) 100%);
  background-size: 200% 100%;
  transition: 0.8s;
  height: 75px;
  width: 310px;
  text-align: center;
  margin-bottom: 25px;
  cursor: pointer;
  font-weight: 900;
  margin-right: 25px;
  margin-left: 25px;
  span {
    color: var(--main-white);
    text-decoration: none !important;
    line-height: 75px;
    transition: 0.8s;
    margin-left: 33px;
    :after {
      transition: 0.8s;
      content: '';
      width: 13px;
      height: 13px;
      opacity: 1;
      background: url(${arrow});
      background-size: cover;
      background-repeat: none;
      margin-left: 20px;
      background-size: cover;
      display: inline-block;
      opacity: 0;
    }
  }
  :hover {
    transition: 0.8s;
    background: linear-gradient(90deg,var(--main-pink) 0%,var(--main-yellow) 50%, var(--main-yellow) 100%);
    background-size: 200% 100%;
    background-position: right;
    span{
      margin-left: 0;
    }
    span:after {
      opacity: 1;
    }
  }
`
export default (props) => (

  <a href={props.buttonLink === 'mail' ? 'mailto:agenturapas@agenturapas.sk' : props.buttonLink}>
    <ButtonBig>
      <span>{props.buttonText}</span>
    </ButtonBig>
  </a>
)