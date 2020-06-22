import React from "react";

const ContactList = ({ array }) => (
  <ul>
    {array.map((contact) => (
      <li key={contact.id}>
        {contact.name} : {contact.number}
      </li>
    ))}
  </ul>
);

export default ContactList;
