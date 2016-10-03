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
    <div className="rootWordList">
      <div className="row">{words.slice(0,3)}</div>
      <div className="row">{words.slice(3)}</div>
    </div>
  );
};

export default WordList;
