import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import MainTitle from "../../assets/images/majestic-logo-2x-370x69-alpha.png";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [click, setClick] = useState(true);
  const [menu, setMenu] = useState(true);

  const handleMenu = () => {
    setMenu(!menu);

    if (!click) {
      setClick(!click);
    }

    hideMenu();
  };

  const handleClick = () => setClick(!click);

  const hideMenu = () => {
    const menuTab = document.getElementById("menu");
    menuTab.addEventListener("mouseleave", () => {
      setMenu(true);
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", hideTop);

    return () => {
      window.removeEventListener("scroll", hideTop);
    };
  }, []);

  const hideTop = () => {
const {scrollTop} = document.documentElement;
const navbar = document.querySelector('.navbar');
const headerRight = document.querySelector('.right__header');
console.log(scrollTop);
    if (scrollTop > 24) {
      headerRight.style.position='fixed';
    }
    else{
        headerRight.style.position = "block";
    }
  };

  return (
    <div className="navbar">
      <header className="header">
        <div className="right__header">
          <ul>
            <li>
              <NavLink to="stores">Stores</NavLink>
            </li>
            <li>
              <NavLink to="contactUs">Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="container__menu">
          <div onClick={handleMenu} className="menu__header">
            <MenuIcon />
            <button className="button__menu">Menu</button>
          </div>
          <img className="main__title" src={MainTitle} alt="logo" />
        </div>
      </header>
      <nav className={menu ? "nav" : "nav active"}>
        <div id="menu" className="nav__menu">
          <ul>
            <li>
              <NavLink to="/">home</NavLink>
            </li>
            <li>
              <NavLink to="aboutUs">about us</NavLink>
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
                  <NavLink to="ladiesFashion">ladies fashion</NavLink>
                </li>
                <li>
                  <NavLink to="kidsFashion">kids fashion</NavLink>
                </li>
                <li>
                  <NavLink to="mensFashion">mens fashion</NavLink>
                </li>
                <li>
                  <NavLink to="watches">watches</NavLink>
                </li>
                <li>
                  <NavLink to="rucolineShoes">rucoline shoes</NavLink>
                </li>
              </ul>
            </div>
            <li>
              <NavLink to="stores">stores</NavLink>
            </li>
            <li>
              <NavLink to="pictureGallery">picture gallery</NavLink>
            </li>
            <li>
              <NavLink to="news">news</NavLink>
            </li>
            <li>
              <NavLink to="careers">careers</NavLink>
            </li>
            <li>
              <NavLink to="contactUs">contact us</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
