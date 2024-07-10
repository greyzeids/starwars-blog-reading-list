import React, { useState, useEffect } from "react";
import getState from "./flux.js";

export const Context = React.createContext(null);

const injectContext = (PassedComponent) => {
    const StoreWrapper = (props) => {
        const initialState =
            JSON.parse(localStorage.getItem("appState")) ||
            getState({
                getStore: () => state.store,
                getActions: () => state.actions,
                setStore: (updatedStore) =>
                    setState((prevState) => {
                        const newState = {
                            store: { ...prevState.store, ...updatedStore },
                            actions: { ...prevState.actions },
                        };
                        localStorage.setItem(
                            "appState",
                            JSON.stringify(newState)
                        );
                        return newState;
                    }),
            });

        const [state, setState] = useState(initialState);

        useEffect(() => {
            if (!localStorage.getItem("appState")) {
                const fetchAllData = async () => {
                    await Promise.all([
                        state.actions.getPeople(),
                        state.actions.getVehicles(),
                        state.actions.getPlanets(),
                    ]);
                };

                fetchAllData();
            }
        }, []);

        return (
            <Context.Provider value={state}>
                <PassedComponent {...props} />
            </Context.Provider>
        );
    };
    return StoreWrapper;
};

export default injectContext;
