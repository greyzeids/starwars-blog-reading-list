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
