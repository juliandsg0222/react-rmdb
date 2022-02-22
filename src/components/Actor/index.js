import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { Wrapper, Image } from './Actor.styles';

function Actor({ name, character, imageUrl }) {
  return (
    <Wrapper>
      <Image src={imageUrl} alt="actor-thumb" />
      <h3>{name}</h3>
      <p>{character}</p>
    </Wrapper>
  );
}

Actor.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Actor;
