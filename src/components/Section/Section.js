import React from "react";
import PropTypes from "prop-types";

const Section = ({ children, title }) => (
  <>
    <h2>{title}</h2>
    <div>{children}</div>
  </>
);

Section.protoTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Section;
