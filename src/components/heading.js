import React from "react"
import styled from "styled-components"

const HeadingWrapper = styled.div `
  width: 100%;
  text-align: center;
  h1 {
    text-align: left;
    .service_name {
      margin-top: 0;
    }
  }
`
class Heading extends React.Component {

  render () {
    return (
      <HeadingWrapper>
        <h1 className="service_name">
          {this.props.title}
        </h1>
        <h1 className="services">
          {this.props.subtitle}
        </h1>
      </HeadingWrapper>
    );
  }
}

export default Heading