import React, { useState } from "react";
import PropTypes from "prop-types";
import tatooine from "../../img/tatooine.webp";

const Card = (props) => {
    const [imageUrl, setImageUrl] = useState(props.imageUrl);

    const ImageError = () => {
        if (props.type === "planets" && props.id === "1") {
            setImageUrl(tatooine);
        } else {
            setImageUrl(tatooine);
        }
    };

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img
                src={imageUrl}
                className="card-img-top"
                alt={props.name}
                onError={ImageError}
            />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                {props.gender && (
                    <p className="card-text">
                        Gender: {props.gender} <br />
                        Hair Color: {props.hairColor} <br />
                        Eye Color: {props.eyeColor} <br />
                    </p>
                )}
                {props.climate && (
                    <p className="card-text">
                        Climate: {props.climate} <br />
                        Population: {props.population} <br />
                        Terrain: {props.terrain} <br />
                    </p>
                )}
                {props.model && (
                    <p className="card-text">
                        Model: {props.model} <br />
                        Manufacturer: {props.manufacturer} <br />
                        Cost in Credits: {props.cost_in_credits} <br />
                    </p>
                )}
                <a href="#" className="btn btn-outline-primary">
                    Learn more!
                </a>
            </div>
        </div>
    );
};

Card.propTypes = {
    name: PropTypes.string.isRequired,
    gender: PropTypes.string,
    hairColor: PropTypes.string,
    eyeColor: PropTypes.string,
    climate: PropTypes.string,
    population: PropTypes.string,
    terrain: PropTypes.string,
    model: PropTypes.string,
    manufacturer: PropTypes.string,
    cost_in_credits: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default Card;
