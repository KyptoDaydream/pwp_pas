import React from "react"
import styled from "styled-components"
import arrow_white from "../assets/arrow_white.svg"

const Paper = styled.div`
  height: 330px;
  display: block;
  overflow: hidden;
  position: relative;
  border-radius: 6px;
  .picture_wrapper {
    background: url(${props => props.props});
    background-size: cover;
    height: 330px;
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
  &:hover .picture_wrapper{
      transform: scale(1.1);
      &:after {
      opacity: 0.6;
    } 
  }
  h3 {
    font-family: 'Roboto Condensed', sans-serif;
      position: absolute;
      bottom: 50px;
      left: 40px;
      color: white;
      font-weight: 900;
      font-size: 16px;
  }
  .showcase_wide_link {
    position: absolute;
    bottom: 30px;
    left: 40px;
    color: white;
    font-weight: 700;
    transition: 1s;
    &:after {
      content: '';
    /* background: url(${arrow_white}); */
    display: inline-block;
    background-size: cover;
    margin-left: 15px;
    height: 10px;
    width: 10px;
    transition: 0.4s;
    }
  }
  &:hover .showcase_wide_link {
    color: orange;
  }
`
class PostWide extends React.Component {
  render () {
    const post_data = this.props.data.node.frontmatter
    return (
      <Paper props={post_data.thumbnail}>
      <a href={post_data.path}>
        <div className="picture_wrapper"/>
        <h3>{post_data.title}</h3>
        <span className="showcase_wide_link">precitat článok</span>
      </a>
      </Paper>
      
    );
  }
}

export default PostWide
