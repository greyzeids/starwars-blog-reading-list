import React, { useContext } from "react";
import Card from "../component/card";
import { Context } from "../store/appContext";
import MusicPlayer from "../component/musicplayer";

export const Home = () => {
    const { store } = useContext(Context);

    return (
        <div className="ms-5 d-flex flex-column">
            <h1 className="text-danger">Characters</h1>
            {store.listPeople.length > 0 ? (
                <ul className="d-flex list-group flex-row overflow-auto mb-5">
                    {store.listPeople.map((character, index) => (
                        <li className="list-group pe-5 pt-4" key={index}>
                            {character.properties ? (
                                <Card
                                    name={character.name}
                                    gender={character.properties.gender}
                                    hairColor={character.properties.hair_color}
                                    eyeColor={character.properties.eye_color}
                                    imageUrl={character.properties.imageUrl}
                                    id={character.uid}
                                    type="people"
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
                        <li className="list-group pe-5 pt-4" key={index}>
                            {planet.properties ? (
                                <Card
                                    name={planet.name}
                                    climate={planet.properties.climate}
                                    population={planet.properties.population}
                                    terrain={planet.properties.terrain}
                                    imageUrl={planet.properties.imageUrl}
                                    id={planet.uid}
                                    type="planets"
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
                        <li className="list-group pe-5 pt-4" key={index}>
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
                                    id={vehicle.uid}
                                    type="vehicles"
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
            <div className="container">
                <h1 className="text-danger mb-5">Related videos</h1>
                <div className="row justify-content-center">
                    <MusicPlayer videoUrl="https://www.youtube.com/embed/WQ_557JbIpQ" />
                    <MusicPlayer videoUrl="https://www.youtube.com/embed/bD7bpG-zDJQ" />
                    <MusicPlayer videoUrl="https://www.youtube.com/embed/j-ZlTTPcM1o" />
                </div>
            </div>
        </div>
    );
};
