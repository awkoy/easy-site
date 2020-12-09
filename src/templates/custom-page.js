import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import EasyImage from '../components/Common/EasyImg'
import TextList from '../components/TextList'
import ProductList from '../components/ProductList'

export const CustomPageTemplate = ({ title, subtitle, productlist, textlist, content, preview, contentComponent }) => {
  const PageContent = contentComponent || Content
  return (
    <section className="custom-page">
      {preview ?
        <div className="container">
          <div className="custom-page__preview">
            <EasyImage image={preview} />
          </div>
        </div>
        : null}
      <div className="container container--content">
        <h2 className="custom-page__title">{title}</h2>
        {subtitle ? <div className="custom-page__subtitle">{subtitle}</div> : null}
        <PageContent className="custom-page__content" content={content} />
        {textlist ? <TextList textlist={textlist} /> : null}
      </div>
      {productlist ? <div className="container">
        <ProductList productlist={productlist} />
      </div> : null}
    </section>
  )
}

const CustomPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout isSecond>
      <CustomPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        textlist={post.frontmatter.textlist}
        productlist={post.frontmatter.productlist}
        preview={post.frontmatter.preview}
        content={post.html}
      />
    </Layout>
  )
}

CustomPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CustomPage

export const customPageQuery = graphql`
  query CustomPage($id: String!) {
    markdownRemark(id: { eq: $id }, frontmatter: { templateKey: { eq: "custom-page" } }) {
      html
      frontmatter {
        title
        subtitle
        textlist {
            title
            text
        }
        productlist {
            name
            link
            price
            image {
                childImageSharp {
                    fluid(maxWidth: 800) {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                  }
            }
        }
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