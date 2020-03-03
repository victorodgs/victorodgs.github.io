/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from 'react';
import {FaSpinner} from 'react-icons/fa';
import {useParams} from 'react-router';
import {Link} from 'react-router-dom';

import {JokesContext} from '../context/JokesContext';
import If from '../helpers/If';
import ChuckPhoto from '../assets/images/jokenorris.jpg';
import RisadaDoBola from '../assets/risada-do-bola.mp3';

export default props => {
  const {jokesContext} = useContext(JokesContext);
  const [isLoading, setIsLoading] = useState(true);
  const currentJoke = props.currentJoke || jokesContext.currentJoke;
  const {category} = useParams();

  useEffect(() => {
    if (jokesContext) {
      jokesContext.getRandomJoke(category);
      setIsLoading(false);
    }
  }, [category]);

  const refreshJoke = () => {
    setIsLoading(true);
    jokesContext.getRandomJoke(category);
    setIsLoading(false);
  };

  return (
    <section className="joke">
      <If test={!isLoading}>
        <div className="chuck-photo">
          <img
            className="chuck-photo--img"
            src={ChuckPhoto}
            alt="Chucknorris Photography"
          />
        </div>

        {jokesContext && jokesContext.currentJoke !== null ? (
          <div className="joke-data">
            <h3 className="joke-category">{category}</h3>
            <blockquote
              className="joke-text"
              cite="https://api.chucknorris.io/"
            >
              {`"${currentJoke}"`}
            </blockquote>
            <button className="newJoke" onClick={refreshJoke}>
              See a New Joke
            </button>
          </div>
        ) : (
          false
        )}
      </If>

      <If test={isLoading}>
        <FaSpinner className="loading" />
      </If>

      <Link className="back" to="/">
        &larr; Back to Categories
      </Link>

      <audio id="laugh" autoPlay>
        <source src={RisadaDoBola}></source>
      </audio>
    </section>
  );
};
