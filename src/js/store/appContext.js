import React, { createContext, useEffect, useState } from "react";
import getState from "./flux";

export const Context = createContext(null);

const injectContext = (PassedComponent) => {
    const StoreWrapper = (props) => {
        const [state, setState] = useState(
            getState({
                getStore: () => {
                    const storedState = localStorage.getItem("store");
                    return storedState ? JSON.parse(storedState) : {};
                },
                getActions: () => state.actions,
                setStore: (updatedStore) => {
                    const newState = {
                        store: Object.assign(state.store, updatedStore),
                        actions: { ...state.actions },
                    };
                    setState(newState);
                    localStorage.setItem(
                        "store",
                        JSON.stringify(newState.store)
                    );
                },
            })
        );

        const [favorites, setFavorites] = useState(() => {
            const storedFavorites = localStorage.getItem("favorites");
            return storedFavorites ? JSON.parse(storedFavorites) : [];
        });

        const addFavorite = (favorite) => {
            setFavorites((prevFavorites) => {
                const newFavorites = [...prevFavorites, favorite];
                localStorage.setItem("favorites", JSON.stringify(newFavorites));
                return newFavorites;
            });
        };

        useEffect(() => {
            if (
                !state.store.listPeople ||
                state.store.listPeople.length === 0
            ) {
                state.actions.getPeople();
            }
            if (
                !state.store.listVehicles ||
                state.store.listVehicles.length === 0
            ) {
                state.actions.getVehicles();
            }
            if (
                !state.store.listPlanets ||
                state.store.listPlanets.length === 0
            ) {
                state.actions.getPlanets();
            }
        }, []);

        return (
            <Context.Provider value={{ ...state, favorites, addFavorite }}>
                <PassedComponent {...props} />
            </Context.Provider>
        );
    };
    return StoreWrapper;
};

export default injectContext;
