import React, {Component} from 'react'

const Content = props =>{
  return (
    <div className="small-12 columns">
      <div className="row">
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
      <form className = "row">
        <label>Leave a note
          <textarea type="text"/>
        </label>
      </form>
    </div>
  );
}


export default Content;
