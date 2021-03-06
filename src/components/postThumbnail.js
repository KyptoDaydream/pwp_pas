import React from "react"
import styled from "styled-components"

const PostWrapper = styled.div `
  .post_thumbnail {
    display: block;
    margin: 0 auto;
    width: 100%;
    height: 170px;
    object-fit: cover;
    box-shadow: 0px 21px 30px -19px rgba(0,0,0,0.5);
    transition: 0.2s;
  }
  .showcase_title_link {
    text-decoration: none;
  }
  .classic_link {
  }
  .classic_link:hover {
    text-decoration: underline;
  }
  :hover .post_thumbnail {
    display: block;
    margin: 2px auto 0 auto;
    box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.7);
    transition: 0.2s;
  }
  :hover h3 {
    color: orange;
    transition: 0.2s;
    margin-top: 23px;
  }
  :hover .classic_link {
    text-decoration: none;
    background-image: linear-gradient(to right, var(--main-yellow) 0%, var(--main-yellow) 100%);
    background-position: bottom;
    background-repeat: repeat-x;
    background-size: 100% 30%;
  }
`
class PostThumbnail extends React.Component {
  render () {
    const post_data = this.props.data.node.frontmatter
    return (
      <PostWrapper>
        <a href={post_data.path}>
          <img alt="thumbnail" className="post_thumbnail" src={post_data.thumbnail} />
        </a>
        <a className="showcase_title_link" href={post_data.path}><h3>{post_data.title}</h3></a>
        <div style={{textAlign: 'center'}}>
          <a className="classic_link" href={post_data.path}>celý článok</a>
        </div>
      </PostWrapper>
    );
  }
}

export default PostThumbnail
