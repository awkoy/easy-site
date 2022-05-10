import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import EasyImage from '../components/Common/EasyImg'

export const InfoPageTemplate = ({ title, content, preview, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="info">
      <div className="container">
        {preview ? <div className="info__preview">
          <EasyImage image={preview} />
        </div> : null}
        <h2 className="info__title">{title}</h2>
        <PageContent content={content} />
      </div>
    </section>
  )
}

InfoPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const InfoPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout isSecond>
      <InfoPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        preview={post.frontmatter.preview}
        content={post.html}
      />
    </Layout>
  )
}

InfoPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default InfoPage

export const infoPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }, frontmatter: { templateKey: { eq: "info-page" } }) {
      html
      frontmatter {
        title
        preview {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`