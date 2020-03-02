import React, { createContext, useState, useEffect } from "react";

import api from "config/api";

export const JokesContext = createContext();

export const InvestmentsProvider = props => {
    const [jokes, setJokes] = useState(null);

    useEffect(() => {
        (async () => {
            let response = await api.get("/investments/");
            setJokes(response.data);
        })();
    }, [setJokes]);

    return (
        <JokesContext.Provider value={[jokes, setJokes]}>
            {props.children}
        </JokesContext.Provider>
    );
};
