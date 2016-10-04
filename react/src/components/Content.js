import React, {Component} from 'react'
import ContentForm from './ContentForm'

const Content = props =>{
  return (
    <div className="small-12 columns callout">
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
      <ContentForm form_text={props.form_text}
      handleFormSubmit={props.handleFormSubmit} handleChange={props.handleChange}/>
    </div>
  );
}


export default Content;
