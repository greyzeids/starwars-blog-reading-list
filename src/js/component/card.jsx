import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">
                    Gender: {props.gender} <br />
                    Hair Color: {props.hairColor} <br />
                    Eye Color: {props.eyeColor} <br />
                </p>
                <a href="#" className="btn btn-outline-primary">
                    Go somewhere
                </a>
            </div>
        </div>
    );
};

Card.propTypes = {
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    hairColor: PropTypes.string.isRequired,
    eyeColor: PropTypes.string.isRequired,
};

export default Card;
