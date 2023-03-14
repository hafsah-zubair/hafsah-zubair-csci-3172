import React from 'react';

function Profile(props) {
  return (
    <div>
      <h2>Profile</h2>
      <p>First Name: {props.firstName}</p>
      <p>Last Name: {props.lastName}</p>
      <p>Email: {props.email}</p>
      <p>Favourite Season: {props.favouriteSeason}</p>
    </div>
  );
}

export default Profile;
