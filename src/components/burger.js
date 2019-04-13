import { slide as Menu } from 'react-burger-menu'
import React from "react"
import styled from "styled-components"

const MenuWrapper = styled.div `
  margin-left: 50px;
  margin-top: 15px;
  width: 45px;
  height: 45px;
  display: inline-block;
`

class Burger extends React.Component {
  render () {
    return (
      <MenuWrapper>
        <Menu>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
        </Menu>
      </MenuWrapper>
    );
  }
}

export default Burger