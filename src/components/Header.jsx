import { NavLink } from "react-router-dom";

function Header() {
  console.log("hola");
  return (
    <div>
      <nav className="header">
        <NavLink to="/">
          <img src="../../home-icon.png" alt="home-icon" />
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
