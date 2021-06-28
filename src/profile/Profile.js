import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const Profile = ({fullName, profession, bio, children, handleName}) => {
  const handleClick = () => {
    handleName(`Hello, my name is ${fullName}`);
  };

  return (
    <div className="card">
      <div className="card-item"></div>
      <div className="card-item">{children}</div>
      <div className="card-item">
        <h1>{fullName}</h1>
        <h3>Profession:</h3>
        <p>{profession}</p>
        <h3>Bio:</h3>
        <p>{bio}</p>
      </div>
      <div className="card-item">
        <button className="btn" onClick={handleClick}>Say Hello</button>
      </div>
    </div>
  )
}

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  handleName: PropTypes.func.isRequired,
}

Profile.defaultProps = {
  fullName: "Steve Smith",
  profession: "Full-Stack JS Developer",
  bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, dolorum!'
}

export default Profile
