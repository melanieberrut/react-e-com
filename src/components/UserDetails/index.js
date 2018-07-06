import React from 'react';
import SignOutButton from '../SignOut';

const UserDetails = ({ history, user }) => {
  return (
    <div>
      <div className="section-heading">User details</div>
      <div>user name: {user.displayName}</div>

      <div>email: {user.email}</div>
      <SignOutButton history={history} />
    </div>
  );
};

export default UserDetails;
