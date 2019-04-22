import React from "react"
import styled from "styled-components"
import logo from "../assets/logo_yellow.png"
import logo_black from "../assets/logo_yellow_black.png"
import Burger from "./burger"
import { Link } from "gatsby"

const HeaderWrapper = styled.div `
  margin: 0;
  width: 100%;
  height: 150px;
  background: transparent;
  position: fixed;
  top: 0;
  border-top: 10px solid var(--main-yellow);
  z-index: 9999
`
const Logo = styled.div `
  margin-left: 50px;
  margin-top: 15px;
  width: 120px;
  height: 135px;
  position: absolute;
  display: inline-block;
  transition: 0.5s;
  &.white_logo {
    background: url(${logo});
  background-size: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  }
  &.black_logo {
    background: url(${logo_black});
  background-size: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  }
  
`
class Header extends React.Component  {
  constructor(props) {
    super(props);
    this.state = { 
      color: 'logo',
      showMenu: true 
    };
  }
  
  listenScrollEvent = e => {
    if (window.scrollY < 400) {
      this.setState({color: 'logo'})
    } else {
      this.setState({color: 'logo_black'})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render() {
    console.log(this.props);
    const logo_class = this.state.color === 'logo' && this.props.blog !== true ? 'white_logo' : 'black_logo';
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo className={logo_class} props={this.state.color}/>
        </Link>
        <Burger />
      </HeaderWrapper>
    )
  }
}

export default Header