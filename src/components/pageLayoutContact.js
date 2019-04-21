import React from "react"
import styled from "styled-components"
import Grid from '@material-ui/core/Grid';
import side_image from '../assets/side_image_4.jpg'
import Divider from './Divider'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

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
`
class PageLayoutAbout extends React.Component {
  render () {
    return (
      <ServicesWrapper>
        <SideImage />
        <ServicesMargin>
        <Grid container spacing={24}>
            <Grid item xs={4}></Grid>
            <Grid item xs={8} className="text_wrapper">
              <div className="title_wrapper">
              <h1 className="service_name">kontakt</h1>
              <h1 className="services">Všetky potrebné informácie pre kontakt s nami</h1>
              </div>
              <p>
              Spoločnosť PaS Services s.r.o. je jednou z firiem, ktorá ponúka na trh svoju kvalitu v logistike, doprave a špedícii, ale taktiež aj iných odvetviach.                                               
              </p>
              <Divider height="70px" />
              <ul>
                <li>Moldavska trieda 43/A</li>
                <li>0917 237 471</li>
                <li>pas.services.ke@gmail.com</li>
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

