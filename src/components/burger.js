import { slide as Menu } from 'react-burger-menu'
import React from "react"
import styled from "styled-components"
import stripe_bg from "../assets/stripe_bg.png"
import fb_orange from "../assets/fb_orange.svg"
import mail_orange from "../assets/mail_orange.svg"
import place_orange from "../assets/place_orange.svg"
import { Link } from "gatsby"

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
    right: 70px !important;
    width: 50px !important;
    height: 50px !important;
  }
  .bm-burger-button:hover .bm-burger-bars {
    background: black;
    opacity: 1 !important;
  }
  .bm-cross {
    margin-left: -15px;
    background: black;
    border-radius: 5px;
    width: 7px !important;
    height: 40px !important;
    transition: 0.3s;
  }
  .bm-cross-button:hover .bm-cross{
    background: orange;
  }
  .bm-item-list {
    width: 600px;
    margin-top: 140px;
    margin-left: 100px;
    height: auto !important;
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
  .bm-item{
    a {
      display: inline-block;
      transition: 0.3s;
      text-decoration: none;
      color: black;
    }
    a:hover {
      color: orange;
    }
  }
  .ahoj {
    display: block;
    color: black;
  }
`
const MenuItem = styled.span`
  font-family: 'Poppins', sans-serif;
  font-size: 48px;
  font-weight: 900;
  text-transform: uppercase;
  text-decoration: underline;
  text-decoration-color: orange;
`
const Kontakt = styled.div`
    position: absolute;
    float: left;
    top: 280px;
    left: 780px;
  span {
    display: block;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 900;
    color: orange;
    text-transform: uppercase;
  }
`
const Icon = styled.div`
  margin-top: 20px;
  height: 40px;
  width: 40px;
  transition: 0.3s;
  border-radius: 40px;
  background-size: 100% 100%;
  display: inline-block;
  margin-right: 20px;
  &.facebook {
    background-image: url(${fb_orange});
  }
  &.mail {
    background-image: url(${mail_orange});
  }
  &.place {
    background-image: url(${place_orange});
  }
  &:hover {
    background-color: black;
  }
`
class Burger extends React.Component {
  render () {
    return (
      <MenuWrapper>
        <Menu right width={ '100%' }>
          <span class="ahoj"><Link to="/ahoj"><MenuItem>Pre Firmy</MenuItem></Link></span>
          <span class="ahoj"><Link to="/ahoj"><MenuItem>Pre Zamestnancov</MenuItem></Link></span>
          <span class="ahoj"><Link to="/ahoj"><MenuItem>Ponuka Prace</MenuItem></Link></span>
          <span class="ahoj"><Link to="/ahoj"><MenuItem>Blog</MenuItem></Link></span>
          <span class="ahoj"><Link to="/ahoj"><MenuItem>Kontakt</MenuItem></Link></span>
          <Kontakt>
            <span>Kontakt</span>
            <p>moldavska cesta 49</p>
            <p>0945 124 953</p>
            <p>info@pas.sk</p>
            <Icon className='facebook' />
            <Icon className='mail' />
            <Icon className='place' />
          </Kontakt>
        </Menu>
      </MenuWrapper>
    );
  }
}

export default Burger