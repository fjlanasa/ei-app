import React from 'react'
import SecondLevelWord from './SecondLevelWord'

const SecondLevelWordList = props => {

  let words = props.words.map(word => {
    const {id, name } = word;
    return (
      <SecondLevelWord
        key={id}
        name={name}
        id={id}
      />
    );
  });

  return (
    <select onChange={props.handleChildClick}>
      <option disabled selected value> -- select an option -- </option>
      {words}
    </select>
  );
};

export default SecondLevelWordList;
