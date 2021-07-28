import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="bg-none">
      <div className=" mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            activeClassName="nav-item-active"
            className="inline-flex items-center py-3 px-3 mr-4 text-2xl font-bold no-underline nav-item rounded"
            to="/"
            exact
          >
            Home{" "}
          </NavLink>{" "}
          <NavLink
            activeClassName="nav-item-active"
            className="inline-flex items-center py-3 px-3 mr-4 text-2xl font-bold no-underline nav-item rounded"
            to="/about"
          >
            About{" "}
          </NavLink>{" "}
          <NavLink
            activeClassName="nav-item-active"
            className="inline-flex items-center py-3 px-3 mr-4 text-2xl font-bold no-underline nav-item rounded"
            to="/experience"
          >
            Experience{" "}
          </NavLink>{" "}
          <NavLink
            activeClassName="nav-item-active"
            className="inline-flex items-center py-3 px-3 mr-4 text-2xl font-bold no-underline nav-item rounded"
            to="/projects"
          >
            Projects{" "}
          </NavLink>{" "}
        </nav>{" "}
      </div>{" "}
    </header>
  );
}
