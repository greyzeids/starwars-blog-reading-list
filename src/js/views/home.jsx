import React, { useContext, useEffect } from "react";
import Card from "../component/card";
import { Context } from "../store/appContext";

export const Home = () => {
    const { actions, store } = useContext(Context);

    return (
        <div className="mt-5 d-flex flex-column">
            <h1 className="text-danger">Characters</h1>
            <ul className="d-flex list-group flex-row overflow-auto mb-5 ">
                {store.listPeople.map((character, index) => (
                    <li className="list-group p-5" key={index}>
                        <Card name={character.name} type="people" />
                    </li>
                ))}
            </ul>
            <h1 className="text-danger">Planets</h1>
            <ul className="d-flex list-group flex-row overflow-auto mb-5">
                {store.listPlanets.map((planet, index) => (
                    <li className="list-group p-5" key={index}>
                        <Card name={planet.name} type="planets" />
                    </li>
                ))}
            </ul>
            <h1 className="text-danger">Vehicles</h1>
            <ul className="d-flex list-group flex-row overflow-auto mb-5">
                {store.listVehicles.map((vehicle, index) => (
                    <li className="list-group p-5" key={index}>
                        <Card name={vehicle.name} type="vehicles" />
                    </li>
                ))}
            </ul>
        </div>
    );
};
