import React from 'react';

import PropTypes from 'prop-types';

// Styles
import { Wrapper, Content } from './Grid.styles';

function Grid({ header, children }) {
  return (
    <Wrapper>
      <h1>{header}</h1>
      <Content>{children}</Content>
    </Wrapper>
  );
}

Grid.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Grid;
