import React from "react";
import logo from "../Images/logo.png";
import classes from "./Header.module.css";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillFacebook,
  AiOutlineFieldTime,
  AiFillMail,
} from "react-icons/ai";

const Header = () => {
  const navData = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Project", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact", href: "#" },
  ];
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
        <div className="container ">
          <a className="text-decoration-none text-white " href="#">
            <AiOutlineFieldTime size={25} />
            We are open 24/7 | <AiFillMail size={25} /> mail@gmail.com
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={"nav-link"} href="#">
                  <AiFillTwitterCircle
                    size={25}
                    className="bg-white rounded-circle"
                  />
                </a>
              </li>
              <li className="nav-item">
                <a className={"nav-link"} href="#">
                  <AiFillLinkedin size={25} className="bg-white" />
                </a>
              </li>
              <li className="nav-item">
                <a className={"nav-link"} href="#">
                  <AiFillFacebook size={25} className="bg-white" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            <img src={logo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {navData.map((nav, i) => {
                return (
                  <li key={i} className="nav-item">
                    <a
                      className={"nav-link active " + classes.navLink}
                      aria-current="page"
                      href={nav.href}
                    >
                      {nav.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
