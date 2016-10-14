import React from 'react';

const ContentForm = props =>{
  return (
    <form onSubmit={props.handleFormSubmit} className = "row" id="content-form">
        <div className="input-group">
          <textarea
            form="content-form"
            className="textarea"
            cols="5"
            wrap="hard"
            value={props.form_text}
            onChange={props.handleChange}
          >Enter Something...</textarea>
        </div>
        <div className="input-group-button">
            <input type="submit" className="button" value="Add a Post" />
        </div>
    </form>
  )
}

export default ContentForm;
