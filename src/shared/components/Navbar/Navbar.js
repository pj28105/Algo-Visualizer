import React from "react";
import { Link, NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">AlgoVisualizer</Link>
      </div>
      <div className={styles.links}>
        <NavLink className={styles.navLink} to="/">
          Tutorial
        </NavLink>
        <NavLink className={styles.navLink} to="/">
          About us
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
