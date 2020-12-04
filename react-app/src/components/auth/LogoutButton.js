import React from "react";
import { logout } from "../../services/auth";
import { useDispatch } from 'react-redux';
import { removeUser } from '../../redux/actions/users'

const LogoutButton = ({setAuthenticated}) => {
  const dispatch = useDispatch()

  const onLogout = async (e) => {
    await logout();
    dispatch(removeUser())
    setAuthenticated(false);
  };

  return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
