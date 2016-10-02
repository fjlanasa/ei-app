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
    return (
      <li onClick={this.props.handleChildClick}>
        {this.props.name}
      </li>

    );
  }
};

export default SecondLevelWord;
