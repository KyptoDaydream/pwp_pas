import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import Divider from "./divider"
import ButtonWrapper from "./buttonWrapper"
import WorkTable from "./workTable"

const ServicesWrapper = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  padding: 50px 0 50px 0;
  position: relative;
  background: #fff;
  @media (max-width: 980px) {
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
        color: var(--main-yellow);
      }
    }
  }
  .text_wrapper {
    position: relative;
  }
  .MuiPaper-rounded-5 {
    border-top: 1px solid black;
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
`
export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___start] }
          limit: 1000
        ) {
          edges {
            node {
              html
              frontmatter {
                path
                space
                position
                mzda
                type
              }
            }
          }
        }
      }
    `}
    render={data => (
      <ServicesWrapper>
        <ServicesMargin>
          <Grid container spacing={24}>
            <Grid item xs={12} className="text_wrapper responsive_grid_2">
              <WorkTable data={data} />
              <Divider height="50px" />
              <ButtonWrapper buttonText="Kontakt" buttonLink="/kontakt" />
            </Grid>
          </Grid>
        </ServicesMargin>
      </ServicesWrapper>
    )}
  />
)
