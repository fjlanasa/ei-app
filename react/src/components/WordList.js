import React from 'react';
import Word from './Word';

const WordList = props => {

  let words = props.words.map(word => {
    const {id, name } = word;
    // let handleClick = () => props.handleButtonClick(name);
    // debugger;
    return (
      <Word
        handleChildClick = {props.handleChildClick}
        key={id}
        name={name}
        id={id}
      />
    );
  });

  return (
    <ul className="rootWordList">
      {words}
    </ul>
  );
};

export default WordList;
