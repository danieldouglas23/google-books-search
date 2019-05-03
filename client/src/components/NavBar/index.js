import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <Link className="navbar-brand" to="/"><i className="fab fa-google"></i> Google Books <i className="fas fa-book"></i></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-link">
                        <NavLink
                            className="nav-link"
                            activeClassName="active"
                            //which route are we at?
                            isActive={() => window.location.pathname === "/" || window.location.pathname === "/search"}
                            to="/"
                        >
                            Search
                            </NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink
                            className="nav-link"
                            activeClassName="active"
                            isActive={() => window.location.pathname === "/saved"}
                            to="/saved"
                        >
                            Saved
                            </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;