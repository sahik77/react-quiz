import React from 'react';
import Account from "./Account";
import classes from "../styles/Nav.module.css"
import logo from "../asset/images/logo-bg.png"
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link to="/" className={classes.brand}>
                            <img src={logo} alt="Learn with Sumit Logo" />
                            <h3>Learn with Sumit</h3>
                        </Link>
                    </li>
                </ul>
                <Account></Account>
            </nav>
        </div>
    );
};

export default Nav;