import React from "react"
import styled from "styled-components"
import Heading from "./heading"
import Grid from '@material-ui/core/Grid';
import PostWide from "./postWide"
import PostClassic from "./postClassic"

const BlogWrapper = styled.div `
  width: 100%;
  background: #eeeeee;
  padding: 50px;
`
const BlogMargin = styled.div`
  max-width: 940px;
  margin: 0 auto;
`
class BlogShowcase extends React.Component {

  render () {
  // const data = this.props.data.allMarkdownRemark.edges;
  const post_data = this.props.data.allMarkdownRemark.edges.filter(post => post.node.frontmatter.type === 'clanok');
  console.log(post_data);
    return (
      <BlogWrapper>
        <BlogMargin>
          <Heading title="Cenné rady" subtitle="Súhrn užitočných vecí, ktoré vás môžu zaujímať"/>
          <Grid container spacing={24}>
            <Grid item xs={8}>
              <PostWide data={post_data[0]}/>
            </Grid>
            <Grid item xs={4}>
              <PostClassic data={post_data[1]}/>
            </Grid>
            <Grid item xs={4}>
              <PostClassic data={post_data[2]}/>
            </Grid>
            <Grid item xs={4}>
              <PostClassic data={post_data[3]}/>
            </Grid>
            <Grid item xs={4}>
              <PostClassic data={post_data[4]}/>
            </Grid>
        </Grid>
        </BlogMargin>
      </BlogWrapper>
    );
  }
}

export default BlogShowcase
