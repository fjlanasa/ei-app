import React, {Component} from 'react'
import ContentForm from './ContentForm'

const Content = props =>{
  return (
    <div className="small-12 columns callout">
      <button onClick={props.handleClose} className="close-btn">
        <i className="fa fa-times" aria-hidden="true"></i>
      </button>
      <div className="content-meat">
        <p>
          {props.name}
        </p>
        <p>
          Definition: {props.definition}
        </p>
        <div className="small-12">
          <img src={props.gif_url}/>
        </div>
      </div>
      <ContentForm form_text={props.form_text}
      handleFormSubmit={props.handleFormSubmit} handleChange={props.handleChange}/>
    </div>
  );
}


export default Content;
