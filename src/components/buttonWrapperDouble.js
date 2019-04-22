import React from "react"
import styled from "styled-components"
import ButtonBig from "./button_big"

const ButtonContainer = styled.div `
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 100px 0px 80px 0px;
  @media (max-width: 640px) {
    flex-flow: column;
    align-items: center;
  }
}
`

class ButtonWrapperDouble extends React.Component {

  render () {
    return (
      <ButtonContainer>
        <ButtonBig buttonLink={this.props.buttonLink} buttonText={this.props.buttonText} />
        <ButtonBig buttonLink={this.props.buttonLink2} buttonText={this.props.buttonText2} />
      </ButtonContainer>
    );
  }
}

export default ButtonWrapperDouble