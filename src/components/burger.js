import { slide as Menu } from "react-burger-menu"
import React from "react"
import styled from "styled-components"
import stripe_bg from "../assets/stripe_bg.png"
import fb_orange from "../assets/fb_orange.svg"
import mail_orange from "../assets/mail_orange.svg"
import place_orange from "../assets/place_orange.svg"
import { Link } from "gatsby"

const MenuWrapper = styled.div`
  .bm-burger-button {
    z-index: 1000;
    width: 40px;
    height: 30px;
    position: absolute;
    right: 50px;
    top: 50px;
  }
  @media (max-width: 700px) {
    .bm-burger-button {
    z-index: 1000;
    width: 30px;
    height: 20px;
    position: absolute;
    right: 50px;
    top: 25px;
  }
  }
  .bm-burger-bars {
    background: var(--main-yellow);
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
    background: var(--main-pink);
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
    background: var(--main-yellow);
  }
  .bm-item-list {
    width: 600px;
    /* margin-top: 140px; */
    margin-top: 240px;
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
      color: var(--main-yellow);
    }
    a.classic_link {
      color: var(--text-grey)
    }
    a.class_link:hover {
      color: var(--text-grey)
    }
  }
  .ahoj {
    display: block;
    color: black;
  }
  @media (min-width: 1400px) {
    .bm-item-list {
    /* margin-top: 15%; */
    margin-top: 25%
    margin-left: 20%;
    }
  }

  @media (max-width: 440px) {
    .bm-item-list {
    width: 100%;
    margin: 0;
    padding-top: 140px;
    padding-left: 30px;
    height: auto !important;
  }
  }
`
const MenuItem = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 48px;
  font-weight: 900;
  text-transform: uppercase;
  text-decoration: underline;
  text-decoration-color: var(--main-yellow);
  @media (max-width: 550px) {
    font-size: 32px;
  }
`
const Kontakt = styled.div`
  position: absolute;
  float: left;
  top: 280px;
  left: 780px;
  span {
    display: block;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 900;
    color: var(--main-yellow);
    text-transform: uppercase;
  }
  @media (min-width: 1400px) {
    top: 45%;
    left: 60%;
  }
  @media (max-width: 1000px) {
    display: none !important;
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
    background-color: var(--dark-blue);
  }
`
class Burger extends React.Component {
  render() {
    return (
      <MenuWrapper>
        <Menu right width={"100%"}>
          <span className="ahoj">
            <Link to="/o_nas">
              <MenuItem>O Nás</MenuItem>
            </Link>
          </span>
          <span className="ahoj">
            <Link to="/sluzby">
              <MenuItem>Naše služby</MenuItem>
            </Link>
          </span>
          <span className="ahoj">
            <Link to="/ponuka_prace">
              <MenuItem>Ponuka Práce</MenuItem>
            </Link>
          </span>
          {/*<span className="ahoj"><Link to="/blog"><MenuItem>Blog</MenuItem></Link></span>*/}
          <span className="ahoj">
            <Link to="/kontakt">
              <MenuItem>Kontakt</MenuItem>
            </Link>
          </span>
          <Kontakt>
            <span>Kontakt</span>
            <p>Moldavská 43/A, 1. poschodie</p>
            <p>0917 237 471</p>
            <p>
              <a
                className="classic_link"
                href="mailto:agenturapas@agenturapas.sk"
              >
                agenturapas@agenturapas.sk
              </a>
            </p>
            <a
              href="https://www.facebook.com/passervices.sk/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon className="facebook" />
            </a>
            <a href="mailto:agenturapas@agenturapas.sk">
              <Icon className="mail" />
            </a>
            <a
              href="https://www.google.com/maps/place/Moldavsk%C3%A1+cesta+43,+040+11+Ko%C5%A1ice/@48.7008844,21.2371226,17z/data=!4m5!3m4!1s0x473ee01a682c3771:0xa87216d493a8ffd3!8m2!3d48.7008703!4d21.2388607"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon className="place" />
            </a>
          </Kontakt>
        </Menu>
      </MenuWrapper>
    )
  }
}

export default Burger
