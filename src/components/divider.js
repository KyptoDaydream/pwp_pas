import React from "react"
import styled from "styled-components"

const DividerWrapper = styled.div `
  height: ${props => props.props};
  width: 100%;
  }
`

class Divider extends React.Component {

  render () {
    return (
      <DividerWrapper props={this.props.height}/>
    );
  }
}

export default Divider