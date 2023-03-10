import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import React from 'react';

export const ContactList = ({ children }) => {
  return <ul className={css.list}>{children}</ul>;
}

ContactList.propTypes = {
  children: PropTypes.node.isRequired,
};
