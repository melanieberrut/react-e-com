import React from 'react';

import { NavLink } from 'react-router-dom';
const UserDetails = ({ history, user }) => {
  return (
    <div>
      <div className="section-heading">User details</div>
      <div>user name: {user.displayName}</div>
      <div>email: {user.email}</div>
      <button className="btn btn-outline-primary btn-sm">Edit</button>
    </div>
  );
};

const UserAddress = ({ history, user }) => {
  return (
    <div>
      <div className="section-heading">Default Address</div>
      <div>User Name</div>
      <div>Address Line 1</div>
      <div>Address Line 1</div>
      <div>Town</div>
      <div>Post Code</div>
      <button className="btn btn-outline-primary btn-sm">Edit</button>
    </div>
  );
};
const UserOrders = ({ history, user }) => {
  return (
    <div>
      <div className="section-heading">Orders</div>
      <ul>
        <li>
          <NavLink to={'/'}>01/06/2017 - £540.00</NavLink>
        </li>
        <li>
          <NavLink to={'/'}>26/01/2018 - £306.00</NavLink>
        </li>
        <li>
          <NavLink to={'/'}>17/03/2018 - £4354.00</NavLink>
        </li>
      </ul>
    </div>
  );
};

export { UserDetails, UserAddress, UserOrders };
