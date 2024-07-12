import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <Link to="/" className="navbar-brand ms-5">
                <img
                    width="100"
                    height="100"
                    src="https://img.icons8.com/ios-filled/100/FFFFFF/star-wars.png"
                    alt="star-wars"
                />
            </Link>
            <div className="ml-auto">
                <div className="dropdown me-5">
                    <button
                        className="btn btn-danger dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Favorites
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                            <Link to="/demo" className="dropdown-item">
                                Action
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
