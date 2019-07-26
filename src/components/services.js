import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import arrow from "../assets/arrow_expand.svg"
import side_image from "../assets/side_image.jpg"
import ButtonSmall from "../components/button_small"
import Divider from "./divider"

const ServicesWrapper = styled.div`
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
`
const ServicesMargin = styled.div`
  max-width: 940px;
  margin: 0 auto;
  z-index: 999;
  .MuiPaper-rounded-5 {
    border-top: 1px solid black;
    box-shadow: none;
  }
  .MuiPaper-rounded-5:before {
    display: none;
  }
  .title_wrapper {
    position: relative;
    .info_text {
      padding-bottom: 60px;
    }
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
    ul {
      margin: 0;
      padding: 0;
      display: block;
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
  .expanable_content {
    display: block;
  }
`
const SideImage = styled.div`
  position: absolute;
  top: 250px;
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
const ExpandIcon = styled.div`
  background: url(${arrow});
  width: 24px;
  height: 24px;
`
class Services extends React.Component {
  state = {
    expanded: false,
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    })
  }

  render() {
    const { expanded } = this.state
    return (
      <ServicesWrapper>
        <SideImage />
        <ServicesMargin>
          <Grid container spacing={24}>
            <Grid item xs={4} className="responsive_grid_1" />
            <Grid item xs={8} className="responsive_grid_2">
              <div className="title_wrapper">
                <h1 className="service_name">naše služby</h1>
                <h1 className="services">
                  Služby so starostlivosťou o klienta 24/7
                </h1>
                <Divider height="70px" />
              </div>
              <ExpansionPanel
                classes={{ root: "expanable_panel" }}
                expanded={expanded === "panel1"}
                onChange={this.handleChange("panel1")}
              >
                <ExpansionPanelSummary
                  classes={{ root: "expanable_title" }}
                  expandIcon={<ExpandIcon />}
                >
                  <p>Personálna agentúra</p>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails classes={{ root: "expanable_content" }}>
                  <ul>
                    <li>
                      Kompletná personálna agenda a mzdový servis pre
                      zamestnávateľov
                    </li>
                    <li>Vyhľadávanie pracovníkov pre firmy</li>
                    <li>
                      Vyhľadávania pracovných miest v oblastiach: logistika,
                      priemysel, stavebníctvo a administratíva
                    </li>
                  </ul>
                  <ButtonSmall
                    buttonText="viac o službe"
                    buttonLink="/personalna_agentura"
                  />
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel
                classes={{ root: "expanable_panel" }}
                expanded={expanded === "panel2"}
                onChange={this.handleChange("panel2")}
              >
                <ExpansionPanelSummary
                  classes={{ root: "expanable_title" }}
                  expandIcon={<ExpandIcon />}
                >
                  <p>Dopravca do 3.5t</p>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails classes={{ root: "expanable_content" }}>
                  <ul>
                    <li>Vyzdvihnutie tovaru z Košického a Prešovského kraja</li>
                    <li>Doprava v rámci SR a EÚ</li>
                  </ul>
                  <ButtonSmall
                    buttonText="viac o službe"
                    buttonLink="/dopravca"
                  />
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel
                classes={{ root: "expanable_panel" }}
                expanded={expanded === "panel3"}
                onChange={this.handleChange("panel3")}
              >
                <ExpansionPanelSummary
                  classes={{ root: "expanable_title" }}
                  expandIcon={<ExpandIcon />}
                >
                  <p>Upratovací servis</p>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails classes={{ root: "expanable_content" }}>
                  <ul>
                    <li>Ponuka upratovacieho servisu</li>
                    <li>Viacero typov upratovacích intervalov</li>
                    <li>
                      Maximálna snaha o efektívnosť a kvalitu vykonávaných prác
                    </li>
                    <li>
                      Doplnková služba - údržba a kosenie vonkajších trávnatých
                      plôch
                    </li>
                  </ul>
                  <ButtonSmall
                    buttonText="viac o službe"
                    buttonLink="/upratovaci_servis"
                  />
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel
                classes={{ root: "expanable_panel" }}
                expanded={expanded === "panel5"}
                onChange={this.handleChange("panel5")}
              >
                <ExpansionPanelSummary
                  classes={{ root: "expanable_title" }}
                  expandIcon={<ExpandIcon />}
                >
                  <p>Zabezpečenie a organizovanie firemných akcií</p>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails classes={{ root: "expanable_content" }}>
                  <ul>
                    <li>Organizovanie outdorových a indorových eventov</li>
                    <li>
                      Catering priamo k vám do firmy, alebo na Vami určené
                      miesto
                    </li>
                  </ul>
                  <ButtonSmall
                    buttonText="viac o službe"
                    buttonLink="/organizovanie_eventov"
                  />
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Grid>
          </Grid>

          <Grid container spacing={24}>
            <Grid item xs={4} className="responsive_grid_1" />
            <Grid item xs={8} className="responsive_grid_2">
              <div className="title_wrapper">
                <h1 className="service_name">komplexnosť a flexibilita</h1>
                <h1 className="services">
                  Sme partner, na ktorého sa môžete spoľahnúť
                </h1>
                <p className="info_text">
                  Pracovníci spoločnosti PaS Services s.r.o. tvoria
                  najdôležitejšie prepojenie medzi viacerými štruktúrami
                  spoločnosti. Kvalita služieb poskytovaných našou firmou je
                  zameraná na spokojnosť zákazníka a objednávateľa. Organizácia
                  monitoruje potreby, ktoré sú odrazom našich služieb v oblasti
                  personálnych služieb, dopravy do 3.5t, upratovacieho servisu a
                  organizovania eventov.
                </p>
              </div>
            </Grid>
          </Grid>
        </ServicesMargin>
      </ServicesWrapper>
    )
  }
}

export default Services
