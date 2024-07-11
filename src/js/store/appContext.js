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
                setStore: (updatedStore) =>
                    setState({
                        store: Object.assign(state.store, updatedStore),
                        actions: { ...state.actions },
                    }),
            })
        );

        useEffect(() => {
            state.actions.getPeople();
            state.actions.getVehicles();
            state.actions.getPlanets();
        }, []);

        useEffect(() => {
            localStorage.setItem("store", JSON.stringify(state.store));
        }, [state.store]);

        return (
            <Context.Provider value={state}>
                <PassedComponent {...props} />
            </Context.Provider>
        );
    };
    return StoreWrapper;
};

export default injectContext;
