import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

// Styles
import Image from './Thumb.styles';

function Thumb({ image, movieId, clickable }) {
  return (
    <div>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Image src={image} alt="movie-thumb" />
        </Link>
      ) : (
        <Image src={image} alt="movie-thumb" />
      )}
    </div>
  );
}

Thumb.propTypes = {
  image: PropTypes.string.isRequired,
  movieId: PropTypes.number.isRequired,
  clickable: PropTypes.bool.isRequired,
};

export default Thumb;
