import React from 'react';

import '../scss/app.scss';
import ShowJoke from '../components/ShowJoke';
import {MemoryRouter} from 'react-router-dom';
import {JokesContext} from '../context/JokesContext';

export default {
  title: 'Show Joke Component',
  decorators: [
    storyFn => (
      <JokesContext.Provider
        value={{
          jokesContext: {
            currentJoke: 'Bilto',
            getRandomJoke: category => {
              (() => {
                let response = 'Any joke';
                return response;
              })();
            },
          },
        }}
      >
        <MemoryRouter initialEntries={['/jokes/science']}>
          {storyFn()}
        </MemoryRouter>
      </JokesContext.Provider>
    ),
  ],
};

export const WithBiltoText = () => (
  <ShowJoke currentJoke="Bilto" category="science" />
);
export const WithShortText = () => (
  <ShowJoke currentJoke="Short text in this component" category="science" />
);
export const WithLongText = () => (
  <ShowJoke
    currentJoke="Chuck Norris describes human beings as a sociable holder for blood and guts, Chuck Norris describes human beings as a sociable holder for blood and guts"
    category="science"
  />
);
