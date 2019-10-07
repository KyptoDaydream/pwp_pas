import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import side_image from "../assets/side_image_4.jpg"
import Divider from "./divider"
import { Map, Marker, GoogleApiWrapper } from "google-maps-react"
import ButtonWrapper from "./buttonWrapper"
import arrow from "../assets/arrow_white.svg"

const ServicesWrapper = styled.div`
  width: 100%;
  padding: 50px;
  position: relative;
  .poucenie {
    color: var(--text-gray);
  }
  .poucenie:hover {
    text-decoration: underline;
    text-decoration-color: var(--main-yellow);
  }
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: calc(30% + 15px);
    bottom: 0;
    right: 15px;
    background-color: #fff;
    -webkit-box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.05);
    box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.05);
  }
  @media (max-width: 980px) {
    :before {
      left: 30px;
      right: 30px;
    }
    .responsive_grid_1 {
      display: none;
    }
    .responsive_grid_2 {
      flex-basis: 100%;
      max-width: 100%;
    }
  }
  form input {
    width: 100%;
    line-height: 40px;
    margin-top: 15px;
    padding-left: 15px;
    font-size: 14px;
    border: 0;
    border-bottom: 1px solid #cccccc;
  }
  form input[type="checkbox"] {
    display: inline-block;
    width: 20px;
  }
  form .button {
    text-align: center;
  }
  form textarea {
    border: 0px;
    line-height: 20px;
    padding: 15px;
    font-size: 14px;
    border-radius: 4px;
    max-height: 220px;
    height: 220px;
    max-width: 100%;
    resize: none;
    width: 100%;
    min-width: 100%;
    background: #f8f8f8;
    border-bottom: 1px solid #cccccc;
  }
  form .label_1 {
    margin-right: 70px;
  }
  form .radio_wrapper {
    margin-bottom: 30px;
    margin-top: 30px;
    padding-left: 15px;
  }
  form input[type="radio"] {
    display: inline-block;
    width: auto;
    padding-right: 20px;
    margin-right: 10px;
  }
  form button {
    background: linear-gradient(
      90deg,
      var(--main-pink) 0%,
      var(--main-yellow) 50%,
      var(--main-yellow) 100%
    );
    background-size: 200% 100%;
    transition: 0.8s;
    height: 75px;
    width: 310px;
    text-align: center;
    margin-bottom: 25px;
    border: 0;
    cursor: pointer;
    font-weight: 900;
    margin-right: 25px;
    margin-left: 25px;
    span {
      color: var(--main-white);
      text-decoration: none !important;
      line-height: 75px;
      transition: 0.8s;
      margin-left: 33px;
      font-size: 14px;
      :after {
        transition: 0.8s;
        content: "";
        width: 13px;
        height: 13px;
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
    &:hover {
      transition: 0.8s;
      background: linear-gradient(
        90deg,
        var(--main-pink) 0%,
        var(--main-yellow) 50%,
        var(--main-yellow) 100%
      );
      background-size: 200% 100%;
      background-position: right;
      span {
        margin-left: 0;
      }
      span:after {
        opacity: 1;
      }
    }
  }
`
const ServicesMargin = styled.div`
  max-width: 940px;
  margin: 0 auto;
  z-index: 999;
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      padding-left: 30px;
      padding-bottom: 15px;
      position: relative;
      &:before {
        content: "•";
        position: absolute;
        left: 0px;
        color: var(--main-yellow);
      }
    }
  }

  .text_title {
    font-weight: 900;
    color: var(--main-yellow);
  }
  .text_wrapper {
    position: relative;
  }
  .contact_iframe {
    width: 100%;
    height: 400px;
  }
`
const SideImage = styled.div`
  position: absolute;
  top: 170px;
  left: 0;
  background: url(${side_image});
  width: 20%;
  height: 600px;
  background-position: right;
  background-size: cover;
  -webkit-box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.2);
  @media (max-width: 980px) {
    display: none;
  }
`
class PageLayoutAbout extends React.Component {
  render() {
    return (
      <ServicesWrapper>
        <SideImage />
        <ServicesMargin>
          <Grid container spacing={24}>
            <Grid item xs={4} className="responsive_grid_1" />
            <Grid item xs={8} className="text_wrapper responsive_grid_2">
              <div className="title_wrapper">
                <h1 className="service_name">kontakt</h1>
                <h1 className="services">
                  Všetky potrebné informácie pre kontakt s nami
                </h1>
              </div>
              <p>
                Spoločnosť PaS Services s.r.o. je jednou z firiem, ktorá ponúka
                na trhu svoju kvalitu v personálnych službách, doprave,
                upratovacom servise a organizovaní eventov.
              </p>
              <Divider height="70px" />
              <p className="text_title">Kontaktný formulár</p>
              <form
                method="post"
                action="https://www.briskforms.com/go/715a785ffead4b4dbb21f0a42a2a7896"
              >
                <div className="radio_wrapper">
                  <input
                    type="radio"
                    id="contactChoice1"
                    name="predmet"
                    value="Reakcia na ponuku práce"
                    checked
                  />
                  <label className="label_1" for="contactChoice1">
                    Reakcia na ponuku práce
                  </label>
                  <input
                    type="radio"
                    id="contactChoice2"
                    name="predmet"
                    value="Vypracovanie cenovej ponuky"
                  />
                  <label for="contactChoice2">
                    Vypracovanie cenovej ponuky
                  </label>
                </div>
                <div>
                  <input
                    placeholder="Meno"
                    type="text"
                    id="name"
                    name="Meno"
                    required
                  />
                </div>
                <div>
                  <input
                    placeholder="Email"
                    type="email"
                    id="mail"
                    name="Email"
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Správa"
                    id="msg"
                    name="Správa"
                    required
                  />
                </div>
                <div>
                  <input type="checkbox" name="q" id="a-0" required autofocus />
                  <label for="a-0">
                    Súhlasím s odoslaním údajov. (
                    <a
                      className="poucenie"
                      href="https://www.agenturapas.sk/gdpr"
                    >
                      poučenie
                    </a>
                    )
                  </label>
                </div>
                <Divider height="40px" />
                <div className="button">
                  <button type="submit">
                    <span>Odoslať formulár</span>
                  </button>
                </div>
              </form>
              <Divider height="70px" />
              <p className="text_title">Firemné údaje</p>
              <ul>
                <li>názov spoločnosti: PaS Services spol. s r. o.</li>
                <li>sídlo spoločnosti: Starozagorská 41, 040 23 Košice</li>
                <li>konateľ: Ing. Milan Kyjovský</li>
                <li>IČO: 50750178</li>
                <li>DIČ: 2120458901</li>
                <li>IČ DPH:SK2120458901</li>
                <li>
                  zapísaná v obchodnom registri Okresného súdu Košice I, oddiel
                  Sro, vložka číslo: 40907/V
                </li>
              </ul>
              <Divider height="70px" />
              <p className="text_title">Kontakt</p>
              <ul>
                <li>
                  adresa agentúry a kancelárie prvého kontaktu: Moldavská 43/A,
                  1. poschodie
                </li>
                <li>
                  e-mail:{" "}
                  <a
                    href="mailto:agenturapas@agenturapas.sk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    agenturapas@agenturapas.sk
                  </a>
                </li>
                <li>telefón/mobil: +421-(0)917 237 471</li>
              </ul>
              <Divider height="70px" />
              <div style={{ position: "relative", height: "300px" }}>
                <Map
                  style={{
                    width: "100%",
                    height: "300px",
                    position: "relative",
                  }}
                  google={this.props.google}
                  initialCenter={{
                    lat: 48.700554,
                    lng: 21.238518,
                  }}
                >
                  <Marker
                    name={"PaS Services"}
                    position={{ lat: 48.700554, lng: 21.238518 }}
                  />
                </Map>
              </div>
              <Divider height="70px" />
              <ButtonWrapper buttonText="Napíšte Nám" buttonLink="mail" />
            </Grid>
          </Grid>
        </ServicesMargin>
      </ServicesWrapper>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCQiSC_G-QmJp9dfVTz4Yxpt1c-d-UAJzg",
})(PageLayoutAbout)
