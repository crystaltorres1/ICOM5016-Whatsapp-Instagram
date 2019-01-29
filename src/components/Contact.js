import React, { Component } from "react";
import "./Contact.css";
import PropTypes from "prop-types";

function Contact(props) {
  return (
    <div className="contact">
      <span> ID: {props.id}, {props.name}, Username: {props.username}, City: {props.city}</span>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired
};

export default Contact;