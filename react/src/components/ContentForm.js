import React from 'react';

const ContentForm = props =>{
  return (
    <form onSubmit={props.handleFormSubmit} className = "row">
        <div className="input-group">
          <input
            className="input-group-field"
            type="text"
            placeholder="Enter something"
            value={props.form_text}
            onChange={props.handleChange}
          />
        </div>
        <div className="input-group-button">
            <input type="submit" className="button" value="Add To List" />
        </div>
    </form>
  )
}

export default ContentForm;
