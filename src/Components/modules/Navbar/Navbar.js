import React from "react";
import styles from "@/styles/navbar.module.css";
import Link from "next/link";

function Navbar() {
  return (
    <div className={`container-fluid p-0 ${styles.nav_bar}`}>
      <nav
        className={`${styles.navbar} ${styles.navbar_expand_lg} bg-none ${styles.navbar_dark} py-3`}
      >
        <Link href={"/"} className={`${styles.navbar_brand} px-lg-4 m-0`}>
          <h1 className="m-0 display-4 text-uppercase text-white">
            Next-Coffee
          </h1>
        </Link>
        <button
          type="button"
          className={`${styles.navbar_toggler}`}
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className={`${styles.navbar_toggler_icon}`}></span>
        </button>
        <div
          className={` ${styles.navbar_collapse} justify-between`}
          id="navbarCollapse"
        >
          <div className={`${styles.navbar_nav} ml-auto p-4`}>
            <Link
              href="/"
              className={`${styles.nav_link} ${styles.active_nav_link}`}
            >
              Home
            </Link>
            <Link href="/about" className={`${styles.nav_link}`}>
              About
            </Link>
            <a href="service.html" className={`${styles.nav_link}`}>
              Service
            </a>
            <a href="menu.html" className={`${styles.nav_link}`}>
              Menu
            </a>
            <div className={`${styles.dropdown}`}>
              <a
                href="#"
                className={`${styles.nav_link} ${styles.dropdown_toggle}`}
                data-toggle="dropdown"
              >
                Pages
              </a>
              <div
                className={`${styles.dropdown_menu} ${styles.text_capitalize}`}
              >
                <a
                  href="reservation.html"
                  className={`${styles.dropdown_item}`}
                >
                  Reservation
                </a>
                <a
                  href="testimonial.html"
                  className={`${styles.dropdown_item}`}
                >
                  Testimonial
                </a>
              </div>
            </div>
            <a href="contact.html" className={`${styles.nav_link}`}>
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
