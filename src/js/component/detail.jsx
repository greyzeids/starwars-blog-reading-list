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
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-4">
                        <img
                            src={item.imageUrl}
                            className="card-img-top"
                            alt={item.name}
                        />
                    </div>
                    <div className="col-md-8 d-flex flex-column justify-content-center align-items-center">
                        <h1 className="text-white">{item.name}</h1>
                        <p className="text-white">
                            {item.description || "No description available."}
                        </p>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <hr className="separator-red" />
                <div className="row text-center text-danger">
                    <div className="col-2">
                        <h2 className="fs-3">Name</h2>
                        <p className="fs-5">{item.name}</p>
                    </div>
                    <div className="col-2">
                        <h2 className="fs-3">Birth Year</h2>
                        <p className="fs-5">{item.birth_year}</p>
                    </div>
                    <div className="col-2">
                        <h2 className="fs-3">Gender</h2>
                        <p className="fs-5">{item.gender}</p>
                    </div>
                    <div className="col-2">
                        <h2 className="fs-3">Height</h2>
                        <p className="fs-5">{item.height}</p>
                    </div>
                    <div className="col-2">
                        <h2 className="fs-3">Skin Color</h2>
                        <p className="fs-5">{item.skin_color}</p>
                    </div>
                    <div className="col-2">
                        <h2 className="fs-3">Eye Color</h2>
                        <p className="fs-5">{item.eye_color}</p>
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
