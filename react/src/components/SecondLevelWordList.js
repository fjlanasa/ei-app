import React from 'react'
import SecondLevelWord from './SecondLevelWord'

const SecondLevelWordList = props => {

  let words = props.words.map(word => {
    const {id, name } = word;
    let handleChildClick = () => props.handleChildClick(name);
    return (
      <SecondLevelWord
        handleChildClick={handleChildClick}
        key={id}
        name={name}
        id={id}
      />
    );
  });

  return (
    <ul className="inline-list">
      {words}
    </ul>
  );
};

export default SecondLevelWordList;
