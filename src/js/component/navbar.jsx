import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <Link to="/" className="navbar-brand ms-3">
                <img
                    width="100"
                    height="100"
                    src="https://img.icons8.com/ios-filled/100/star-wars.png"
                    alt="star-wars"
                />
            </Link>
            <div className="ml-auto">
                <div className="dropdown me-3">
                    <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Favoritos
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <Link to="/demo" className="dropdown-item">
                                Action
                            </Link>
                        </li>
                        <li>
                            <Link to="/another-demo" className="dropdown-item">
                                Another action
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/something-else"
                                className="dropdown-item"
                            >
                                Something else here
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
