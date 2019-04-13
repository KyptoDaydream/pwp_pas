import { slide as Menu } from 'react-burger-menu'
import React from "react"
import styled from "styled-components"
import stripe_bg from "../assets/stripe_bg.png"

const MenuWrapper = styled.div `
  .bm-burger-button {
    z-index: 1000;
    width: 40px;
    height: 30px;
    position: absolute;
    right: 50px;
    top: 50px;
  }
  .bm-burger-bars {
    background: white;
    border-radius: 5px;
    transition: 0.4s;
  }
  .bm-cross-button {
    position: absolute;
    top: 50px !important;
    right: 50px !important;
    width: 50px !important;
    height: 50px !important;
  }
  .bm-burger-button:hover .bm-burger-bars {
    background: black;
    opacity: 1 !important;
  }
  .bm-cross {
    background: white;
    border-radius: 5px;
    width: 7px !important;
    height: 40px !important;
  }
  .bm-item-list {
    width: 500px;
  }
  .bm-menu-wrap {
    background-image: url(${stripe_bg});
    }
  .bm-menu {
  /*  background: rgba(238,146,12,0.5); /* Old browsers */
  /*  background: -moz-linear-gradient(45deg, rgba(255,255,255,0) 0%,rgba(238,146,12,0.9) 100%); /* FF3.6-15 */
    /*background: -webkit-linear-gradient(45deg, rgba(255,255,255,0) 0%,rgba(238,146,12,0.9) 100%); /* Chrome10-25,Safari5.1-6 */
    /*background: linear-gradient(45deg, rgba(255,255,255,0) 0%,rgba(238,146,12,0.9) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  
  }
`

class Burger extends React.Component {
  render () {
    return (
      <MenuWrapper>
        <Menu right width={ '100%' }>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
        </Menu>
      </MenuWrapper>
    );
  }
}

export default Burger