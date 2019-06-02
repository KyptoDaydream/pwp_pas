import React from "react"
import styled from "styled-components"
import arrow from '../assets/arrow_white.svg'

const ButtonSmall = styled.div`
  background: linear-gradient(90deg,var(--main-pink) 0%,var(--main-yellow) 50%, var(--main-yellow) 100%);
  background-size: 200% 100%;
  transition: 0.8s;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin-bottom: 25px;
  margin-top: 15px;
  cursor: pointer;
  font-weight: 900;
  margin-right: 25px;
  margin-left: 25px;
  border-radius: 20px;
  width: 150px;
  span {
    color: var(--main-white);
    text-decoration: none !important;
    transition: 0.8s;
    margin-left: 33px;
    :after {
      transition: 0.8s;
      content: '';
      width: 9px;
      height: 9px;
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
  <a href={props.buttonLink}>
    <ButtonSmall>
      <span>{props.buttonText}</span>
    </ButtonSmall>
  </a>
)