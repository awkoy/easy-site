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
  title_top,
  title_bottom,
  subtitle,
  about_title,
  about_text,
  free_section
}) => (
    <>
      <EeasySection title_top={title_top} title_bottom={title_bottom} subtitle={subtitle} />
      <AboutSection about_title={about_title} about_text={about_text} />
      <FreeSection free_section={free_section} />
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
  title_top: PropTypes.string,
  title_bottom: PropTypes.string,
  subtitle: PropTypes.string,
  about_title: PropTypes.string,
  about_text: PropTypes.string,
  free_section: PropTypes.array
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title_top={frontmatter.title_top}
        title_bottom={frontmatter.title_bottom}
        subtitle={frontmatter.subtitle}
        about_title={frontmatter.about_title}
        about_text={frontmatter.about_text}
        free_section={frontmatter.free_section}
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
        title_top
        title_bottom
        subtitle
        about_title
        about_text
        free_section
      }
    }
  }
`
