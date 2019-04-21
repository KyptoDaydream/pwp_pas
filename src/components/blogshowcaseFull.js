import React from "react"
import styled from "styled-components"
import Grid from '@material-ui/core/Grid'
import PostThumbnail from "./postThumbnail"

const BlogWrapper = styled.div `
  width: 100%;
  padding: 50px;
`
const BlogMargin = styled.div`
  max-width: 940px;
  margin: 0 auto;
`
class BlogShowcaseFull extends React.Component {

  render () {
  const post_data = this.props.data.allMarkdownRemark.edges.filter(post => post.node.frontmatter.type === 'clanok');
    return (

      <BlogWrapper>
        <BlogMargin>
          <Grid container spacing={24}>
            {post_data.map(post =>
               <Grid item xs={4}>
                <PostThumbnail data={post}/>
               </Grid>)}
        </Grid>
        </BlogMargin> 
      </BlogWrapper>
    );
  }
}

export default BlogShowcaseFull
