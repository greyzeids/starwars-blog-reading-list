const getState = ({ getStore, getActions, setStore }) => {
    const API_URL = `https://www.swapi.tech/api/`;
    const IMG_URL = `https://starwars-visualguide.com/assets/img/`;

    const fetchData = async (endpoint, storeKey) => {
        try {
            const response = await fetch(`${API_URL}${endpoint}/`);
            const data = await response.json();

            const updatedResults = await Promise.all(
                data.results.map(async (item) => {
                    const id = item.uid;
                    const responseDetails = await fetch(
                        `${API_URL}${endpoint}/${id}`
                    );
                    const details = await responseDetails.json();

                    const imageUrl = `${IMG_URL}${
                        endpoint === "people" ? "characters" : endpoint
                    }/${id}.jpg`;
                    return {
                        ...item,
                        properties: {
                            ...details.result.properties,
                            imageUrl: imageUrl,
                        },
                    };
                })
            );

            setStore({ [storeKey]: updatedResults });
        } catch (error) {
            console.error(`Error fetching ${storeKey}:`, error);
        }
    };

    const fetchInformation = async (type, id) => {
        try {
            const response = await fetch(`${API_URL}${type}/${id}`);
            const data = await response.json();

            if (!data || !data.result || !data.result.properties) {
                throw new Error(
                    `Invalid data format for ${type} with id ${id}`
                );
            }

            const properties = {
                ...data.result.properties,
                imageUrl: `${IMG_URL}${
                    type === "people" ? "characters" : type
                }/${id}.jpg`,
                description:
                    data.result.description || "No description available.",
            };

            return properties;
        } catch (error) {
            console.error(
                `Error fetching information for ${type} with id ${id}:`,
                error
            );
            return null;
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
