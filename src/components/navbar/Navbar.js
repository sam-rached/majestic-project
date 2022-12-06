import React, {useState} from "react";
import "./Navbar.css";
import MainTitle from "../../assets/images/majestic-logo-2x-370x69-alpha.png";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
    const [click, setClick] = useState(true);
    const [menu, setMenu]=useState(true);

    const handleMenu =()=> setMenu(!menu);
    const handleClick = () => setClick(!click);


  return (
    <div className="navbar">
      <header className="header">
        <div onClick={handleMenu} className="menu__header">
          <MenuIcon />
          <button className="button__menu">Menu</button>
        </div>
        <img className="main__title" src={MainTitle} alt="logo" />
        <div className="right__header">
          <ul>
            <li>
              <a href="">Stores</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
          </ul>
        </div>
      </header>
      <nav className={menu ? "nav" : "nav active"}>
        <div className="nav__menu">
          <ul>
            <li>
              <a href="#home">home</a>
            </li>
            <li>
              <a href="#about us">about us</a>
            </li>
            <button
              onClick={handleClick}
              className={click ? "accordion" : "accordion active"}
            >
              activities
            </button>
            <div
              className={
                click ? "accordion__content" : "accordion__content active"
              }
            >
              <ul>
                <li>
                  <a href="#ladies_fashion">ladies fashion</a>
                </li>
                <li>
                  <a href="#kids_fashion">kids fashion</a>
                </li>
                <li>
                  <a href="#mens_fashion">mens fashion</a>
                </li>
                <li>
                  <a href="#watches">watches</a>
                </li>
                <li>
                  <a href="#rucoline_shoes">rucoline shoes</a>
                </li>
              </ul>
            </div>
            <li>
              <a href="#stores">stores</a>
            </li>
            <li>
              <a href="#picture_gallery">picture gallery</a>
            </li>
            <li>
              <a href="#news">news</a>
            </li>
            <li>
              <a href="#careers">careers</a>
            </li>
            <li>
              <a href="#contact_us">contact us</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
