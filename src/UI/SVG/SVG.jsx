import PropTypes from 'prop-types';

export const SVG = prop => {
  const {className, url, width, height, alt} = prop;
  return <img
    className={className}
    src={url}
    alt={alt}
    width={width}
    height={height}
  />;
};

SVG.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
