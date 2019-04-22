import React from "react"
import styled from "styled-components"
import Grid from '@material-ui/core/Grid';
import pros1 from '../assets/pros1.svg'
import pros2 from '../assets/pros2.svg'
import pros3 from '../assets/pros3.svg'

const ProsWrapper = styled.div `
  width: 100%;
  padding: 50px;
  position: relative;
`
const ProsMargin = styled.div`
  max-width: 940px;
  margin: 0 auto;
  z-index: 999;
  @media (max-width: 480px) {
    .responsive_pros {
      flex-basis: 100%;
      max-width: 100%;
    }
  }
`
const ProsImage = styled.div`
  height: 100px;
  width: 100px;
  margin: 0 0 0 40px;
  background: url(${props => props.props});
  background-size: cover;
`
const ProsText = styled.div`
  margin: 40px 25px 25px 25px;
  font-weight: 700;
`
class Pros extends React.Component {

  render () {
    return (
      <ProsWrapper>
        <ProsMargin>
          <Grid container spacing={24}>
            <Grid item xs={4} className="responsive_pros">
              <ProsImage props={pros1}/>
              <ProsText>
                Služby "šijeme" na mieru na základe konzultácie s klientom
              </ProsText>  
            </Grid>
            <Grid item xs={4} className="responsive_pros">
              <ProsImage props={pros2}/>
              <ProsText>
                Klientom garantujeme servis k poskytovaným službám 24/7 a flexibilný prístup
              </ProsText> 
            </Grid>
            <Grid item xs={4} className="responsive_pros">
              <ProsImage props={pros3}/>
              <ProsText>
                Široké spektrum naších služieb zabezpečujeme expresne do 24h.
              </ProsText> 
            </Grid>
          </Grid>
        </ProsMargin>
      </ProsWrapper>
    );
  }
}

export default Pros