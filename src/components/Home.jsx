import React from 'react';

import Logo from 'assets/images/jokenorris-site-logo.png';
import CategoriesList from 'components/layout/CategoriesList';

export default props => {
  return (
    <>
      <section className="home">
        <div className="home-logo">
          <img className="home-logo--image" src={Logo} alt="Jokenorris Logo" />
          <h1 className="home-logo--text">Jokenorris</h1>
          <span className="home-logo--small">
            Jokes with Chuck Norris facts
          </span>
        </div>
      </section>
      <CategoriesList></CategoriesList>
    </>
  );
};
