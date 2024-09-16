import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { favorites } = useContext(Context);
    const navigate = useNavigate();

    const handleFavoriteClick = (favorite) => {
        navigate(`/single/${favorite.type}/${favorite.id}`);
    };

    if (!favorites) {
        return null; // O algún manejo de error adecuado
    }

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
                        {favorites.map((favorite, index) => (
                            <li key={index}>
                                <span
                                    className="dropdown-item"
                                    onClick={() =>
                                        handleFavoriteClick(favorite)
                                    }
                                >
                                    {favorite.name}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
