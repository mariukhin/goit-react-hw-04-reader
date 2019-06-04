import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ onButtonClick, disabled }) => (
  <section className={styles.controls}>
    <button
      type="button"
      name="backBtn"
      className={styles.button}
      onClick={onButtonClick}
      disabled={disabled === 1}
    >
      Назад
    </button>
    <button
      type="button"
      name="upBtn"
      className={styles.button}
      onClick={onButtonClick}
      disabled={disabled === 12}
    >
      Вперед
    </button>
  </section>
);
Controls.propTypes = {
  disabled: PropTypes.number.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};
export default Controls;
