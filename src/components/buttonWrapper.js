import React from "react"
import styled from "styled-components"
import ButtonBig from "./button_big"

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px 0px 80px 0px;
`

const ButtonContainerSmallPadding = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px 0px 0px 0px;
`

class ButtonWrapper extends React.Component {
  render() {
    if (this.props.smallPadding) {
      return (
        <ButtonContainerSmallPadding>
          <ButtonBig
            buttonLink={this.props.buttonLink}
            buttonText={this.props.buttonText}
          />
        </ButtonContainerSmallPadding>
      )
    }
    return (
      <ButtonContainer>
        <ButtonBig
          buttonLink={this.props.buttonLink}
          buttonText={this.props.buttonText}
        />
      </ButtonContainer>
    )
  }
}

export default ButtonWrapper
