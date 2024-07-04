const getState = ({ getStore, getActions, setStore }) => {
    const API_URL = `https://www.swapi.tech/api/`;

    const fetchData = async (endpoint, storeKey) => {
        try {
            const response = await fetch(`${API_URL}${endpoint}/`);
            const data = await response.json();
            setStore({ [storeKey]: data.results });
        } catch (error) {
            console.error(`Error fetching ${storeKey}:`, error);
        }
    };

    const fetchInformation = async (type, id) => {
        try {
            const response = await fetch(`${API_URL}${type}/${id}`);
            const data = await response.json();
            setStore({ infoCharacter: data.result });
        } catch (error) {
            console.error(`Error fetching ${type} with id ${id}:`, error);
        }
    };

    return {
        store: {
            listPeople: [],
            listVehicles: [],
            listPlanets: [],
            infoCharacter: [],
        },
        actions: {
            getPeople: () => fetchData("people", "listPeople"),
            getVehicles: () => fetchData("vehicles", "listVehicles"),
            getPlanets: () => fetchData("planets", "listPlanets"),
            getInformation: (type, id) => fetchInformation(type, id),
        },
    };
};

export default getState;
