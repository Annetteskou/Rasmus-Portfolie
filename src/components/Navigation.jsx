import { NavLink } from "react-router";

export default function Navigation() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Forside
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clients"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Clients
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
