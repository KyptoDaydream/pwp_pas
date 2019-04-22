import React from "react"
import styled from "styled-components"
import Grid from '@material-ui/core/Grid';
import logo from '../assets/logo_footer.png'
import image from '../assets/slide_9.jpg'
import { Link } from "gatsby"
import fb_orange from "../assets/fb_orange.svg"
import mail_orange from "../assets/mail_orange.svg"
import place_orange from "../assets/place_orange.svg"

const ServicesWrapper = styled.div `
  background: url(${image}); 
  background-size: cover;
  width: 100%;
  .gradient_bg {
    display: block;
    width: 100%;
    padding: 50px;
    background: linear-gradient(180deg,rgba(0,17,39,0.44),rgba(0,17,39,0.44) 1%,rgba(0,17,39,0.6) 42%,rgba(0,17,39,1) 81%,rgba(0,17,39,1) 83%);
  }
  .footer_logo {
    max-width: 200px;
    margin-top: 30px;
  }
  .footer_text {
    margin-top: 25px;
  }
  .classic_link {
    color: var(--main_white);
    clear: 'both';
  }
  .footer_menu {
    display: inline-block;
    float: left;
    clear: left;
  }
  .footer_menu:first-of-type {
    margin-top: 25px;
  }
  .footer_kontakt {
    margin-top: 25px;
  }
`
const ServicesMargin = styled.div`
  max-width: 940px;
  margin: 0 auto;
  color: var(--main-white);
  @media (max-width: 640px) {
    .responsive_footer {
      flex-basis: 100%;
      max-width: 100%;
    }
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
  cursor: pointer;
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
    background-color: var(--main-white);
  }
`
class Footer extends React.Component {

  render () {
    return (
      <ServicesWrapper>
        <div className='gradient_bg'>
        <ServicesMargin>
          <Grid container spacing={24}>
            <Grid item xs={6} className="responsive_footer">
              <img alt="logo" className="footer_logo" src={logo} />
              <p className="footer_text">
              Náš úspech je našim záväzkom a motiváciou napredovať a byť strategickým partnerom
              </p>
            </Grid>
            <Grid item xs={3} className="responsive_footer">
              <Link to="/o_nas" className="classic_link footer_menu">O Nas</Link>
              <Link to="/sluzby" className="classic_link footer_menu">Info Pre Firmy</Link>
              <Link to="/ponuka_prace" className="classic_link footer_menu">Pracovne Pozicie</Link>
              <Link to="/blog" className="classic_link footer_menu">Blog</Link>
              <Link to="/kontakt" className="classic_link footer_menu">Kontakt</Link>
            </Grid>
            <Grid item xs={3} className="responsive_footer">
              <p className="footer_kontakt">tel.: 0917 237 471</p>
              <p>adresa.: moldavska cesta 43/A</p>
              <p>mail.: <a className="classic_link" href="mailto:pas.services.ke@gmail.com">pas.services.ke@gmail.com</a></p>
                
              <a href="https://www.facebook.com/passervices.sk/" rel="noopener noreferrer" target="_blank"><Icon className='facebook' /></a>
              <a href="mailto:pas.services.ke@gmail.com"><Icon className='mail' /></a>
              <a href="https://www.google.com/maps/place/Moldavsk%C3%A1+cesta+43,+040+11+Ko%C5%A1ice/@48.7008844,21.2371226,17z/data=!4m5!3m4!1s0x473ee01a682c3771:0xa87216d493a8ffd3!8m2!3d48.7008703!4d21.2388607" rel="noopener noreferrer" target="_blank"><Icon className='place' /></a>
            </Grid>
        </Grid>
        </ServicesMargin>
        </div>
      </ServicesWrapper>
    );
  }
}

export default Footer
