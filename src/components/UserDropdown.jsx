import React from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

const UserDropdown = () => {
  let { user, logoutUser } = useContext(AuthContext);
  let key = Math.random().toString(36).substring(7);
  return (
    <>
      <button
        type="button"
        className="flex text-sm rounded-full mr-0 text-light-gray"
        id="user-menu-button"
        aria-expanded="false"
        data-dropdown-toggle={"user-dropdown-" + key}
        data-dropdown-placement="bottom"
      >
        <span className="sr-only">Open user menu</span>
        <svg
          className="w-9"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            className="stroke-dark-gray dark:stroke-light-gray stroke-1"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 11 14H9a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 10 19Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </button>
      {user ? (
        <div
          className="z-50 hidden my-4 text-nav-bg list-none bg-light-gray divide-y divide-nav-bg rounded-lg shadow"
          id={"user-dropdown-" + key}
        >
          <div className="px-4 py-3">
            <span className="block text-sm">
              {user?.first_name} {user?.last_name}
            </span>
            <span className="block text-sm truncate">{user?.email}</span>
          </div>
          <ul className="py-2" aria-labelledby="user-menu-button">
            <li>
              <a href="#" className="block px-4 py-2 text-sm">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm">
                Settings
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm">
                Earnings
              </a>
            </li>
            <li>
              <Link onClick={logoutUser} className="block px-4 py-2 text-sm">
                Log out
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div
          className="z-50 hidden my-4 text-nav-bg list-none bg-light-gray  divide-y divide-nav-bg rounded-lg shadow"
          id={"user-dropdown-" + key}
        >
          <div className="px-4 py-3">
            <span className="block text-sm">Not logged in</span>
          </div>
          <ul className="py-2" aria-labelledby="user-menu-button">
            <li>
              <Link to="/login" className="block px-4 py-2 text-sm">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="block px-4 py-2 text-sm">
                Register
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default UserDropdown;
