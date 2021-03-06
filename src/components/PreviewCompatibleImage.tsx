import React from 'react';
import Img from 'gatsby-image';

interface imageInfoType {
  imageInfo: {
    image: string;
    childImageSharp?: any;
    alt: string;
  };
}

const PreviewCompatibleImage = ({
  imageInfo,
}: imageInfoType) => {
  const imageStyle = {
    borderRadius: '5px',
    paddingTop: '56.25%',
    height: '0px',
  };
  const { alt = '', childImageSharp, image } = imageInfo;

  if (
    !!image &&
    typeof image.childImageSharp !== 'undefined'
  ) {
    return (
      <Img
        style={imageStyle}
        fluid={image.childImageSharp.fluid}
        alt={alt}
      />
    );
  }

  if (!!childImageSharp) {
    return (
      <Img
        style={imageStyle}
        fluid={childImageSharp.fluid}
        alt={alt}
      />
    );
  }

  if (!!image && typeof image === 'string')
    return <img style={imageStyle} src={image} alt={alt} />;

  return null;
};

export default PreviewCompatibleImage;
