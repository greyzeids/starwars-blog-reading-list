import React, { useContext } from "react";
import Card from "../component/card";
import { Context } from "../store/appContext";

export const Home = () => {
    const { store } = useContext(Context);

    return (
        <div className="mt-5 ms-5 d-flex flex-column">
            <h1 className="text-danger">Characters</h1>
            {store.listPeople.length > 0 ? (
                <ul className="d-flex list-group flex-row overflow-auto mb-5">
                    {store.listPeople.map((character, index) => (
                        <li className="list-group p-5" key={index}>
                            {character.properties ? (
                                <Card
                                    name={character.name}
                                    gender={character.properties.gender}
                                    hairColor={character.properties.hair_color}
                                    eyeColor={character.properties.eye_color}
                                    imageUrl={character.properties.imageUrl}
                                    type="people"
                                    id={character.uid}
                                />
                            ) : (
                                <div>Loading...</div>
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <div>Loading...</div>
            )}

            <h1 className="text-danger">Planets</h1>
            {store.listPlanets.length > 0 ? (
                <ul className="d-flex list-group flex-row overflow-auto mb-5">
                    {store.listPlanets.map((planet, index) => (
                        <li className="list-group p-5" key={index}>
                            {planet.properties ? (
                                <Card
                                    name={planet.name}
                                    climate={planet.properties.climate}
                                    population={planet.properties.population}
                                    terrain={planet.properties.terrain}
                                    imageUrl={planet.properties.imageUrl}
                                />
                            ) : (
                                <div>Loading...</div>
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <div>Loading...</div>
            )}

            <h1 className="text-danger">Vehicles</h1>
            {store.listVehicles.length > 0 ? (
                <ul className="d-flex list-group flex-row overflow-auto mb-5">
                    {store.listVehicles.map((vehicle, index) => (
                        <li className="list-group p-5" key={index}>
                            {vehicle.properties ? (
                                <Card
                                    name={vehicle.name}
                                    model={vehicle.properties.model}
                                    manufacturer={
                                        vehicle.properties.manufacturer
                                    }
                                    cost_in_credits={
                                        vehicle.properties.cost_in_credits
                                    }
                                    imageUrl={vehicle.properties.imageUrl}
                                />
                            ) : (
                                <div>Loading...</div>
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};
