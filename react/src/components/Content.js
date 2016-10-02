import React, {Component} from 'react'

const Content = props =>{
  return (
    <div>
      <p>
        {props.name}
      </p>
      <p>
        {props.definition}
      </p>
      <div>
        <img src={props.gif_url}/>
      </div>
    </div>
  );
}


export default Content;
