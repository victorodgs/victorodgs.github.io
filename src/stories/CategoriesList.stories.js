import React from 'react';
import {MemoryRouter} from 'react-router-dom';

import '../scss/app.scss';
import CategoriesList from '../components/layout/CategoriesList';
import {JokesContext} from '../context/JokesContext';

export default {
  title: 'Categories List Component',
  decorators: [
    storyFn => (
      <JokesContext.Provider
        value={{
          jokesContext: {
            currentJoke: 'Bilto',
            categories: ['Test'],
            getRandomJoke: category => {
              (() => {
                let response = 'aaaaaaaaaaa';
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

export const WithEmptyCategoryList = () => <CategoriesList categories={[]} />;
export const WithTwoCategoriesInList = () => (
  <CategoriesList categories={['animal', 'science']} />
);
export const WithFiveCategoriesInList = () => (
  <CategoriesList
    categories={['animal', 'science', 'food', 'sport', 'travel']}
  />
);
