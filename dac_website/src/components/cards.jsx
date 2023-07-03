// import React from 'react';
import PropTypes from 'prop-types';
import './cards.css';

const Cards = ({ persons }) => {
  return (
    <div className="profile">
      {persons.map((person, index) => (
        <div className="card" key={index}>
          <img src={person.image} alt='president' />
          <h2>{person.name}</h2>
          <h3>{person.position}</h3>
        </div>
      ))}
    </div>
  );
};

Cards.propTypes = {
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Cards;
