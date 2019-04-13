import React from "react"
import styled from "styled-components"
import logo from "../assets/logo.png"
// import { slide as Menu } from 'react-burger-menu'

const HeaderWrapper = styled.div `
  margin: 0;
  width: 100%;
  height: 70px;
  background: transparent;
  position: absolute;
  top: 0;
  z-index: 9999
`

const Logo = styled.div `
  margin-left: 50px;
  margin-top: 15px;
  width: 150px;
  height: 45px;
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
      </HeaderWrapper>
    )
  }
}

export default Header