import React from "react"
import styled from "styled-components"
import Grid from '@material-ui/core/Grid';
import side_image from '../assets/side_image_4.jpg'
import Divider from './divider'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import ButtonWrapper from '../components/buttonWrapper'

const ServicesWrapper = styled.div `
  width: 100%;
  padding: 50px;
  position: relative;
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: calc(30% + 15px);
    bottom: 0;
    right: 15px;
    background-color: #fff;
    -webkit-box-shadow: 0 20px 40px 0 rgba(0,0,0,.05);
    box-shadow: 0 20px 40px 0 rgba(0,0,0,.05);
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
          color: var(--main-yellow)
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
const SideImage = styled.div `
  position: absolute;
  top: 170px;
  left: 0;
  background: url(${side_image});
  width: 20%;
  height: 600px;
  background-position: right;
  background-size: cover;
  -webkit-box-shadow: 0 20px 40px 0 rgba(0,0,0,.2);
  box-shadow: 0 20px 40px 0 rgba(0,0,0,.2);
  @media (max-width: 980px) {
    display: none;
  }
`
class PageLayoutAbout extends React.Component {
  render () {
    return (
      <ServicesWrapper>
        <SideImage />
        <ServicesMargin>
        <Grid container spacing={24}>
            <Grid item xs={4} className="responsive_grid_1"></Grid>
            <Grid item xs={8} className="text_wrapper responsive_grid_2">
              <div className="title_wrapper">
              <h1 className="service_name">kontakt</h1>
              <h1 className="services">Všetky potrebné informácie pre kontakt s nami</h1>
              </div>
              <p>
              Spoločnosť PaS Services s.r.o. je jednou z firiem, ktorá ponúka na trh svoju kvalitu v logistike, doprave a špedícii, ale taktiež aj iných odvetviach.                                               
              </p>
              <Divider height="70px" />
              <ButtonWrapper buttonText='Napíšte Nám' buttonLink='mail' />
              <Divider height="10px" />
              <p className="text_title">
                Firemné údaje
              </p>
              <ul>
                <li>názov spoločnosti: PaS Services spol. s r. o.</li>
                <li>sídlo spoločnosti: Starozagorská 41, 040 23 Košice</li>
                <li>konateľ: Ing. Milan Kyjovský</li>
                <li>IČO: 50750178</li>
                <li>DIČ: 2120458901</li>
                <li>IČ DPH:SK2120458901</li>
                <li>zapísaná v obchodnom registri Okresného súdu Košice I, oddiel Sro, vložka číslo: 40907/V</li>
              </ul>
              <Divider height="70px" />
              <p className="text_title">
                Kontakt
              </p>
              <ul>
                <li>adresa agentúry a kancelárie prvého kontaktu: Moldavská 43/A, 1. poschodie</li>
                <li>e-mail: <a href="mailto:agenturapas@agenturapas.sk">agenturapas@agenturapas.sk</a></li>
                <li>telefón/mobil: +421-(0)917-237-471</li>
              </ul>
              <Divider height="30px" />
              <ul>
                <li>Kyjovský: <a href="mailto:kyjovsky@agenturapas.sk">kyjovsky@agenturapas.sk</a></li>
                <li>Ballok: <a href="mailto:ballok@agenturapas.sk">ballok@agenturapas.sk</a></li>
                <li>Matis: <a href="mailto:matis@agenturapas.sk">matis@agenturapas.sk</a></li>
              </ul>
              <Divider height="70px" />
              <div style={{position: 'relative', height: '300px'}}>
              <Map
                style={{width: '100%', height: '300px', position: 'relative'}}
                google={this.props.google}
                initialCenter={{
                    lat: 48.700554,
                    lng: 21.238518
                }}>
                <Marker
                  name={'PaS Services'}
                  position={{lat: 48.700554, lng: 21.238518}} />
            </Map>
            </div>
            </Grid>
          </Grid>
        </ServicesMargin>
      </ServicesWrapper>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCQiSC_G-QmJp9dfVTz4Yxpt1c-d-UAJzg')
})(PageLayoutAbout)

