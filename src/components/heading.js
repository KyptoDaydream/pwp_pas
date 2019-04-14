import React from "react"
import styled from "styled-components"

const HeadingWrapper = styled.div `
  width: 100%;
  padding: 25px;
  text-align: center;
`
class Heading extends React.Component {

  render () {
    return (
      <HeadingWrapper>
        <h2>
          {this.props.title}
        </h2>
        <h2 className="subtitle">
          {this.props.subtitle}
        </h2>
      </HeadingWrapper>
    );
  }
}

export default Heading