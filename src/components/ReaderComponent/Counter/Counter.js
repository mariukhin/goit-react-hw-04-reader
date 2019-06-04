import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ activeIndex, itemTotal }) => (
  <p className={styles.counter}>
    {activeIndex}/{itemTotal}
  </p>
);
Counter.propTypes = {
  activeIndex: PropTypes.number,
  itemTotal: PropTypes.number,
};
Counter.defaultProps = {
  activeIndex: 0,
  itemTotal: 0,
};
export default Counter;
