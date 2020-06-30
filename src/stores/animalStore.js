import React, { createContext, useState } from "react";
import animalData from "../json/animal.json";


export const StoreContext = createContext();

// Make a Provider
export const StoreProvider = ({ children }) => {
    const [animals, setAnimals] = useState(animalData.animalList);

    const store = {
        animalsState: [animals, setAnimals],
    };
    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    );
};
