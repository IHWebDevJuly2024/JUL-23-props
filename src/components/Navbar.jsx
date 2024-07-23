import menuIcon from "../assets/menu-icon.png";
import logo from "../assets/discord-logo-white.png";
import "./Navbar.css"

function Navbar() {
  return (
    <nav>
      <img src={logo} alt="discord logo" />
      <img src={menuIcon} alt="menu icon" />
    </nav>
  );
}

export default Navbar;
