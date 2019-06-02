import React from "react"
import styled from "styled-components"
import Grid from '@material-ui/core/Grid';
import side_image from '../assets/side_image_2.jpg'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Divider from './divider'
import ButtonWrapper from './buttonWrapper'
import arrow from '../assets/arrow_expand.svg'

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
  .text_wrapper {
    position: relative;
  }  
  .MuiPaper-rounded-5 {
    border-top: 1px solid black;;
    box-shadow: none;
  }
  .MuiPaper-rounded-5:before {
    display: none;
  }
  .title_wrapper {
    position: relative;
  }
  .text_title {
    font-weight: 900;
    color: var(--main-yellow);
  }
  .expanable_panel {
    -webkit-box-shadow: none;
	  -moz-box-shadow: none;
    box-shadow: none;
    border-top: 1px solid var(--light-gray);
    margin-bottom: 20px;
    &:last-of-type {
      border-bottom: 1px solid var(--light-gray);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      padding-bottom: 20px;
    }
    &.last {
      border-bottom: 1px solid var(--light-gray);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      padding-bottom: 20px;
    }
    &:before {
      display: none;
    }
  }
  .expanable_title {
    font-weight: 600;
    transition: 0.3s;
    .MuiExpansionPanelSummary-expanded-130 {
      color: var(--main-yellow);
    }
    &:hover {
      color: var(--main-yellow);
    }
  }
`
const SideImage = styled.div `
  position: absolute;
  top: 250px;
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
const ExpandIcon = styled.div`
  background: url(${arrow});
  width: 24px;
  height: 24px;
`
class PageLayoutAbout extends React.Component {
  state = {
    expanded: false,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render () {
    const { expanded } = this.state;
    return (
      <ServicesWrapper>
        <SideImage />
        <ServicesMargin>
        <Grid container spacing={24}>
            <Grid item xs={4} className="responsive_grid_1"></Grid>
            <Grid item xs={8} className="text_wrapper responsive_grid_2">
              <div className="title_wrapper">
              <h1 className="service_name">personálna agentúra</h1>
              <h1 className="services">Vyriešime nárazové alebo sezónne pracovné sily</h1>
              </div>
              <ExpansionPanel classes={{ root: 'expanable_panel' }} expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                <ExpansionPanelSummary classes={{ root: 'expanable_title' }} expandIcon={<ExpandIcon />}>
                  <p>Kompletná personálna agenda a mzdový servis pre zamestnávateľov</p>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails classes={{ root: 'expanable_content' }}>
                  <ul> 
                    <li>Činnosť agentúry dočasného zamestnávania</li>
                    <li>Kompletné pracovno-právne úkony</li>
                    <li>Podpísanie zmlúv a dohôd</li>
                    <li>Právne poradenstvo</li>
                    <li>Zabezpečenie pracovníkov zamestnaných v súlade s legislatívou</li>
                    <li>Prehľad a okamžitá kontrola dochádzky pracovníkov v našom dochádzkovom systéme</li>
                    <li>Archivácia a ochrana osobných údajov podľa zákona č. 18/2018 Z.z</li>
                    <li>Služby so starostlivosťou o klienta 24/7</li>
                  </ul>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel classes={{ root: 'expanable_panel' }} expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
                <ExpansionPanelSummary classes={{ root: 'expanable_title' }} expandIcon={<ExpandIcon />}>
                  <p>Vyhľadávanie pracovníkov pre firmy</p>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails classes={{ root: 'expanable_content' }}>
                  <ul> 
                    <li>Nulové náklady pri vyhľadávaná pracovníkov</li>
                    <li>Vyriešime nárazové alebo sezónne pracovné sily</li>
                    <li>Zastrešíme problém výpadku Vášho kmeňového zamestnanca</li>
                    <li>Zníženie úspor vašich nákladov pri umiestnení personálu</li>
                    <li>Pokrytie jednoduchých a úzko špecializovaných pracovných pozícií</li>
                    <li>Selekcia CV a motivačných listov</li>
                    <li>Osobné pohovory s uchádzačmi o zamestnanie</li>
                  </ul>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel classes={{ root: 'expanable_panel last' }} expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
                <ExpansionPanelSummary classes={{ root: 'expanable_title' }} expandIcon={<ExpandIcon />}>
                  <p>Oblasti vyhľadávania pracovných miest</p>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails classes={{ root: 'expanable_content' }}>
                  <ul> 
                    <li>Logistika</li>
                    <li>Priemysel</li>
                    <li>Stavebníctvo</li>
                    <li>Administratíva</li>
                  </ul>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <Divider height="40px" />
              <div className="title_wrapper">
                <p className="info_text">
                  Všetky služby sú poskytované na základe povolenia sprostredkovania zamestnania, vydané Ústredím Práce Sociálnych vecí a Rodiny v Bratislave. Našim hlavným cieľom je poskytovať kvalitné služby a tak budovať dlhodobý partnerský vzťah s klientom a obchodnými partnermi založený na dôvere a spokojnosti.
                </p>
              </div>
              <Divider height="70px" />
              <ButtonWrapper buttonText='Nezáväzná cenová ponuka' buttonLink='mail' />
            </Grid>
          </Grid>
        </ServicesMargin>
      </ServicesWrapper>
    );
  }
}

export default PageLayoutAbout
