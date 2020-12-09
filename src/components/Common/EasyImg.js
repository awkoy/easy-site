import React from 'react'
import Img from 'gatsby-image'

const EasyImage = ({ image = {} }) => {
  const { alt = '', childImageSharp, publicURL } = image

  if (!!childImageSharp) {
    return <Img fluid={childImageSharp.fluid} alt={alt} />
  }
  if (!!publicURL)
    return <img src={publicURL} alt={alt} />
  if (!!image && typeof image === 'string')
    return <img src={image} alt={alt} />

  return null
}

export default EasyImage
