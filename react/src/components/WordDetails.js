import React from 'react';
import SecondLevelWordList from './SecondLevelWordList';


const WordDetails = props => {
  return(
    <div>
      <p>
        Definition: {props.definition}
      </p>
      <div className="gif">
        <img src={props.gif_url}/>
      </div>
      <p>Get a little more specific...</p>
      <div className="children">
        <SecondLevelWordList handleChildClick={props.handleChildClick} words={props.words} />
      </div>
    </div>
  )
}

export default WordDetails;
