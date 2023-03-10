import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

export const ContactItem = ({ contact, onClick }) => {
  const { id, name, number } = contact;

  return (
    <li className={css.item} key={id}>
      <p className={css.contact}>
        {name}: {number}
      </p>
      <button
        className={css.button}
        type="button"
        onClick={e => onClick(id)}
      >
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};
