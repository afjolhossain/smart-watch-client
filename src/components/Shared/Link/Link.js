import React from "react";
import { NavLink } from "react-router-dom";

const Link = (props) => {
  const { name, link } = props.route;
  return (
    <li className="mr-6">
      <NavLink className=" hover:text-green-300" to={link}>
        {name}
      </NavLink>
    </li>
  );
};

export default Link;
