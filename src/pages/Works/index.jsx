import React from 'react';
import { Link } from 'react-router-dom';
import studycases from '../../data/studycases';

const Works = () => {
  return (
    <div>
      <h2>Au fil des années, nous avons pu accompagner les meilleurs.</h2>
      <p>
        Découvrez pas à pas comment nous avons été présents pour lancer vos marques préférées.
      </p>

      <ul>
        {studycases.map(study => (
          <li key={study.slug}>
            <h2>{study.client}</h2>
            <Link to={`/works/${study.slug}`}>Voir l'étude de cas</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Works;