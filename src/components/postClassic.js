import React from "react"
import styled from "styled-components"

const Paper = styled.div `
  border-radius: 6px;
  background: white;
  height: 330px;
  overflow: hidden;
  position: relative;
  .picture_wrapper {
    height: 170px;
    width: 100%;
    overflow: hidden;
  }
  .picture {
    background: url(${props => props.props});
    background-size: cover;
    background-position: center center;
    height: 100%;
    transition: 1s;
    &:after {
      transition: 1s;
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      background: black;
      opacity: 0.3;
    }
  }
  &:hover {
    .picture {
      transform: scale(1.1);
      &:after {
        opacity: 0.6;
      }
    }
  }
  h3 {
    padding: 10px 25px 0 25px;
    font-family: 'Roboto Condensed', sans-serif;
    color: black;
    font-weight: 900;
    font-size: 16px;
    &:hover {
      color: orange;
    }
  }
  .showcase_classic_link {
    text-decoration: none;
  }
  .showcase_classic_link_2 {
    position: absolute;
    bottom: 20px;
    left: 25px;
    color: orange;
  }
`
class PostCLassic extends React.Component {
  render () {
    const post_data = this.props.data.node.frontmatter
    return (
      <Paper props={post_data.thumbnail}>
        <a className="showcase_classic_link" href={post_data.path}>
          <div className="picture_wrapper">
            <div className="picture" />
          </div>
          <h3>{post_data.title}</h3>
          <span className="showcase_classic_link_2">precitat článok</span>
        </a>
      </Paper> 
    );
  }
}

export default PostCLassic
