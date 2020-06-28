import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={styles.label}>
    Find contacts by name
    <br />
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={styles.input}
      placeholder="Type name... "
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
