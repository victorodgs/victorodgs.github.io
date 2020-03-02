/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect} from 'react';
import {useParams} from 'react-router';
import {Link} from 'react-router-dom';

import {JokesContext} from 'context/JokesContext';
import ChuckPhoto from 'assets/images/jokenorris.jpg';

export default props => {
  const {jokesContext} = useContext(JokesContext);

  let {category} = useParams();

  useEffect(() => {
    if (jokesContext) {
      jokesContext.getRandomJoke(category);
    }
  }, [category]);

  return (
    <section className="joke">
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
          <blockquote className="joke-text" cite="https://api.chucknorris.io/">
            {`"${jokesContext.currentJoke}"`}
          </blockquote>
        </div>
      ) : (
        false
      )}

      <Link className="back" to="/">
        &larr; Back to Categories
      </Link>
    </section>
  );
};
