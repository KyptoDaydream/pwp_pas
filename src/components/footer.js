import React from "react"
import styled from "styled-components"
import Grid from '@material-ui/core/Grid';

const ServicesWrapper = styled.div `
  width: 100%;
  background: black;
  padding: 50px;
`
const ServicesMargin = styled.div`
  max-width: 940px;
  margin: 0 auto;
  color: white;
`
class Footer extends React.Component {

  render () {
    return (
      <ServicesWrapper>
        <ServicesMargin>
          <Grid container spacing={24}>
            <Grid item xs={6}>
              <h5>Newsletter</h5>
            </Grid>
            <Grid item xs={3}>
              <h5>Menu</h5>
              <ul>
                <li>O Nas</li>
                <li>Info Pre Firmy</li>
                <li>Pracovne Pozicie</li>
                <li>Blog</li>
                <li>Kontakt</li>
              </ul>
            </Grid>
            <Grid item xs={3}>
              <h5>Kontakt</h5>
            </Grid>
        </Grid>
        </ServicesMargin>
      </ServicesWrapper>
    );
  }
}

export default Footer
