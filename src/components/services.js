import React from "react"
import styled from "styled-components"
import Heading from "./heading"
import Grid from '@material-ui/core/Grid';
import point_orange from "../assets/point_orange.svg"
import next_orange from "../assets/next_orange.svg"

const ServicesWrapper = styled.div `
  width: 100%;
  background: #ffffff;
  padding: 50px;
`
const ServicesMargin = styled.div`
  max-width: 940px;
  margin: 0 auto;
  ul {
    margin-top: 25px;
    li {
      list-style: none;
      position: relative;
      margin-bottom: 25px;
      span {
        display: block;
        margin-left: 30px;
        position: relative;
        margin-top: 7px;
        margin-bottom: 2px;
        &:before {
          width: 10px;
          height: 10px;
          position: absolute;
          top: 5px;
          left: -30px;
          content: '';
          background: url(${next_orange});
          background-size: cover;
        }
      }
      &:before {
        width: 15px;
        height: 15px;
        position: absolute;
        left: -30px;
        content: '';
        background: url(${point_orange});
        background-size: cover;
      }
    }
  }
`
const Divider = styled.div`
  height: 40px;
`
/* const TextBlok = styled.div`
  max-width: 600px;
  padding-top: 70px;
  padding-bottom: 70px;
  margin: 0 auto;
  text-align: center;
`*/
class Services extends React.Component {

  render () {
    return (
      <ServicesWrapper>
        <ServicesMargin>
          <Heading title="Stabilný partner pre Vaše dodávky služieb" subtitle="Sme sprostredkovateľská firma, ktorá pomáha firmám zabezpečiť pracovné miesta, podľa požiadaviek."/>
          <Divider />
          <Grid container spacing={24}>
            <Grid item xs={6}>
              <h4>Agentúra docasneho zamestnávania</h4>
              <ul>
                <li>vyhľadávanie pracovných miest v oblasti: Logistika, Priemysel, Stavebníctvo, Administratíva</li>
                <li>Expresné zabezpečenie služby do 24h</li>
                <li>Garantujeme servis k poskytovaným službám 24/7</li>
                <li>Zabezpečíme uzatvorenie pracovných zmlúv s pridelenými zamestnancami</li>
                <li>Náklady pri výbere, vyhľadávaní a zaškolení pracovníkov budú nulové</li>
                <li>Zastrešíme problém výpadku Vášho kmeňového zamestnanca </li>
                <li>Vyriešime nárazové alebo sezónne pracovné sily </li>
                <li>Zabezpečíme uzatvorenie pracovných zmlúv s pridelenými zamestnancami</li>
                <li>Prevezmeme všetky potrebné pracovno-právne úkony, personálnu a mzdovú agendu voči zamestnancovi.</li>
                <li>Vaša spoločnosť nebude vykazovať zamestnancovi mesačnú mzdu., neodvádza za zamestnanca dane, neplatí sociálne a zdravotné poistenie.t.j. Kompletný mzdový servis je na nás</li>
              </ul>
            </Grid>
            <Grid item xs={6}>
              <h4>Agentúra sluzieb</h4>
              <ul> 
                <li>Zabezpečenie prepravy do 3,5t v rámci SR a EÚ
                  <span>vyzdvihnutie tovaru z Košického, Prešovského kraja</span>
                  <span>expresná doprava v rámci SR do 12h </span>
                  <span>expresná doprava v rámci EÚ do 24h</span>
                  <span>automatické poistenie tovaru</span>
                </li>
                
                <li>Upratovacie služby
                  <span>upratovacie služby poskytujeme v interiéry a exteriéry</span>
                  <span>Kancelárske a skladové priestory</span>
                  <span>zabezpečíme vám upratovanie s kvalitnými prostriedkami a vyškoleným tímom</span>
                  <span>Kosenie trávy</span>
                </li>
                <li>služby zamestnancom 
                  <span>zabezpečenie firemných akcii, cateringov, voľnočasový program</span>
                  <span>kompletná organizácia firemnej akcie</span>
                  <span>originálne nápady</span>
                  <span>externé zabezpečenie cateringu vo vašej firme</span>
                </li>
              </ul>
            </Grid>
        </Grid>
        </ServicesMargin>
      </ServicesWrapper>
    );
  }
}

export default Services
