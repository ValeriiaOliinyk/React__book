import React from 'react';
import styles from './Contact.module.css';

const Contact = ({ name, number, onDeleteContact, id }) => (
  <>
    <p className={styles.text}>
      {name}: {number}
    </p>
    <button onClick={() => onDeleteContact(id)} className={styles.button}>
      Delete
    </button>
  </>
);

export default Contact;
