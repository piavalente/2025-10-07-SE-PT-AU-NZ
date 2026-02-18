import { NavLink } from "react-router-dom";
import "../App.css";
import { useContext } from "react";
import { UserContext } from "../Context/UserProvider";

export default function NavBar() {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <nav className="NavBar">
        <ul className="menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/dash">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Posts">Posts</NavLink>
          </li>
          {currentUser != null && currentUser.user ? (
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          ) : null}
        </ul>{" "}
        {/* ++ Add another page with route and component */}
      </nav>
    </>
  );
}
