import React from 'react';
import { useParams } from 'react-router-dom';
import studycases from '../../data/studycases';

const StudyCase = () => {
  const { slug } = useParams();
  const selectedStudy = studycases.find(study => study.slug === slug);

  if (!selectedStudy) {
    return (
      <div>
        <h2>Désolée ! Rien n'était trouvé pour ce cas.</h2>
      </div>
    );
  };

  return (
    <div>
      <h2>{selectedStudy.title}</h2>
      <p>{selectedStudy.description}</p>
    </div>
  );
};

export default StudyCase;