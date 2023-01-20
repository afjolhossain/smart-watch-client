import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "../../Context/UserContext";
import Link from "../Link/Link";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = useContext(authContext);
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "HOME", link: "/home" },
    { id: 2, name: "EXPLORE", link: "/explores" },
    { id: 4, name: "ABOUT-US", link: "/aboutus" },
    { id: 3, name: "CONTACT", link: "/contact" },
  ];

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then((error) => error);
  };

  return (
    <nav className="bg text-white h-20 justify-between items-center flex">
      <div onClick={() => setOpen(!open)} className="w-6 h-6  md:hidden">
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </div>
      <p className=" md:w-6/12 font-bold mx-auto">
        SMART <span className="text-green-600">WATCH</span>
      </p>

      <ul
        className={`md:flex justify-end text-xl bold md:static bg text-white absolute duration-500 ease-in sm:w-full ${
          open ? "top-12" : "top-[-120px] "
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>

      {user?.uid ? (
        <>
          <NavLink to="manageOrders" className="allorder-btn">
            YOUR ORDERS
          </NavLink>
          <NavLink to="/addNewItems" className="allorder-btn">
            ADD-ITEMS
          </NavLink>
          <span className="user-name text-2xl w-3/12">{user?.displayName}</span>
          <button
            className=" btn-logOut text-center w-3/12 mr-5"
            onClick={handleLogOut}
          >
            LOG-OUT
          </button>
        </>
      ) : (
        <NavLink to="/login" className="btn-logOut mr-10">
          <button>LOGIN</button>
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
