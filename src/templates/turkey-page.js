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

export const TurkeyPageTemplate = ({
    easy,
    turkey_images
}) => {
    return (
        <>
            <EeasySection easy={easy} turkey_images={turkey_images} />
            {/* <AboutSection about={about} />
      <FreeSection free={free} />
      <HowSection how={how} />
      <PriceSection />
      <OkaySection okay={okay} />
      <CheapestSection cheapest={cheapest} />
      <EcommerceSection shops={shops} /> */}
            {/* <CompareSection /> */}
            {/* <FeedbackSection feedbacks={feedbacks} /> */}
        </>
    )
}

const TurkeyPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark
    return (
        <Layout>
            <TurkeyPageTemplate
                easy={frontmatter.easy}
                turkey_images={frontmatter.turkey_images}
            />
        </Layout>
    )
}

TurkeyPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default TurkeyPage

export const pageQuery = graphql`
  query TurkeyPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "turkey-page" } }) {
      frontmatter {
        easy {
          title_top
          title_bottom
          subtitle
          link
        }
        profit {
          title
          things {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
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
        popular {
            title
            subtitle
            list {
              logo {
                childImageSharp {
                    fluid(maxWidth: 800) {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                }
              }
            }
        }
        shops {
          title
          shopslist {
              name
              logo {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
              description
              link
              prices {
                  type
                  cost
              }
          }
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
            list {
                title
                text
            }
        }
        service {
            delivery {
                title
                text
            }
            buy {
                title
                text
            }
            servicelist {
                title
                image {
                    childImageSharp {
                        fluid(maxWidth: 800) {
                          ...GatsbyImageSharpFluid_withWebp_noBase64
                        }
                      }
                }
            }
        }
        why {
            title
            text
            price
        }
        turkey_images {
          turkey1 {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          turkey2 {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          turkey3 {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          turkey4 {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          turkey5 {
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
