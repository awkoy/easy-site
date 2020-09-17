import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import EeasySection from '../components/Landing/EasySection'
import AboutSection from '../components/Landing/AboutSection'
import FreeSection from '../components/Landing/FreeSection'
import HowSection from '../components/Landing/HowSection'
import PriceSection from '../components/Landing/PriceSection'
import OkaySection from '../components/Landing/OkaySection'
import CheapestSection from '../components/Landing/CheapestSection'
import EcommerceSection from '../components/Landing/EcommerceSection'
// import CompareSection from '../components/Landing/CompareSection'
import FeedbackSection from '../components/Landing/FeedbackSection'

export const IndexPageTemplate = ({
  easy,
  about,
  free,
  how,
  shops,
  feedbacks,
  okay,
  cheapest,
  landing_images
}) => {
  console.log('data', shops)
  return (
    <>
      <EeasySection easy={easy} landing_images={landing_images} />
      <AboutSection about={about} />
      <FreeSection free={free} />
      <HowSection how={how} />
      <PriceSection />
      <OkaySection okay={okay} />
      <CheapestSection cheapest={cheapest} />
      <EcommerceSection shops={shops} />
      {/* <CompareSection /> */}
      <FeedbackSection feedbacks={feedbacks} />
    </>
  )
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <IndexPageTemplate
        easy={frontmatter.easy}
        about={frontmatter.about}
        free={frontmatter.free}
        how={frontmatter.how}
        shops={frontmatter.shops}
        feedbacks={frontmatter.feedbacks}
        okay={frontmatter.okay}
        cheapest={frontmatter.cheapest}
        landing_images={frontmatter.landing_images}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        easy {
          title_top
          title_bottom
          subtitle
        }
        about {
          image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          title
          text
        }
        free {
          image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          title
          subtitle
          text
        }
        how {
          title
          order_steps {
            title
            text
          }
          buy_steps {
            title
            text
          }
        }
        shops {
          title
          subtitle
          list {
            shop {
              publicURL
            }
          }
        }
        feedbacks {
          title
          list {
            feedback {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
        }
        okay {
          image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          title
          list {
            text
          }
        }
        cheapest {
          title
          products {
            name
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
            compare {
              logo {
                publicURL
              }
              title
              duration
              price
            }
          }
        }
        landing_images {
          easy1 {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          easy2 {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          easy3 {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          easy4 {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          easy5 {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`
