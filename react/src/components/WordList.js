import React from 'react';
import Word from './Word';

const WordList = props => {

  let words = props.words.map(word => {
    const {id, name } = word;
    let handleParentClick = () => props.handleParentClick(name);
    return (
      <Word
        chosenParentName = {props.chosenParentName}
        handleParentClick = {handleParentClick}
        handleChildClick = {props.handleChildClick}
        key={id}
        name={name}
        id={id}
      />
    );
  });

  return (
    <div className="rootWordList">
      {words}
    </div>
  );
};

export default WordList;
