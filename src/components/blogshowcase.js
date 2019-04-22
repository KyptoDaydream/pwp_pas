import React from "react"
import styled from "styled-components"
import Heading from "./heading"
import Grid from '@material-ui/core/Grid'
// import PostWide from "./postWide"
// import PostClassic from "./postClassic"
import PostThumbnail from "./postThumbnail"
// import Button from "./button"

const BlogWrapper = styled.div `
  width: 100%;
  padding: 50px;
`
const BlogMargin = styled.div`
  max-width: 940px;
  margin: 0 auto;
  @media (max-width: 640px) {
    .responsive_blog {
      flex-basis: 100%;
      max-width: 100%;
    }
  }
`
class BlogShowcase extends React.Component {

  render () {
  const post_data = this.props.data.allMarkdownRemark.edges.filter(post => post.node.frontmatter.type === 'clanok');
    return (

      <BlogWrapper>
        <BlogMargin>
          <Heading title="blog" subtitle="Súhrn užitočných informácií, ktoré vás môžu zaujímať"/>
          <Grid container spacing={24}>
            <Grid item xs={4} className="responsive_blog">
              <PostThumbnail data={post_data[0]}/>
            </Grid>
            <Grid item xs={4} className="responsive_blog">
              <PostThumbnail data={post_data[1]}/>
            </Grid>
            <Grid item xs={4} className="responsive_blog">
              <PostThumbnail data={post_data[2]}/>
            </Grid>
        </Grid>
        </BlogMargin> 
      </BlogWrapper>

      /*<BlogWrapper>
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
      </BlogWrapper>*/
    );
  }
}

export default BlogShowcase
