import React, {Component} from 'react';
import WordDetails from './WordDetails'

class Word extends Component {
  constructor(props) {
    super(props);
    this.state = {
      next_level_words: [],
      clicked: false,
      definition: null,
      gif_url: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    let url = `api/level_one_words/${this.props.id}`;
    $.ajax({
        url: url,
        contentType: 'application/json',
        data: { name: this.props.name }
    }).done((data)=> {
      this.setState({
        next_level_words: data.level_two_words,
        definition: data.definition,
        gif_url: data.gif_url,
        clicked: true
      });
    });
  }

  componentWillReceiveProps(nextProps){
    if(this.props.name == nextProps.chosenParentName) {
      if(this.state.clicked != true){
        this.handleClick();
      }
    } else {
      this.setState({clicked: false});
    }
  }

  render(){
    let wordDetailsComponent;
    if(this.state.clicked == true){
      wordDetailsComponent = <WordDetails handleChildClick = {this.props.handleChildClick}
                              words={this.state.next_level_words} definition={this.state.definition}
                              gif_url={this.state.gif_url} />;
    } else {
      wordDetailsComponent = null;
    }


    return (
      <div className="rootWord small-12 medium-6 large-6 columns">
          <div className="button" onClick={this.props.handleParentClick}>
            {this.props.name}
          </div>
          {wordDetailsComponent}
      </div>
    );
  }
};

export default Word;
