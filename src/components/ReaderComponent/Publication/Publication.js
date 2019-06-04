import React from 'react';
import PropTypes from 'prop-types';
import styles from './Publication.module.css';

const Publication = ({ item }) => (
  <section className={styles.publication}>
    <h2 className={styles.title}>{item.title}</h2>
    <p className={styles.text}>{item.text}</p>
  </section>
);
Publication.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
export default Publication;
