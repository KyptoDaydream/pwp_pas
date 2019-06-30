import React from "react"
import styled from "styled-components"
import Grid from '@material-ui/core/Grid';
// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import arrow from '../assets/arrow_expand.svg'
import side_image from '../assets/side_image.jpg'
import Divider from './divider'
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
    .info_text {
      padding-bottom: 0px;
    }
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
/* const ExpandIcon = styled.div`
  background: url(${arrow});
  width: 24px;
  height: 24px;
`*/
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
    // const { expanded } = this.state;
    return (
      <ServicesWrapper>
        <SideImage />
        <ServicesMargin>
        <Grid container spacing={24}>
            <Grid item xs={4} className="responsive_grid_1"></Grid>
            <Grid item xs={8} className="responsive_grid_2">
            <div className="title_wrapper">
              <h1 className="service_name">naše služby</h1>
              <h1 className="services">Služby so starostlivostou o klienta 24/7</h1>
              <Divider height="70px" />
              <p className="text_title">
                Personálna agentúra 
              </p>
              <ul> 
                <li>Kompletná personálna agenda a mzdový servis pre zamestnávateľov</li>
                <li>Vyhľadávanie pracovníkov pre firmy</li>
                <li>Vyhľadávania pracovných miest v oblastiach: logistika, priemysel, stavebníctvo a administratíva</li>
              </ul>
              <Divider height="25px" />
              <ButtonWrapper buttonText='Personálna agentúra' buttonLink='/personalna_agentura' />
              <Divider height="40px" />
              <p className="text_title">
                Dopravca do 3.5t
              </p>
              <ul> 
                <li>Vyzdvihnutie tovaru z Košického a Prešovského kraja</li>
                <li>Doprava v rámci SR a EÚ</li>
              </ul>
              <Divider height="25px" />
              <ButtonWrapper buttonText='Dopravca do 3.5t' buttonLink='/dopravca' />
              <Divider height="40px" />
              <p className="text_title">
                Upratovací servis 
              </p>
              <ul> 
                <li>Ponuka upratovacieho servisu</li>
                <li>Viacero typov upratovacích intervalov</li>
                <li>Maximálna snaha o efektívnosť a kvalitu vykonávaných prác</li>
                <li>Doplnková služba - údržba a kosenie vonkajších trávnatých plôch</li>
              </ul>
              <Divider height="25px" />
              <ButtonWrapper buttonText='Upratovací servis' buttonLink='/upratovaci_servis' />
              <Divider height="40px" />
              <p className="text_title">
                Zabezpečenie a organizovanie firemných akcií
              </p>
              <ul> 
                <li>Organizovanie outdorových a indorových eventov</li>
                <li>Catering priamo k vám do firmy alebo na Vami určené miesto</li>
              </ul>
              <Divider height="25px" />
              <ButtonWrapper buttonText='Organizovanie eventov' buttonLink='/organizovanie_eventov' />
              <Divider height="40px" />
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={24}>
            <Grid item xs={4} className="responsive_grid_1"></Grid>
            <Grid item xs={8} className="responsive_grid_2">
              <div className="title_wrapper">
              <h1 className="service_name">komplexnosť a flexibilita</h1>
              <h1 className="services">Sme partner, na ktorého sa môžete spoľahnúť</h1>
              <p className="info_text">
              Pracovníci spoločnosti PaS Services s.r.o. tvoria najdôležitejšie prepojenie medzi viacerými štruktúrami spoločnosti. Kvalita služieb poskytovaných našou firmou je zameraná na spokojnosť zákazníka a objednávateľa. Organizácia monitoruje potreby, ktoré sú odrazom našich služieb v oblasti logistiky.
              </p>
              <Divider height="50px" />
              <p className="text_title">
                Čo získate spoluprácou s našou agentúrou? 
              </p>
              <ul>
                <li>Zabezpečíme uzatvorenie pracovných zmlúv s pridelenými zamestnancami</li>
                <li>Vyhľadáme pracovníkov podľa Vašich stanovených požiadaviek</li>
                <li>Vyriešime nárazové alebo sezónne pracovné sily </li>
                <li>Zastrešíme problém výpadku Vášho kmeňového zamestnanca</li>
                <li>Znížime Úsporu Vašich nákladov spojených s vyhľadaním a umiestnením personálu</li>
                <li>Náklady pri výbere, vyhľadávaní a zaškolení pracovníkov budú nulové</li>
                <li>Vaša spoločnosť nebudee vykazovať zamestnancovi mesačnú mzdu., neodvádza za zamestnanca dane, neplatí sociálne a zdravotné poistenie.t.j. Kompletný mzdový servis je na nás</li>
                <li>Prevezmeme všetky potrebné pracovno-právne úkony, personálnu a mzdovú agendu voči zamestnancovi</li>
              </ul>
              <Divider height="70px" />
              <ButtonWrapper buttonText='o nás' buttonLink='/o_nas' />
              </div>
            </Grid>
          </Grid>
        </ServicesMargin>
      </ServicesWrapper>
    );
  }
}



export default PageLayout
