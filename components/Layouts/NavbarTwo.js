import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const NavbarTwo = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    let elementId2 = document.getElementById("company-name");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
        elementId2.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
        elementId2.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area navbar-style-2">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container-fluid">
            <Link href="/" className="navbar-brand">
              {/* image and p on same line */}
              <div className="flex-nav">
                <Image
                  alt="header text"
                  src="/images/logo.svg"
                  className="sm:w-10 sm:h-10 w-9 h-9"
                  width={36}
                  height={36}
                />
                <p id="company-name">Xpeerienz360</p>
              </div>
            </Link>

            {/* Toggle navigation */}
            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    href="/"
                    className={`nav-link ${currentPath == "/" && "active"}`}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    href="#contact"
                    className={`nav-link ${currentPath == "/contact/" && "active"
                      }`}
                  >
                    Get in touch
                  </a>
                </li>
              </ul>
            </div>
          </div >
        </nav >
      </div >
    </>
  );
};

export default NavbarTwo;
