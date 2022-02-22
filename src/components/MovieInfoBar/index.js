import React from 'react';
import PropTypes from 'prop-types';

// Helpers
import { calcTime, convertMoney } from '../../helpers';

// Styles
import { Wrapper, Content } from './MovieInfoBar.styles';

function MovieInfoBar({ time, budget, revenue }) {
  return (
    <Wrapper>
      <Content>
        <div className="column">
          <p>
            Running time:
            {calcTime(time)}
          </p>
        </div>
        <div className="column">
          <p>
            Budget:
            {convertMoney(budget)}
          </p>
        </div>
        <div className="column">
          <p>
            Revenue:
            {convertMoney(revenue)}
          </p>
        </div>
      </Content>
    </Wrapper>
  );
}

MovieInfoBar.propTypes = {
  time: PropTypes.number.isRequired,
  budget: PropTypes.number.isRequired,
  revenue: PropTypes.number.isRequired,
};

export default MovieInfoBar;
