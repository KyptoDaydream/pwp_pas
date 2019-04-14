import React from "react"
import styled from "styled-components"
import logo from "../assets/logo_white_orange.png"
import Burger from "./burger"

const HeaderWrapper = styled.div `
  margin: 0;
  width: 100%;
  height: 150px;
  background: transparent;
  position: fixed;
  top: 0;
  z-index: 9999
`

const Logo = styled.div `
  margin-left: 50px;
  margin-top: 15px;
  width: 150px;
  height: 135px;
  position: absolute;
  display: inline-block;
  background: url(${logo});
  background-size: 100%;
  background-position: center center;
  background-repeat: no-repeat;
`
class Header extends React.Component  {
  constructor(props) {
    super(props);
    this.state = { showMenu: true };
  }
  
  render() {
    // const { children, data } = this.props;
    return (
      <HeaderWrapper>
        <Logo />
        <Burger />
      </HeaderWrapper>
    )
  }
}

export default Header