import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import logo from "../assets/logo_footer.png"
import image from "../assets/slide_9.jpg"
import { Link } from "gatsby"
import fb_orange from "../assets/fb_orange.svg"
import mail_orange from "../assets/mail_orange.svg"
import place_orange from "../assets/place_orange.svg"

const ServicesWrapper = styled.div`
  background: url(${image});
  background-size: cover;
  width: 100%;
  .gradient_bg {
    display: block;
    width: 100%;
    padding: 50px;
    background: linear-gradient(
      180deg,
      rgba(0, 17, 39, 0.44),
      rgba(0, 17, 39, 0.44) 1%,
      rgba(0, 17, 39, 0.6) 10%,
      rgba(0, 17, 39, 1) 65%,
      rgba(0, 17, 39, 1) 73%
    );
  }
  .footer_logo {
    max-width: 200px;
    margin-top: 30px;
  }
  .classic_link {
    color: var(--main_white);
    clear: "both";
  }
  .footer_title {
    color: var(--main-yellow);
    text-transform: uppercase;
    padding-top: 35px;
    font-weight: 900;
  }
  .footer_menu {
    display: inline-block;
    float: left;
    clear: left;
  }
  .footer_menu:first-of-type {
    margin-top: 25px;
  }
  .classic_link.footer_menu,
  .responsive_footer .classic_link {
    position: relative;
    background-image: none;
  }
  .classic_link.footer_menu:hover,
  .responsive_footer .classic_link:hover {
    text-decoration: underline;
    text-decoration-color: var(--main-yellow);
  }

  .classic_link.footer_menu:before {
    position: absolute;
    left: -15px;
    width: 5px;
    height: 5px;
    top: 7px;
    border-radius: 10px;
    background-color: var(--main-yellow);
    content: "";
    display: block;
  }
`
const ServicesMargin = styled.div`
  max-width: 940px;
  margin: 0 auto;
  color: var(--main-white);
  .responsive_footer p {
    margin-bottom: 5px;
    margin-top: 0;
    &.footer_kontakt,
    &.footer_text {
      margin-top: 25px;
    }
  }
  @media (max-width: 640px) {
    .responsive_footer {
      flex-basis: 100%;
      max-width: 100%;
    }
    .footer_title {
      display: none;
    }
    .responsive_footer.menu {
      margin-left: 20px;
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
  render() {
    return (
      <ServicesWrapper>
        <div className="gradient_bg">
          <ServicesMargin>
            <Grid container spacing={24}>
              <Grid item xs={6} className="responsive_footer">
                <img alt="logo" className="footer_logo" src={logo} />
                <p className="footer_text">
                  Náš úspech je našim záväzkom a motiváciou napredovať a byť
                  strategickým partnerom
                </p>
              </Grid>
              <Grid item xs={3} className="responsive_footer menu">
                <p className="footer_title">MENU</p>
                <Link to="/o_nas" className="classic_link footer_menu">
                  O nás
                </Link>
                <Link
                  to="/personalna_agentura"
                  className="classic_link footer_menu"
                >
                  Personálna agentúra
                </Link>
                <Link to="/dopravca" className="classic_link footer_menu">
                  Dopravca do 3.5t
                </Link>
                <Link
                  to="/upratovaci_servis"
                  className="classic_link footer_menu"
                >
                  Upratovací servis
                </Link>
                <Link
                  to="/organizovanie_eventov"
                  className="classic_link footer_menu"
                >
                  Organizovanie eventov
                </Link>
                <Link to="/ponuka_prace" className="classic_link footer_menu">
                  Pracovné Pozície
                </Link>
                <Link to="/gdpr" className="classic_link footer_menu">
                  GDPR
                </Link>
                {/*<Link to="/blog" className="classic_link footer_menu">Blog</Link>*/}
                <Link to="/kontakt" className="classic_link footer_menu">
                  Kontakt
                </Link>
              </Grid>
              <Grid item xs={3} className="responsive_footer">
                <p className="footer_title">KONTAKT</p>
                <p className="footer_kontakt">+421-(0)917 237 471</p>
                <p>Moldavská 43/A, 1. poschodie</p>
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
                <a href="mailto:pas.services.ke@gmail.com">
                  <Icon className="mail" />
                </a>
                <a
                  href="https://www.google.com/maps/place/Moldavsk%C3%A1+cesta+43,+040+11+Ko%C5%A1ice/@48.7008844,21.2371226,17z/data=!4m5!3m4!1s0x473ee01a682c3771:0xa87216d493a8ffd3!8m2!3d48.7008703!4d21.2388607"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon className="place" />
                </a>
              </Grid>
            </Grid>
          </ServicesMargin>
        </div>
      </ServicesWrapper>
    )
  }
}

export default Footer
