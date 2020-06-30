import React, { createContext, useState } from "react";
import animalData from "../json/animal.json";


export const StoreContext = createContext();

// Make a Provider
export const StoreProvider = ({ children }) => {
    const [animals, setAnimals] = useState(animalData.animalList);
    const [isLogin, setIsLogin] = useState(false);
    const store = {
        animalsState: [animals, setAnimals],
        isLoginState: [isLogin, setIsLogin],
    };
    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    );
};
