import React from "react"
import styled from "styled-components"
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import arrow from '../assets/arrow_expand.svg'
import side_image from '../assets/side_image.jpg'

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
class Services extends React.Component {
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
            <Grid item xs={8} className="responsive_grid_2">
            <div className="title_wrapper">
              <h1 className="service_name">agentura zamestnávania</h1>
              <h1 className="services">V oblastiach logistiky, priemyslu, stavebníctva a administratíve</h1>
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
              <ExpansionPanel classes={{ root: 'expanable_panel' }} expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
                <ExpansionPanelSummary classes={{ root: 'expanable_title' }} expandIcon={<ExpandIcon />}>
                  <p>Povolenie k činnosti</p>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <p>
                  Všetky služby sú poskytované na základe povolenia sprostredkovania zamestnania, vydané Ústredím Práce Sociálnych vecí a Rodiny v Bratislave. Našim hlavným cieľom je poskytovať kvalitné služby a tak budovať dlhodobý partnerský vzťah s klientom a obchodnými partnermi založený na dôvere a spokojnosti.
                  </p>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Grid>
          </Grid>

          <Grid container spacing={24}>
            <Grid item xs={4} className="responsive_grid_1"></Grid>
            <Grid item xs={8} className="responsive_grid_2">
            <div className="title_wrapper">
              <h1 className="service_name">servis pre firmy</h1>
              <h1 className="services">Služby so starostlivosťou o klienta 24/7</h1>
              </div>
              <ExpansionPanel classes={{ root: 'expanable_panel' }} expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
                <ExpansionPanelSummary classes={{ root: 'expanable_title' }} expandIcon={<ExpandIcon />}>
                  <p>Dopravca</p>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <ul>
                    <li>Vyzdvihnutie tovaru z Košického, Prešovského kraja</li>
                    <li>Expresná doprava v rámci SR do 12h</li>
                    <li>Expresná doprava v rámci EÚ do 24h</li>
                    <li>Automatické poistenie tovaru</li>
                    <li>Koordinácia dodania tovaru</li>
                  </ul>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel classes={{ root: 'expanable_panel' }} expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')}>
                <ExpansionPanelSummary classes={{ root: 'expanable_title' }} expandIcon={<ExpandIcon />}>
                  <p>Upratovacie služby</p>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <div>
                  <p>Upratovacie služby  sú poskytované:</p>
                  <ul>
                    <li>v interiéri a exteriéri</li>
                    <li>kancelárskych a skladových priestoroch</li>
                    <li>kvalitnými prostriedkami a vyškoleným tímom</li>
                  </ul>
                  <p>Doplnková služba - údržba a kosenie vonkajších trávnatých plôch firmy</p>
                  </div>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel classes={{ root: 'expanable_panel' }} expanded={expanded === 'panel6'} onChange={this.handleChange('panel6')}>
                <ExpansionPanelSummary classes={{ root: 'expanable_title' }} expandIcon={<ExpandIcon />}>
                  <p>Služby zamestnancom</p>
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
            </Grid>
          </Grid>
          
        </ServicesMargin>
      </ServicesWrapper>
    );
  }
}

export default Services
