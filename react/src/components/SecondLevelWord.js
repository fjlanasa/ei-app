import React, {Component} from 'react';

class SecondLevelWord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      next_level_words: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert("Clicked!");
  }

  render(){
    let value = this.props.id + ',' + this.props.name;
    return (
      <option value={value}>
        {this.props.name}
      </option>

    );
  }
};

export default SecondLevelWord;
