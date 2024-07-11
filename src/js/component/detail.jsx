import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Detail = () => {
    const { store, actions } = useContext(Context);
    const { type, theid } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchItem = async () => {
            const data = await actions.getInformation(type, theid);
            setItem(data);
        };
        fetchItem();
    }, [type, theid]);

    if (!item) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="card mb-3" style={{ width: "100%" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src={item.imageUrl}
                            className="card-img-top"
                            alt={item.name}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            {item.gender && (
                                <p className="card-text">
                                    Gender: {item.gender} <br />
                                    Hair Color: {item.hair_color} <br />
                                    Eye Color: {item.eye_color} <br />
                                </p>
                            )}
                            {item.climate && (
                                <p className="card-text">
                                    Climate: {item.climate} <br />
                                    Population: {item.population} <br />
                                    Terrain: {item.terrain} <br />
                                </p>
                            )}
                            {item.model && (
                                <p className="card-text">
                                    Model: {item.model} <br />
                                    Manufacturer: {item.manufacturer} <br />
                                    Cost in Credits: {item.cost_in_credits}{" "}
                                    <br />
                                </p>
                            )}
                            <p className="card-text">
                                "No additional information available."
                            </p>
                            <p className="card-text">
                                <small className="text-body-secondary">
                                    Last updated just now
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Detail.propTypes = {
    name: PropTypes.string,
    gender: PropTypes.string,
    hairColor: PropTypes.string,
    eyeColor: PropTypes.string,
    climate: PropTypes.string,
    population: PropTypes.string,
    terrain: PropTypes.string,
    model: PropTypes.string,
    manufacturer: PropTypes.string,
    cost_in_credits: PropTypes.string,
    imageUrl: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
};
export default Detail;
