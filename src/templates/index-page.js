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
import CompareSection from '../components/Landing/CompareSection'
import FeedbackSection from '../components/Landing/FeedbackSection'

export const IndexPageTemplate = ({
  main_logo,
  title_top,
  title_bottom,
  subtitle,
  about_title,
  about_text,
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
    <>
      <EeasySection main_logo={main_logo} title_top={title_top} title_bottom={title_bottom} subtitle={subtitle} />
      <AboutSection />
      <FreeSection />
      <HowSection />
      <PriceSection />
      <OkaySection />
      <CheapestSection />
      <EcommerceSection />
      <CompareSection />
      <FeedbackSection />
    </>
  )

IndexPageTemplate.propTypes = {
  main_logo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title_top: PropTypes.string,
  title_bottom: PropTypes.string,
  subtitle: PropTypes.string,
  about_title: PropTypes.string,
  about_text: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        main_logo={frontmatter.main_logo}
        title_top={frontmatter.title_top}
        title_bottom={frontmatter.title_bottom}
        subtitle={frontmatter.subtitle}
        about_title={frontmatter.about_title}
        about_text={frontmatter.about_text}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
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
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
