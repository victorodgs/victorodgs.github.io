import React, {createContext, useState, useEffect} from 'react';

import api from 'config/api';

export const JokesContext = createContext();

export const JokesProvider = props => {
  const [categories, setCategories] = useState([]);
  const [currentJoke, setCurrentjoke] = useState(null);

  const getCategories = () => {
    (async () => {
      let response = await api.get('/categories');
      setCategories(response);
    })();
  };

  const getRandomJoke = category => {
    (async () => {
      let response = await api.get(`/random?category=${category}`);
      setCurrentjoke(response);
    })();
  };

  useEffect(() => {
    getCategories();
  }, [setCategories]);

  return (
    <JokesContext.Provider value={[currentJoke, categories]}>
      {props.children}
    </JokesContext.Provider>
  );
};
