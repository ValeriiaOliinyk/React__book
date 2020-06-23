import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

const ContactList = ({ array, onDeleteTodo }) => (
  <ul className={styles.list}>
    {array.map(({ name, number, id }) => (
      <li key={id} className={styles.item}>
        <p className={styles.text}>
          {name}: {number}
        </p>
        <button onClick={() => onDeleteTodo(id)} className={styles.button}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  array: PropTypes.array.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};

export default ContactList;
