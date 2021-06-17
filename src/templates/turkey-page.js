import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import EeasySection from '../components/Landing/EasySection'
import FeedbackSection from '../components/Landing/FeedbackSection'
import Profit from '../components/Turkey/Profit'
import HowItWorks from '../components/Turkey/HowItWorks'
import Popular from '../components/Turkey/Popular'
import About from '../components/Turkey/About'
import Services from '../components/Turkey/Services'
import Why from '../components/Turkey/Why'
import Prices from '../components/Turkey/Prices'
import Shops from '../components/Turkey/Shops'

export const TurkeyPageTemplate = ({
    easy,
    profit,
    how,
    popular,
    shops,
    about,
    service,
    why,
    prices,
    feedbacks,
    turkey_images
}) => {
    return (
        <div className="turkey-page">
            <EeasySection easy={easy} turkey_images={turkey_images} btnLink="FDS" />
            <Profit profit={profit} />
            <HowItWorks how={how} />
            <Popular popular={popular}/>
            <Shops shops={shops} />
            <About about={about} />
            <Services service={service} />
            <Why why={why} />
            <Prices prices={prices} />
            <FeedbackSection feedbacks={feedbacks} />
        </div>
    )
}

const TurkeyPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark
    return (
        <Layout>
            <TurkeyPageTemplate
                easy={frontmatter.easy}
                turkey_images={frontmatter.turkey_images}
                profit={frontmatter.profit}
                how={frontmatter.how}
                popular={frontmatter.popular}
                shops={frontmatter.shops}
                about={frontmatter.about}
                service={frontmatter.service}
                why={frontmatter.why}
                prices={frontmatter.prices}
                feedbacks={frontmatter.feedbacks}
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
            category
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
          title
          delivery {
            title
            text
            image {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
          }
          buy {
            title
            text
            image {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
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
          subtitle
          list {
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
        }
        prices {
          title
          text
          price
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
