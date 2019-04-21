import React from "react"
import styled from "styled-components"
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import arrow from '../assets/arrow_expand.svg'
import side_image from '../assets/side_image.jpg'
import Divider from './Divider'
import ButtonWrapper from './buttonWrapper'

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
`
const ExpandIcon = styled.div`
  background: url(${arrow});
  width: 24px;
  height: 24px;
`
class PageLayout extends React.Component {
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
            <Grid item xs={4}></Grid>
            <Grid item xs={8} className="text_wrapper">
          
              <p>
              Všetky služby sú poskytované na základe povolenia sprostredkovania zamestnania, vydané Ústredím Práce Sociálnych vecí a Rodiny v Bratislave. Našim hlavným cieľom je poskytovať kvalitné služby a tak budovať dlhodobý partnerský vzťah s klientom a obchodnými partnermi založený na dôvere a spokojnosti.
              </p>
              <div className="title_wrapper">
              <h1 className="service_name">agentura zamestnania</h1>
              <h1 className="services">Logistika, priemysel, stavebníctvo a administratíva</h1>
              </div>
              <ExpansionPanel classes={{ root: 'expanable_panel' }} expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                <ExpansionPanelSummary classes={{ root: 'expanable_title' }} expandIcon={<ExpandIcon />}>
                  <p>Vyhľadáme pracovníkov podľa Vašich stanovených požiadaviek</p>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <ul> 
                    <li>Vyriešime nárazové alebo sezónne pracovné sily</li>
                    <li>Zastrešíme problém výpadku Vášho kmeňového zamestnanca</li>
                  </ul>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel classes={{ root: 'expanable_panel' }} expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
                <ExpansionPanelSummary classes={{ root: 'expanable_title' }} expandIcon={<ExpandIcon />}>
                  <p>Kompletný mzdový servis je na nás</p>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <p>
                  Vaša spoločnosť nebude vykazovať zamestnancovi mesačnú mzdu, neodvádza za zamestnanca dane, neplatí sociálne a zdravotné poistenie
                  </p>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel classes={{ root: 'expanable_panel' }} expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
                <ExpansionPanelSummary classes={{ root: 'expanable_title' }} expandIcon={<ExpandIcon />}>
                  <p>Znížime Vaše náklady spojených s vyhľadaním a umiestnením personálu a uľahčíme tento proces</p>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <ul> 
                    <li>Náklady pri výbere, vyhľadávaní a zaškolení pracovníkov budú nulové.</li>
                    <li>Zabezpečíme uzatvorenie pracovných zmlúv s pridelenými zamestnancami</li>
                    <li>Prevezmeme všetky potrebné pracovno-právne úkony, personálnu a mzdovú agendu voči zamestnancovi</li>
                    <li>Vždy zabezpečíme/pridelíme skúsené koordinátora </li>
                  </ul>
                </ExpansionPanelDetails>
              </ExpansionPanel>

         
              <div className="title_wrapper">
              <h1 className="service_name">agentura služieb</h1>
              <h1 className="services">Služby so starostlivosťou o klienta 24/7</h1>
              </div>
              <ExpansionPanel classes={{ root: 'expanable_panel' }} expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
                <ExpansionPanelSummary classes={{ root: 'expanable_title' }} expandIcon={<ExpandIcon />}>
                  <p>Zabezpečenie prepravy do 3,5t v rámci SR a EÚ</p>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <ul>
                    <li>Vyzdvihnutie tovaru z Košického, Prešovského kraja</li>
                    <li>Expresná doprava v rámci SR do 12h</li>
                    <li>Expresná doprava v rámci EÚ do 24h</li>
                    <li>Automatické poistenie tovaru</li>
                  </ul>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel classes={{ root: 'expanable_panel' }} expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')}>
                <ExpansionPanelSummary classes={{ root: 'expanable_title' }} expandIcon={<ExpandIcon />}>
                  <p>Upratovacie služby</p>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <ul>
                    <li>Upratovacie služby poskytujeme v interiéry a exteriéry</li>
                    <li>Kancelárske a skladové priestory</li>
                    <li>Zabezpečíme vám upratovanie s kvalitnými prostriedkami a vyškoleným tímom</li>
                    <li>Doplnková služba - Kosenie trávy</li>
                  </ul>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel classes={{ root: 'expanable_panel' }} expanded={expanded === 'panel6'} onChange={this.handleChange('panel6')}>
                <ExpansionPanelSummary classes={{ root: 'expanable_title' }} expandIcon={<ExpandIcon />}>
                  <p>služby zamestnancom</p>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <ul>
                    <li>Zabezpečenie firemných akcii, cateringov, voľnočasový program</li>
                    <li>Kompletná organizácia firemnej akcie</li>
                    <li>Externé zabezpečenie cateringu vo vašej firme</li>
                    <li>Originálne nápady</li>
                  </ul>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <Divider height="70px" />
              <ButtonWrapper buttonText='o nás' buttonLink='/asd/' />
            </Grid>
          </Grid>
        </ServicesMargin>
      </ServicesWrapper>
    );
  }
}

export default PageLayout
